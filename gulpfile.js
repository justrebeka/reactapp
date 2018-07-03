"use strict"

var gulp = require('gulp');
var conn = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');
var open = require('gulp-open');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var browserSync = require('browser-sync');


var config = {
    port: 8080,
    baseurl: 'http://localhost',
    paths: {
        html: './src/*.html',
        images: './src/images/*.png',
        js: './src/**/*.js*',
        indexJs: './src/Index.jsx',
        dist: './public',
        css: [
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css']
    }
}

gulp.task('conn', function () {
    conn.server({
        root: ['public'],
        port: config.port,
        base: config.baseurl,
        livereload: true,
        middleware: function (connect, opt) {
            return [
                historyApiFallback({})
            ]
        }
    });
});

gulp.task('open', ['conn'], function () {
    gulp.src('public/index.html').
        pipe(open({ uri: config.baseurl + ':' + config.port + "/home" }));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(conn.reload());
});


gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(conn.reload());

    gulp.src('./favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('lint', function () {
    gulp.src(config.paths.js)
        .pipe(lint({ config: './eslintrc.json' }))
        .pipe(lint.format())
});

gulp.task('js', function () {
    browserify(config.paths.indexJs)
        .transform(babelify, { presets: ["es2015", "react"] })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(conn.reload());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.images, ['images']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);

