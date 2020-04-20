const gulp = require('gulp')
const concat = require('gulp-concat')
const bolt = require('gulp-firebase-bolt-compiler')

const paths = [
  '../packages/rules/functions/**/*.bolt',
  '../packages/rules/types/**/*.bolt',
  '../packages/rules/paths/**/*.bolt',
  '../packages/admin/src/**/*.bolt',
]

function buildRules() {
  return gulp
    .src(paths)
    .pipe(concat('rules.bolt'))
    .pipe(bolt())
    .pipe(gulp.dest('../temp/'))
}

exports.default = buildRules
