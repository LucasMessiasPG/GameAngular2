var gulp = require('gulp');

var assetsDev = 'dev/assets/';
var assetsProd = 'app/src/';

var appDev = 'dev/';
var appProd = 'app/';

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
    return gulp.src(assetsDev + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-img', function () {
    return gulp.src(assetsDev + 'img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('build-html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

gulp.task('move-js', function () {
    return gulp.src(assetsDev + 'js/**/*.js')
        .pipe(gulp.dest(assetsProd + 'js/'));
});

gulp.task('move-css', function () {
    return gulp.src(assetsDev + 'css/**/*.css')
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('move-fonts', function () {
    return gulp.src(assetsDev + 'fonts/**/*')
        .pipe(gulp.dest(assetsProd + 'fonts/'));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.html', ['build-html']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'img/**/*', ['build-img']);
    gulp.watch(assetsDev + 'css/**/*', ['move-css']);
    gulp.watch(assetsDev + 'js/**/*', ['move-js']);
    gulp.watch(assetsDev + 'fonts/**/*', ['move-fonts']);
});

gulp.task('default', ['watch', 'build-ts', 'build-html','build-img', 'build-css','move-css','move-fonts','move-js']);