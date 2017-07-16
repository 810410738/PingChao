var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
gulp.task("default", ['serve']);

gulp.task("serve", function(){
    browserSync.init({
        server: "./"
    });
    browserSync.stream();
    gulp.watch("css/**/*.css").on("change",reload);
    gulp.watch("**.html").on("change", reload);
    gulp.watch("view/**/*.html").on("change", reload);
    gulp.watch("js/**/*.js").on("change",reload);
})