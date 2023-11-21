const { src, dest, watch, series } = require('gulp');

//Css y Sass
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

//Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {
    //Compilar Sass

    //Paso 1 - Identificar el archivo Sass

    src('src/scss/app.scss')

        //Paso 2 - Compilar el archivo Sass

        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([autoprefixer()]))

        //Paso 3 - Guardar el archivo CSS en la carpeta css

        .pipe(dest('build/css'));
    done();
}

function copiarHtml(done) {
    src('src/pages/*.html')
        .pipe(dest('build/pages'));
    done();
}

function copiarJS(done) {
    src('src/scripts/**/*.js')
        .pipe(dest('build/js'));
    done();
}


function imagenes(done) {

    src('src/img/**/*.{png,jpg,jpeg,gif,svg,webp}')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
    done();
}

function versionWebp(done) {
    src('src/img/**/*.{png,jpg,jpeg,gif}')
        .pipe(webp())
        .pipe(dest('build/img'));
    done();


}

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}

exports.copiarJS = copiarJS;
exports.copiarHtml = copiarHtml;
exports.css = css;
exports.dev = dev;
exports.versionWebp = versionWebp;
exports.imagenes = imagenes;
exports.default = series(copiarJS,copiarHtml, css, imagenes, versionWebp, dev);

//Series = ejecuta la primera tarea y luego la segunda

//Parallel = ejecuta las tareas al mismo tiempo