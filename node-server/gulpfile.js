/**
 * Gulpfile from gulp angular yeoman generator
 */

'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var nodemon = require('gulp-nodemon');

var tsProject = ts.createProject('tsconfig.json', {
    declaration: true
});

gulp.task('build', function() {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(tsProject());

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done.
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});

// gulp.task('watch', ['scripts'], function() {
//     gulp.watch('src/**/*.ts', ['scripts']);
// });

gulp.task('default', function(){
    var stream = nodemon({ script: 'release/js/app.js'
          , ext: 'ts'
          , ignore: ['release/']
          , tasks: ['build'] })
})
