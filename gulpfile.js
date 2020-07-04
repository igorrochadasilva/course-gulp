var gulp = require('gulp');
var html = require('gulp-htmlmin');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

//sass
gulp.task('sass',function(){
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({outputStyle:"compressed"}))
    .pipe(gulp.dest('./dist/css/'))
});

// html
gulp.task('html',function(){
    return gulp.src('./src/index.html')
    .pipe(html({collapseWhitespace:true}))
    .pipe(gulp.dest('./dist'));
});

