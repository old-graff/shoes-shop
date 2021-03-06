var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var concat_json = require("gulp-concat-json");
var notifier = require('../../helpers/notifier');
var tarsConfig = require('../../../tars-config');

/**
 * conact data for pages to one file
 * @param  {object} buildOptions
 */

module.exports = function (buildOptions) {

    return gulp.task('html:concat-pages-data', function (cb) {

        return gulp.src(['./markup/pages/**/json.json'])
            .pipe(concat_json('pageData.json', { newLine: ',\n\n' }))
            .on('error', notify.onError(function (error) {
                return '\nAn error occurred while concating page\'s data.\nLook in the console for details.\n' + error;
            }))
            .pipe(gulp.dest('./dev/temp/'))
            .pipe(
            notifier('Data for pages ready')
        );
    });
};