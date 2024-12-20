'use strict';

const gulp             = require('gulp');

const postcss          = require('gulp-postcss');
const autoprefixer     = require("autoprefixer");
const csso             = require("gulp-csso");
const minify           = require('gulp-minify');
const browserReporter  = require('postcss-browser-reporter');

const mqpacker         = require("css-mqpacker");
const precss           = require("precss");
const sourcemaps       = require('gulp-sourcemaps');

const fileinclude      = require('gulp-file-include');
const include          = require("gulp-include");
const nunjucksRender   = require('gulp-nunjucks-render');

const rename           = require('gulp-rename');

const plumber          = require('gulp-plumber');
const server           = require('browser-sync').create();
const ftp              = require('gulp-ftp');
const replace          = require('gulp-replace');
const filter           = require('gulp-filter');

const del              = require('del');
const fs               = require("fs");

const newer            = require('gulp-newer');

const concat           = require('gulp-concat');
const gulpif           = require('gulp-if');
const remember         = require('gulp-remember');

const debug            = require('gulp-debug');

const w3cjs            = require('gulp-w3cjs');
const svgSprite        = require('gulp-svg-sprite');

let config             = null;

const domain           = 'asko.htmlpluscss.website';

try {

	config           = require('./config.json');

	config.ftp.remotePath += domain;


}catch(e){

	console.log("config the file doesn't exists");

}

gulp.task('html', ()=> {

	const f = filter('**/*.html', {restore: true});

	return gulp.src('src/**/index.html', {since: gulp.lastRun('html')})
		.pipe(plumber())
		.pipe(debug({title: 'html:'}))
		.pipe(nunjucksRender({
			data: {
				url: 'https://' + domain
			},
			path: 'src/'
		}))
//		.pipe(w3cjs({
//			url : 'https://validator.w3.org/nu/'
//		}))
//		.pipe(w3cjs.reporter())
		.pipe(f)
		.pipe(replace('js/scripts.js', 'js/scripts.js?' + Date.now()))
		.pipe(replace('css/styles.css', 'css/styles.css?' + Date.now()))
		.pipe(gulp.dest('build'))

});

gulp.task('html-touch', ()=> {

	return gulp.src('src/**/index.html')
		.pipe(plumber())
		.pipe(nunjucksRender({
			data: {
				url: 'https://' + domain
			},
			path: 'src/'
		}))
		.pipe(gulp.dest('build'))

});

gulp.task('css',  ()=> {

	return gulp.src('src/css/style.css')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(postcss([
				precss(),
				mqpacker(),
				browserReporter()
			]))
			.pipe(sourcemaps.write())
			.pipe(rename('styles.css'))
			.pipe(gulp.dest('build/css'))
			.pipe(postcss([
				autoprefixer({
					browsers: 'Android >= 5'
				})
			]))
			.pipe(csso())
			.pipe(rename({suffix: ".min"}))
			.pipe(gulp.dest('build/css'))

});

gulp.task('js', ()=> {

	return gulp.src([

		'src/js/min/*.js',

		'!src/js/min/swiper.min.js',
		'!src/js/min/nouislider.min.js',

		'src/js/js.js',
		'src/js/*.js',

	], {since: gulp.lastRun('js')})

		.pipe(debug({title: 'js'}))

		.pipe(sourcemaps.init())

		.pipe(remember('js'))

		.pipe(concat('scripts.js'))

		.pipe(sourcemaps.write())

		.pipe(minify({
			preserveComments: "some",
			ext : {
				min:'.min.js'
			}
		}))

		.pipe(gulp.dest('build/js'))
		.pipe(gulp.dest('min'))

});

gulp.task('serve', ()=> {

// min copy
	gulp.src([
		'src/js/min/swiper.min.js',
		'src/js/min/nouislider.min.js'
	])
	.pipe(gulp.dest('build/js'))

	server.init({
		server: 'build',
		files: [
			{
				match: ['build/**/*.*', '!build/**/*.min.{css,js}'],
				fn: server.reload()
			}
		]
	});

});

