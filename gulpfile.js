var gulp = require('gulp');
var eventStream = require('event-stream');
var ts = require('gulp-typescript');

gulp.task('ts', function() {

  var jsFromTs = gulp.src('src/*.ts')
         .pipe(ts({
             modules: 'commonjs'
         }));

  return eventStream.merge(
      jsFromTs.dts.pipe(gulp.dest('release/definitions')),
      jsFromTs.js.pipe(gulp.dest('release/js'))
    );

});