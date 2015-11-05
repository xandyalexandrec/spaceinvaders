var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var gulpFilter    = require('gulp-filter');
var gulpClean     = require('gulp-clean');
var jshint        = require('gulp-jshint');
var usemin        = require('gulp-usemin');
var uglify        = require('gulp-uglify');
var minifyCss     = require('gulp-minify-css');
var autoprefixer  = require('gulp-autoprefixer');
var rename        = require('gulp-rename');
var watchLess     = require('gulp-watch-less');
var less          = require('gulp-less');
var Server = require('karma').Server;

gulp.task('clean', function() {
    gulp.src('./dist')
        .pipe(gulpClean())
});

gulp.task('lint', function() {
    gulp.src(['./src/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('templateCache', function() {
    return gulp.src('./src/**/*.tpl.html')
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copyAssets', function() {
    return gulp.src([
            './src/assets/**',
            '!./src/assets/less',
            '!./src/assets/less/**'
        ])
        .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('processIndex', function() {
    return gulp.src('./src/index.html')
        .pipe(usemin({
            css: [minifyCss({
                keepBreaks: true,
                processImport: true
            }), 'concat'],
            //      html: [minifyHtml({empty: true})],
            js: [uglify(), 'concat']
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copyCss',['processIndex'], function() {
    return gulp.src('./dist/assets/css/min.css')
      .pipe(rename('min_ori.css'))
      .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('processCss',['copyCss'], function() {
      gulp.src('./dist/assets/css/min_ori.css')
      .pipe(rename('min.css'))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('less', function() {
  return gulp.src('src/assets/less/yggdrasil.less')
    .pipe(less())
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task('watch', ['less'], function() {
  gulp.watch('src/assets/less/**/*.less', ['less']);
});

gulp.task('test', function (done) {
  new Server({
    configFile: require('path').resolve('karma.conf.js'),
    singleRun: true
  }, done).start();
});

gulp.task('default', ['templateCache', 'copyAssets', 'processIndex', 'copyCss', 'processCss']);