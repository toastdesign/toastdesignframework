var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	imagemin = require('gulp-imagemin'),
	prefixr = require('gulp-autoprefixer');


// Compress images 
gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'));
});

// Minify scripts
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('js/minjs'));
});

// Compile sass files
gulp.task('styles', function(){
	gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(prefixr('last 4 versions'))
		.pipe(gulp.dest(''));
});

// Watch files for changes
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'image', 'watch']);