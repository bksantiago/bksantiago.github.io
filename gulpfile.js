var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/fullpage.js/dist/jquery.fullpage.js'
  ])
    .pipe(concat('ext.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js/'));
});

gulp.task('default', ['build'], function() {
  console.log("haha")
});