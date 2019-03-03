//dependencies
var gulp 			= require('gulp'),
	postcss			= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer'),
	cssvars			= require('postcss-simple-vars'),
	nested			= require('postcss-nested'),
	cssImport		= require('postcss-import'),
	mixins			= require('postcss-mixins')
	hexrgba			= require('postcss-hexrgba');

//pipes styles sheets and processes for postCSS/SASS
gulp.task('styles', function() {
	return gulp.src('./resume-master/assets/styles/main.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./temp/main'));
});