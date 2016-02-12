var gulp = require('gulp');


// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps   = require('gulp-sourcemaps');
// var cssnano      = require('gulp-cssnano');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var runSequence = require('run-sequence')


// gulp.task('sass', function (){
//   return gulp.src('app/styles/main.sass')
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(cssnano())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('app/css'))
//     .pipe(reload({stream:true}))
// })

// gulp.task('distcss', function (){
//   return gulp.src('app/styles/button-animations.sass')
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(cssnano())
//     .pipe(gulp.dest('dist/'))
// })

// gulp.task('distjs', function (){
// 	return gulp.src('app/js/button-animations.js')
// 	.pipe(gulp.dest('dist/'))
// })



gulp.task('browserSync', function (){
	browserSync({
		server:{
			baseDir: 'src'
		}
	})
})


gulp.task('watch', ['browserSync'], function (){
  	// gulp.watch('src/styles/**/*.sass', ['sass']);
	gulp.watch('src/**/*.html', reload);
	gulp.watch('src/app/**/*.js', reload);
	gulp.watch('src/content/css/*.css')
})

gulp.task('default', function(callback){
	runSequence(
		['browserSync', 'watch']
	)
})
