const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};

// efeitos de digitar letras js:

function escrita(tag) {
  tituloArray = tag.innerHTML.split("");
  tag.innerHTML = "";

  tituloArray.forEach((letra, i) => {
    setTimeout(() => {
      tag.innerHTML += letra;
    }, i * 75);
  });
}

const titulo = document.querySelector("[data-titulo]");

escrita(titulo);
