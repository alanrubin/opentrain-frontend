'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('watch', ['wiredep', 'styles', 'fonts-dev', 'test'], function() {
	gulp.watch('app/styles/**/*.less', ['styles']);
	gulp.watch('app/modules/**/*.js', ['scripts']);
	gulp.watch('app/modules/**/*.coffee', ['coffee']);
	gulp.watch('app/images/**/*', ['images']);
	gulp.watch('bower.json', ['wiredep']);
	gulp.watch('app/modules/**/*.test.{js,coffee}', ['test']);
});