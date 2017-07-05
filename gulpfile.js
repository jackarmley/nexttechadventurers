// Gulp tasks

// Load dependencies
const gulp = require('gulp'),
      fuse = require('fuse'),
      concatCss = require('gulp-concat-css'),
      connect = require('gulp-connect'),
      icons = require('gulp-material-icons'),
      sprites = require('gulp-svg-sprites'),
      tasks   = require('./icons.json'),
      concat = require('gulp-concat'),
      paths = {
          'html': {
            'src': './src/html/',
            'dest': './'
          },
          'css': {
            'src': './src/css/',
            'dest': './dist/css/'
          },
          'js': {
            'files' : [
                './src/js/_shared.js',
                './src/js/_site-header.js',
                './src/js/_site-footer.js',
                './src/js/_section-intro.js',
                './src/js/_section-about.js',
                './src/js/_section-gallery.js',
                './src/js/_section-location.js',
                './src/js/_section-wishlist.js'
            ],
            'src': './src/js/',
            'dest': './dist/js/'
          },
          'images': {
            'src': './src/images/',
            'dest': './dist/images/'
          },
          'icons': {
            'src': './src/icons/',
            'dest': './dist/icons/'
          }
      };

// Task: Combine html
// This combines all html files within the src/html folder together into
// one index.html file
gulp.task('html', function() {
    return fuse.fuseFile(paths.html.src + 'index.html', paths.html.dest + 'index.html', function (err, results) {
    	console.log('html', results);
    });
});

// Task: Combine js
// This combines all js files within the src/js folder together into
// one app.js file
gulp.task('js', function() {
  return gulp.src(paths.js.files)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.js.dest));
});

// Task: Combine css
// This combines all css files that are called via @import statements in the
// src/css/_styles.css file
gulp.task('css', function () {
  return gulp.src(paths.css.src + '_styles.css')
    .pipe(concatCss("styles.css"), {
        'inlineImports': true
    })
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload());
});

// Task: Move images
// This moves images from the src to dist folder
gulp.task('images', function () {
    gulp.src(paths.images.src + '**/*')
        .pipe(gulp.dest(paths.images.dest));
});

// Task: make icons
// This makes an icon set for us to use
gulp.task("icons", function() {
    return icons({tasks: tasks})
    .pipe(sprites())
    .pipe(gulp.dest(paths.icons.dest));
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

// Task: watch
// This automatically runs the css and html tasks whenever a file is saved
gulp.task('watch', function () {
  gulp.watch([paths.html.src + '**/*', paths.css.src + '**/*', paths.js.src + '**/*', paths.images.src + '**/*'], ['html','css', 'js', 'images']);
});

// Task: package
// Package everything up without having to run watch
gulp.task('package', ['html', 'icons', 'css', 'js', 'images']);

// Task: default
// This runs when you type "gulp" into the terminal
gulp.task('default', ['connect', 'icons', 'watch']);
