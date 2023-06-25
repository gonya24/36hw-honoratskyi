import gulp from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify"
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

const BUILD_FOLDER = './dist';
const SRC_FOLDER = './src';
const JS_FILES_PATH = SRC_FOLDER +'/js/**/*.js'
const CSS_FILES_PATH = SRC_FOLDER + '/sass/**/*.scss'

gulp.task('compileJS',() =>{
    return  gulp.src(JS_FILES_PATH)
         .pipe(concat('script.js'))
         .pipe(uglify())
         .pipe(gulp.dest(BUILD_FOLDER + '/js'))
     } ) 
gulp.task('compileSCSS', ()=>{
    return gulp.src(CSS_FILES_PATH)
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(concat('style.css'))
            .pipe(gulp.dest(BUILD_FOLDER +'/css'));
    })

 gulp.task ('default', gulp.series(
    'compileSCSS',
    'compileJS'
    )
)
 