'use strict';

var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var ngAnnotate = require('gulp-ng-annotate');
var less = require('gulp-less');

gulp.task('default', ['help']);

var paths = {
  js: ['app/components/*/*.js', 'app/components/*/*/*.js', 'app/app.js'],
  less: ['less/main.less']
};

/*
* Build
*/

gulp.task('build', ['build-js', 'build-less']);

gulp.task('build-less', function() {
	return gulp.src(paths.less)
		.pipe(less())
		.pipe(minifycss())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build-js', function() {
	return gulp.src(paths.js)
	.pipe(babel())
	.pipe(concat('app.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('dist/'))
});