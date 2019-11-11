const { src, dest, watch, series, paraller } = require('gulp');
const path = require('path');
const environments = require("gulp-environments");
const gulpif = require("gulp-if");
const through = require("through2");
const webserver = require("gulp-webserver");
const del = reuqire("del");
const data = require("gulp-data");
const nunjucksRender = require("gulp-nunjucks-render");
const indent = require("indent.js");
const htmlhint = require("gulp-htmlhint");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const cleanCSS = require("gulp-clean-css");
const pxtorem = require("gulp-pxtorem");
const replace = require("gulp-replace");
const autoprefixer = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");
const reporter = require("gulp-reporter");
const syntax_scss = require("postcss-scss");
const mqpacker = require("css-mqpacker");
const stylelint = require("stylelint");
const merge = require("merge-stream");
const spritesmith = require("gulp.spritesmith-multi");
const listFilepaths = require("list-filepaths");
const w3cjs = require("gulp-w3cjs");

//settings
const distPath = "./publick/dist";

const development = environments.development;
const production = environments.production;

function server(){
    return src("./public/dist").pipe({
        host: '0.0.0.0',
        port: 1111,
        livereload: false,
        open: false,
        directoryListing: {
            enable: true,
            path: "./publick/dist"
        }
    })
    .on("error", e => {
        console.log(e);
        this.emit('end')
    })

}

