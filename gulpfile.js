
var gulp = require('gulp'); //本地安装gulp所用到的地方
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
 
gulp.task("default", function () {
  return gulp.src(["js/*.js"])
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize("main",{
        configFile : "js/main.js",
    }))
    .pipe(uglify())
    .pipe(concat("index.js"))
    .pipe(gulp.dest("build"));
});