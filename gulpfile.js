const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

const paths = {
  dist: './public/',
  src: './src',
};

function browserSyncInit(done) {
  browserSync.init({
    server: {
      baseDir: paths.dist,
    },
    ui: false,
    host: 'localhost',
    port: 9000
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function stylesProcess() {
  const postcss = require('gulp-postcss');

  return gulp.src('src/styles/app.css')
      .pipe(plumber())
      .pipe(postcss())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('.'));
}

function scriptsProcess() {
  return gulp.src('src/scripts/*.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(concat('scripts.min.js'))
      .pipe(gulp.dest('.'));
}

function htmlProcess() {
  return gulp.src('src/views/index.pug')
    .pipe(plumber())
    .pipe(pug({
      basedir: __dirname
    }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest(paths.dist))
}

function watchFiles() {
  gulp.watch(
    './src' + '/**/*',
    gulp.series(stylesProcess, scriptsProcess, htmlProcess, browserSyncReload)
  );
}

// Build static files and watch changes by default.
const build = gulp.series(stylesProcess, scriptsProcess, htmlProcess);

// Wath file changes
const watch = gulp.parallel(build, watchFiles, browserSyncInit);

exports.build = build;
exports.default = watch;
