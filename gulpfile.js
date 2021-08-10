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
		.pipe(gulp.dest('build/messenger'))

});

gulp.task('serve', () => {

	server.init({
		server: 'build/messenger',
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