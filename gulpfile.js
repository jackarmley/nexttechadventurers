const gulp = require('gulp'),
      fuse = require('fuse'),
      concatCss = require('gulp-concat-css'),
      connect = require('gulp-connect');

gulp.task('html', function() {
    return fuse.fuseFile('./src/html/index.html', './index.html', function (err, results) {
    	console.log(results);
    });
});

gulp.task('css', function () {
  return gulp.src('./src/css/_styles.css')
    .pipe(concatCss("styles.css"), {
        'inlineImports': true
    })
    .pipe(gulp.dest('./static/css'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port: 2017
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/html/**/*', './src/css/**/*'], ['html','css']);
});

gulp.task('default', ['connect', 'watch']);
