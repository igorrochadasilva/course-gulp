var gulp = require('gulp');
var html = require('gulp-htmlmin');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();


//sass
gulp.task('sass',function(){
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({outputStyle:"compressed"}))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
});

// html
gulp.task('html',function(){
    return gulp.src('./src/template/index.html')
    .pipe(html({collapseWhitespace:true}))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});


//broser-sync
gulp.task('BS',['html','sass'], function() {
    browserSync.init({
        server:{
            baseDir: './dist'
        }
    })
    gulp.watch('./src/index.html',['html'])
    gulp.watch('./src/scss/style.scss',['sass'])
});


gulp.task('default',['BS']);


