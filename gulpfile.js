'use strict';

const gulp             = require('gulp');

const nunjucksRender   = require('gulp-nunjucks-render');

const plumber          = require('gulp-plumber');
const server           = require('browser-sync').create();

const del              = require('del');

const debug            = require('gulp-debug');

gulp.task('html', () => {

	return gulp.src('src/index.html')
		.pipe(plumber())
		.pipe(debug({title: 'html:'}))
		.pipe(nunjucksRender({
			path: 'src/'
		}))
		.pipe(gulp.dest('build'))

});

gulp.task('js', () => gulp.src('src/messenger.js').pipe(gulp.dest('build/js')));
gulp.task('css', () => gulp.src('src/messenger.css').pipe(gulp.dest('build/css')));

gulp.task('serve', () => {

	gulp.src('src/avatar.svg').pipe(gulp.dest('build/img'))

	server.init({
		server: 'build',
		files: [
			{
				match: 'build/**/*.*',
				fn: server.reload()
			}
		]
	});

});

gulp.task('clear', () => del('build'));
gulp.task('watch', () => {

	gulp.watch('src/messenger.js', gulp.series('js'));
	gulp.watch('src/messenger.css', gulp.series('css'));
	gulp.watch('src/index.html', gulp.series('html'));

});

gulp.task('default', gulp.series('clear', 'html', 'css', 'js', gulp.parallel('watch', 'serve')));