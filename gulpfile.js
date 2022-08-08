const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  gulp.src('./src/views/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
  cb();
}

function publish(cb) {
  // jQuery
  gulp.src('./node_modules/jquery/dist/jquery.min.js*')
    .pipe(gulp.dest('./public/js'));
  // pagePiling.js
  gulp.src('./node_modules/pagepiling.js/dist/*.min.css*')
    .pipe(gulp.dest('./public/css'));
  gulp.src('./node_modules/pagepiling.js/dist/*.min.js*')
    .pipe(gulp.dest('./public/js'));
  // fontawesome-free
  gulp.src('./node_modules/@fortawesome/fontawesome-free/css/*.min.css*')
    .pipe(gulp.dest('./public/fontawesome/css'));
  gulp.src('./node_modules/@fortawesome/fontawesome-free/js/*.min.js*')
    .pipe(gulp.dest('./public/fontawesome/js'));
  gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('./public/fontawesome/webfonts'));
  // bootstrap
  gulp.src('./node_modules/bootstrap/dist/css/*.min.css*')
    .pipe(gulp.dest('./public/css'));
  gulp.src('./node_modules/bootstrap/dist/js/*.min.js*')
    .pipe(gulp.dest('./public/js'));
  // imagens
  gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img'));
  // videos
  gulp.src('./src/videos/**/*')
    .pipe(gulp.dest('./public/videos'));
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle),
  ),
  parallel(cssMinify, jsMinify),
  publish,
);
