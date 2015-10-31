const assign = require('lodash.assign'),
    autoprefixer  = require('gulp-autoprefixer'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    connect = require('gulp-connect'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    normalize = require('node-normalize-scss'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    watchify = require('watchify');

// add custom browserify options here
const customOpts = {
  entries: ['./app/scripts/main.js'],
  debug: true
};
const opts = assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts)); 

b.transform(babelify);

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./build'));
}

gulp.task('bundle', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

gulp.task('styles', function () {
  return gulp.src('app/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({includePaths: normalize.includePaths}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    // option passed in on the next line ensures FF doesn't
    // shit the bed when trying to figure out where
    // normalize comes from
    .pipe(sourcemaps.write({sourceRoot: 'app/styles'}))
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', function() {
  return gulp.src(['./app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('index', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('build'));
});

gulp.task('images', function() {
  gulp.src('app/images/**')
  .pipe(gulp.dest('build/images'));
});

gulp.task('connect', function connectTask() {
  connect.server({
    root: 'build',
    livereload: false,
    port: 8888
  });
});

gulp.task('server', ['index', 'images', 'bundle', 'styles', 'connect']);

gulp.task('default', ['server'], function() {
  livereload.listen();
  gulp.watch('./app/styles/**/*', ['styles']).on('change', livereload.changed);
  gulp.watch('./app/index.html', ['index']).on('change', livereload.changed);
  // Rather than watching the source JS files, livereload checks if source
  // has been bundled into build/main.js
  // the index task is called here to force the browser to refresh
  gulp.watch('./build/main.js', ['lint','index']).on('change', livereload.changed);
});
