var gulp = require('gulp');
var sass = require('gulp-sass');
var minifier = require('gulp-cssnano');
var rename = require('gulp-rename');

var sassFiles = 'assets/scss/**/*.scss',
    preCompiledFiles = 'assets/scss/precompiled/*.scss',
    cssDest = 'assets/css/';

gulp.task('compile', function () {
    gulp.src(preCompiledFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(minifier())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(sassFiles, ['compile']);
});