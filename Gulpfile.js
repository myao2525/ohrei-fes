var gulp = require("gulp"),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync'),
    modRewrite = require('connect-modrewrite'),
    ngrok = require('ngrok'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('connect', function(){
    browserSync({
        server: {
            middleware: [modRewrite(['!\\.\\w+$ /index.html [L]'])]
        },
        port: 8181,
        open: false
    });

    ngrok.connect(8080, function(error, url) {
        console.log('[ngrok] ' + url);
    });
});
gulp.task('sass', function(){
    sass('./scss/application.scss', {style: 'expanded'})
        .pipe(gulp.dest('./css'));
});
gulp.task('watch', function(){
    gulp.watch(['./**/*.scss'], ['sass']);
    gulp.watch(['./**/*.html', './css/application.css', './js/*.js', './json/*.json'], function(){
        browserSync.reload();
    });
});
gulp.task('default', ['connect', 'watch']);