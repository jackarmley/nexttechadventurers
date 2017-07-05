// Gulp tasks

// Load dependencies
const gulp = require('gulp'),
      fuse = require('fuse'),
      concatCss = require('gulp-concat-css'),
      connect = require('gulp-connect'),
      icons = require("gulp-material-icons"),
      sprites = require("gulp-svg-sprites"),
      tasks   = require("./icons.json"),
      paths = {
          'html': './src/html/',
          'css': './src/css/',
          'js': './src/js/',
          'images': './static/images/',
          'icons': './static/icons'
      };

// Task: Combine html
// This combines all html files within the src/html folder together into
// one index.html file
gulp.task('html', function() {
    return fuse.fuseFile(paths.html + 'index.html', './index.html', function (err, results) {
    	console.log('html', results);
    });
});

// Task: Combine js
// This combines all js files within the src/js folder together into
// one app.js file
gulp.task('js', function() {
    return fuse.fuseFile(paths.js + 'app.js', './static/js/app.js', function (err, results) {
    	console.log('js', results);
    });
});

// Task: Combine css
// This combines all css files that are called via @import statements in the
// src/css/_styles.css file
gulp.task('css', function () {
  return gulp.src(paths.css + '_styles.css')
    .pipe(concatCss("styles.css"), {
        'inlineImports': true
    })
    .pipe(gulp.dest('./static/css'))
    .pipe(connect.reload());
});

// Task: connect
// This runs a local server so the site can be tested
// on mobiles, tablets etc...
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port: 2017
  });
});

// Task: make icons
// This makes an icon set for us to use
gulp.task("icons", function() {
    return icons({tasks: tasks})
        .pipe(sprites())
        .pipe(gulp.dest(paths.icons));
});

// Task: watch
// This automatically runs the css and html tasks whenever a file is saved
gulp.task('watch', function () {
  gulp.watch(['./src/html/**/*', './src/css/**/*', './src/js/**/*'], ['html','icons','css', 'js']);
});

// Task: package
// Package everything up without having to run watch
gulp.task('package', ['html', 'icons', 'css', 'js']);

// Task: default
// This runs when you type "gulp" into the terminal
gulp.task('default', ['connect', 'watch']);
