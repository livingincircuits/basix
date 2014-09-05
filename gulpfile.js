var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-ruby-sass'),
	concat = require('gulp-concat'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	paths = {
		scripts: [
			'src/js/vendor/*.js',
			'src/js/*.js'
		],
		images: [
			'img/*'
		],
		sass: [
			'src/scss/*.scss',
			'src/*.css',
			'src/*.scss'
		],
	},

// Error handling
onError = function (err) {  
	gutil.beep();
	console.log(err);
};

// Sass - Prepping for source maps whenever that will be :( - https://github.com/sindresorhus/gulp-ruby-sass/issues/123
gulp.task('sass', function(){
    return gulp.src(paths.sass)
    	.pipe(plumber({ errorHandler: onError }))
        //.pipe(sass({ style: 'compact', noCache: true, sourcemap: true }))
        .pipe(sass({style: 'compact', noCache: true, 'sourcemap=none': true }))// Set to none to stop console error 
        .pipe(prefix(["last 2 version", "> 1%", "Firefox ESR", "ie 8"], { cascade: true, safe: true, map: true, to: './style.css' }))
        .pipe(minifycss({noAdvanced:true}))
		.pipe(gulp.dest('./'))
		.pipe(notify({ message: 'CSS Ready!' }));
});

// Minify JS
gulp.task('js', function () {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(plumber({ errorHandler: onError }))
		.pipe(uglify({mangle: true}))
		.pipe(concat('base.js'))
		.pipe(gulp.dest('js'));
});

// Image Minify
gulp.task('img', function () {
	return gulp.src(paths.images)
		.pipe(imagemin({ optimizationLevel: 7 }))
		.pipe(imagemin({ progressive: true, }))
		.pipe(gulp.dest('img'))
});

// Rerun Tasks
gulp.task('watch', function () {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.scripts, ['js']);
	gulp.watch(paths.images, ['img']);
});

// Default Task
gulp.task('default', ['sass', 'js', 'img', 'watch']);
