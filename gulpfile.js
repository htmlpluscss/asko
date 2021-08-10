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

gulp.task('serve', () => {

	gulp.src('src/avatar.svg').pipe(gulp.dest('build/img'))
	gulp.src('src/messenger.js').pipe(gulp.dest('build/js'))
	gulp.src('src/messenger.css').pipe(gulp.dest('build/css'))

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
gulp.task('watch', () => gulp.watch('src/index.html', gulp.series('html')));

gulp.task('default', gulp.series('clear', 'html', gulp.parallel('watch', 'serve')));