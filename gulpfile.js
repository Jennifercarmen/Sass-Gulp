var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var minifyhtml = require('gulp-minify-html');
var watch = require('gulp-watch');

var config = {
  source: './src/',
  dist: './dist/'
};

var paths = {
  assets: "assets/",
  html: "*.html",
  sass: "scss/*.scss",
  css: "css/*.css"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.source + paths.sass,
  css: config.source + paths.css,
};

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(concat('index.html'))
    .pipe(minifyhtml({ collapseWhiteSpace: true }))
    .pipe(gulp.dest('dist'))
});

gulp.task('sass', () => 
  gulp.src("./src/scss/*.scss")
  .pipe(sass())
  .pipe(gulp.dest('./src/css'))
);

gulp.task('css', function () {
  return gulp.src(['src/css/*.css', 'src/sass/*.scss'])
    .pipe(sass())
    .pipe(concat('styles.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
})



gulp.task('watch', function () {
  gulp.watch(sources.html, ['html']);
  gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['css']);

});
