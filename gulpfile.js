const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const pug = require('gulp-pug');

gulp.task('css', () => {
  const postcss = require('gulp-postcss');

  return gulp.src('src/styles/app.css')
      .pipe(plumber())
      .pipe(postcss())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('views', () => {
  return gulp.src('src/views/index.pug')
    .pipe(plumber())
    .pipe(pug({
      basedir: __dirname
    }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('public/'))
});

// Watch soruces and update styles and scripts
gulp.task('watch', (done) => {
  gulp.watch(['src/**/*'], gulp.series('css', 'views'));

  done();
});

// Create serve webserver
gulp.task('connect', (done) => {
  connect.server({
    root: 'public'
  });

  done();
});

// Build static files
gulp.task('build', gulp.series('css', 'views'));

// Build static files and watch changes by default.
gulp.task('serve', gulp.series('css', 'views', 'connect', 'watch'));