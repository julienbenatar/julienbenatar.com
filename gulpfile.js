'use strict';

var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var less = require('gulp-less');

gulp.task('default', ['help']);

var paths = {
  js: ['js/*.js'],
  less: ['less/*.less']
};

/*
* Build
*/

gulp.task('build', ['build-js', 'build-less']);

gulp.task('build-less', function() {
	return gulp.src(paths.less)
		.pipe(less(paths.less))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build-js', function() {
	return gulp.src(paths.js)
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'))
});