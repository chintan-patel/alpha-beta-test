var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var less = require('gulp-less');
var path = require('path');
var del = require('del');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var es = require('event-stream');


gulp.task('clean', function () {
    return del([
        'dest/scripts',
        'dest/index.html',
        'dest/css'
    ]);
});
gulp.task('inject', function () {
     return gulp.src('src/index.html')
        .pipe(wiredep())
        .pipe(inject(gulp.src(['dest/**/**.js', 'dest/**/*.css'])))
        .pipe(gulp.dest('./dest'));
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dest'));
});

gulp.task('copy', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['copy', 'less', 'inject'], function () {

});