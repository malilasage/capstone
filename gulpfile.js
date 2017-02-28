const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const nodemon = require('gulp-nodemon')

gulp.task('default', ['browser-sync'], function () {
})

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init({
    proxy: 'http://localhost:3000',
    files: ['capstone/client/**/*.*'],
    browser: 'google chrome',
    port: 7000,
		reloadDelay: 1000,
  })
})

gulp.task('nodemon', function (cb) {
  let started = false

  return nodemon({
    script: './bin/www',
    ignore: [
      'app/public/',
      'gulpfile.js',
      'node_modules/'
    ],
  }).on('start', function () {
    if (!started) {
			setTimeout(cb, 500)
      started = true
    }
  })
})