gulp.task('clear', ()=> del('build'));

gulp.task('copy', ()=> {

	return gulp.src(['src/**/*.*', '!src/**/*.{css,html,js}'])
			.pipe(debug({title: 'copy:'}))
			.pipe(newer('build'))
			.pipe(debug({title: 'copy:newer'}))
			.pipe(gulp.dest('build'))

});

gulp.task('ftp',  ()=> {

	if(!config) {

		return true;

	}

	const f = filter('**/*.html', {restore: true});

	return gulp.src(['build/**/*','!build/img/**/*'], {since: gulp.lastRun('ftp')})
		.pipe(debug({title: 'ftp:'}))
		.pipe(f)
		.pipe(replace('css/styles.css', 'css/styles.min.css'))
		.pipe(replace('js/scripts.js', 'js/scripts.min.js'))
		.pipe(f.restore)
		.pipe(ftp(config.ftp));

});

gulp.task('watch', ()=> {
	gulp.watch('src/js/*.*', gulp.series('js'));
	gulp.watch('src/css/*.*', gulp.series('css'));
	gulp.watch('src/**/index.html', gulp.series('html'));
	gulp.watch(['src/_include/*.html','src/template/*.html'], gulp.series('html-touch'));
	gulp.watch(['src/**/*.*', '!src/**/*.{css,html,js}'], gulp.series('copy'));
	gulp.watch('build/**/*.*', gulp.series('ftp'));
});

gulp.task('default', gulp.series(
	'clear',
	gulp.parallel('css','js'),
	'html',
	'copy',
	gulp.parallel('ftp','watch','serve')
	));


gulp.task('proxy', ()=> {

	gulp.src([
		'src/js/min/swiper.min.js',
		'src/js/min/nouislider.min.js',
		'src/js/min/jquery.min.js',
		'src/js/min/jquery.fancybox.min.js'
	])
	.pipe(gulp.dest('build/js'))

	server.init({
		proxy: "https://asko-gallery.ru/",
		https: true,
		serveStatic: ['.'],
		rewriteRules: [
			{
				match: new RegExp('/css/styles.css', 'g'),
				fn: '/build/proxy.css'
			},
			{
				match: new RegExp('/js/scripts.js', 'g'),
				fn: '/build/proxy.js'
			},
			{
				match: new RegExp('\<a href="/zakaz/" class="header__cart"[^>]*>(.|\n|\r)*?\<\/a\>'),
				fn: ()=> {
					return `

					<a href="/zakaz/" class="header__cart header__cart--empty" data-empty="Корзина пуста">

						<span class="header__cart-current">

							<span class="header__cart-count"></span>
							<span class="header__cart-value"></span>
							<span class="rub"></span>

						</span>

					</a>

					`;
				}
			}
		],
		files: [
			{
				match: ['build/**/*.*'],
				fn: server.reload()
			},
			{
				match: ['src/js/*.js'],
				fn: (event, file)=> {
					return gulp.src([
							'src/js/min/*.js',
							'!src/js/min/swiper.min.js',
							'!src/js/min/nouislider.min.js',
							'!src/js/min/jquery.min.js',
							'!src/js/min/jquery.fancybox.min.js',
							'src/js/js.js',
							'src/js/*.js',
						])
						.pipe(sourcemaps.init())
						.pipe(concat('proxy.js'))
						.pipe(sourcemaps.write())
						.pipe(gulp.dest('build'))
				}
			},
			{
				match: ['src/css/*.css'],
				fn: (event, file)=> {
					return gulp.src('src/css/style.css')
						.pipe(plumber())
						.pipe(sourcemaps.init())
						.pipe(postcss([
							precss(),
							mqpacker()
						]))
						.pipe(concat('proxy.css'))
						.pipe(sourcemaps.write())
						.pipe(gulp.dest('build'))
				}
			}
		]
	});

});