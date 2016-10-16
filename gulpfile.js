var gulp = require('gulp');
var wiredep = require('wiredep');
var inject = require('gulp-inject');
var less = require('gulp-less');
var path = require('path');
var del = require('del');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var es = require('event-stream');
var order = require('gulp-order');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('clean', function () {
    return del([
        'dest/public',
        'dest/index.html'
    ]);
});
gulp.task('inject', function () {
    return gulp.src('src/index.html')
        .pipe(inject(gulp.src(['dest/public/**/*.js', 'dest/public/**/*.css'], { read: false }), { ignorePath: 'dest/', addRootSlash: true }))
        .pipe(gulp.dest('./dest'));
});

gulp.task('concat', function () {
    return gulp.src(['src/scripts/**/*.js'])
        .pipe(order([
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ]))
        .pipe(concat('scripts/main.js'))
        .pipe(gulp.dest('./dest/public'));
});

gulp.task('concatBowerFiles', function () {
    return gulp.src(wiredep().js)
        .pipe(concat('bowerComponents.js'))
        .pipe(gulp.dest('./dest/public/scripts'));
})

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dest/public'));
});

gulp.task('copy', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dest'));
});

gulp.task('copyTemplates', function () {
    return gulp.src(['./src/**/*.html', '!./src/index.html'])
        .pipe(gulp.dest('./dest/public'));
});

gulp.task('copyFonts', function () {
    return gulp.src(['./bower_components/bootstrap/dist/fonts/**', './bower_components/font-awesome/fonts/**'])
        .pipe(gulp.dest('./dest/public/fonts'));
});


gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "dest"
        }
    });
    gulp.watch('src/**/*', ['default']).on('change', browserSync.reload);
    gulp.start('default');
});

gulp.task('default', ['copy', 'copyTemplates', 'copyFonts', 'less', 'concatBowerFiles', 'concat', 'inject'], function () {
});