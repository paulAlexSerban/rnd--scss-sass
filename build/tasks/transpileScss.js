import { src, dest } from "gulp";
import dartSass from "dart-sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import debug from "gulp-debug";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";

const sass = gulpSass(dartSass);
const plugins = [autoprefixer()];

export const transpileScss = () => {
  return src(["./src/*/*.scss"])
    .pipe(plumber())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename((file) => {
        file.dirname = ``;
    }))
    .pipe(debug({ title: "transpileScss : " }))
    .pipe(dest('./dist'));
};