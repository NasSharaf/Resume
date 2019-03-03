var gulp 		= require('gulp'),
	modernizr	= require('gulp-modernizr');

gulp.task('modernizr', function() {
	return gulp.src(['./resume-master/assets/styles/**/*.css', './resume-master/assets/scripts/**/*.js'])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./temp/scripts/'));
});