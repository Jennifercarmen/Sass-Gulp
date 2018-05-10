var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var minifyhtml = require('gulp-minify-html');



gulp.task('html', ()=> {
  return gulp.src('src/*.html')
   .pipe(concat('index.html'))
     .pipe(minifyhtml({collapseWhiteSpace: true }))
   .pipe(gulp.dest('dist'))
 });

gulp.task('css', function(){
  return gulp.src('src/css/*.css')
  .pipe(concat('styles.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css/'))
})


