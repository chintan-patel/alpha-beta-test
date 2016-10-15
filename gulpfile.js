var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var less = require('gulp-less');
var path = require('path');

gulp.task('bower', function () {
    return gulp.src('src/index.html')
    .pipe(wiredep({

    }))
    .pipe(gulp.dest('./dest'));
});

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dest'));
});



gulp.task('index', function () {
  var sources = gulp.src(['./dest/**/*.js', './dest/**/*.css'], {read: false});

  return gulp.src('./dest/index.html')
  .pipe(inject(sources))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['less', 'bower', 'index'],  function(){

});