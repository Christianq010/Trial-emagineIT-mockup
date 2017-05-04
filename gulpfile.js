//Create a variable named gulp to reference our gulp files in the node_modules folder when installed
var gulp = require('gulp');

// Variable to use SASS after our installation
var sass = require('gulp-sass');

//after each task/plugin install, create a task name that will perform the task when called upon
gulp.task('sass', function () {
    //do something eg. console.log('Hello World');
        return gulp.src('./sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
});
