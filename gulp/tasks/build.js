var gulp 		= require('gulp'),
	imagemin	= require('gulp-imagemin'),
	del 		= require('del'),
	usemin		= require('gulp-usemin'),
	rev			= require('gulp-rev'),
	cssnano		= require('gulp-cssnano'),
	uglify		= require('gulp-uglify'),
	browserSync	= require('browser-sync').create();

//preview dist ready application in browser
gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

//Delete Dist folder to clear any previous builds
gulp.task('deleteDistFolder', function(){
	return del("./docs");
});

//to add any other files outside of the ones in the functions below
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./resume-master/*/*/*',
		'!./resume-master/index.html',
		'!./resume-master/assets/images/**',
		'!./resume-master/assets/styles/**',
		'!./resume-master/assets/scripts/**',
		'!./resume-master/temp',
		'!./resume-master/temp/**'
	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});

//optimizes images for quick loading
gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./resume-master/assets/images/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start("usemin");
});

//Returns revisions and compressed css, js files
gulp.task('usemin', ['styles', 'scripts'], function(){
	return gulp.src("./resume-master/index.html")
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function(){return uglify()}]
		}))
		.pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);

