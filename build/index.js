import { task, series, parallel, watch } from "gulp";
import { clean } from "./tasks/clean";
import { transpileScss } from "./tasks/transpileScss";

const env = process.env.NODE_ENV || "development";

task("clean", clean);

task("build:styles", transpileScss);
task("build", parallel("build:styles"));

task("compile", series("clean", "build"));

task("watch", () => {
	watch(["./src/*/*.scss"], series("compile"));
});
