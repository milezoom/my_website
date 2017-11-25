var gulp = require('gulp');
var sass = require('gulp-sass');
var minifier = require('gulp-cssnano');
var rename = require('gulp-rename');

var sassFiles = 'assets/scss/precompiled/*.scss',
    cssDest = 'assets/css/',
    cssFiles = 'assets/css/*.css',
    cssMinDest = 'assets/css-min/';

gulp.task('compile', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('minify', function(){
    gulp.src(cssFiles)
        .pipe(minifier())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(cssMinDest));
});

gulp.task('watch', function(){
    gulp.watch(sassFiles,['compile','minify']);
});