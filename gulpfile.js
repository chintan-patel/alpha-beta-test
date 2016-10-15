var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

gulp.task('bower', function () {
    return gulp.src('src/index.html')
    .pipe(wiredep({

    }))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['bower'],  function(){

});