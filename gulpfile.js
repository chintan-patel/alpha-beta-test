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
var templateCache = require('gulp-angular-templatecache');



gulp.task('clean', function () {
    return del([
        'dest/public',
        'dest/index.html'
    ]);
});
gulp.task('inject', function () {
    return gulp.src('src/index.html')
        .pipe(inject(gulp.src(['dest/public/**/*.js', 'dest/public/**/*.css'], {read: false}), {ignorePath: 'dest/', addRootSlash: true}))
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
gulp.task('template', function(){
return gulp.src(['src/**/*.html', '!src/index.html'])
    .pipe(templateCache({
        module: 'alphaBeta',
        transformUrl: function(url) {
            console.log(url);
            return url.replace(/^/, '/public/')
        }
    }))
    .pipe(gulp.dest('dest/public/scripts'));
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

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "dest"
        }
    });
    gulp.start('default');
    gulp.watch('src/**/*', ['default'])
    gulp.watch("dest/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['copy', 'less', 'concatBowerFiles', 'template', 'concat', 'inject'], function () {
});