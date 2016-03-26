'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var ngAnnotate = require('gulp-ng-annotate');
var less = require('gulp-less');

gulp.task('default', ['help']);

var paths = {
  js: ['app/setup.js', 'app/components/*/*.js', 'app/components/*/*/*.js', 'app/render.js'],
  less: ['less/main.less'],
  vendor: ['node_modules/react/dist/react.js', 'node_modules/react-router/umd/ReactRouter.js']
};

/*
* Build
*/

gulp.task('build', ['build-js', 'build-less']);

gulp.task('build-less', function() {
	return gulp.src(paths.less)
		.pipe(less())
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build-js', function() {
	return gulp.src(paths.js)
	.pipe(babel({
		presets: ['react']
	}))
	.pipe(concat('app.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('dist/'))
});

gulp.task('build-js-vendor', function() {
	return gulp.src(paths.vendor)
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('dist/'))
});