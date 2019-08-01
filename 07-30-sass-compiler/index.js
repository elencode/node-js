var sass = require("node-sass");
var fs = require("fs");
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

var css = fs.readFileSync("./dis/style.css", {encoding: String});
postcss([ autoprefixer ]).process(css).then(result => {
  result.warnings().forEach(warn => {
    console.warn(warn.toString())
  })
  console.log(result.css)
})
fs.watch("./src/style.scss", function (){
    console.log('something has changed!');
    var change_sass = fs.readFileSync("./src/style.scss");
    change_sass.forEach( compileSCSS );
});
function compileSCSS(){
    var result = sass.renderSync({
        file: "./src/style.scss",
        outputStyle: 'compressed'     
        //documentatie ->OPTIONS
        // sa se adauge stilul compresat
        // sa se genereze source maps !
        // sa se adauge auto prefixare
    });
    fs.writeFileSync("./dist/style.css", result.css.toString());
}
//console.log( result.css.toString() );


compileSCSS();

//utilizand .watch() -> cand se modifica ceva in style.scss -> autocompileze
