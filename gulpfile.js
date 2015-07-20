const gulp = require('gulp');
const print = require('gulp-print');
const gutil = require('gulp-util');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const vueify = require('vueify');
const watchify = require('watchify');
const argv = require('yargs').argv;

const BUILD_DST = './dist/';
const APP_SRC = './src/';
const APP_TARGET = 'index.js';

vueify.compiler.applyConfig({
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime'],
  },
});

gulp.task('bundle', () => {
  const b = browserify({
    entries: APP_SRC + APP_TARGET,
    cache: {},
    packageCache: {},
    plugin: argv.watch ? [watchify] : [],
    transform: [vueify],
  });

  function rebundle() {
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(APP_TARGET))
      .pipe(gulp.dest(BUILD_DST))
      .pipe(print((filepath) => {
        return filepath.replace(/^.*[\\\/]/, '') + ' was bundled';
      }));
  }

  b.on('update', rebundle);

  return rebundle();
});

gulp.task('build', ['bundle']);

gulp.task('default', ['build']);
