
var fs = require("fs"); 
var sharp = require("sharp");

//urmarim schimbarile din dosarul images/original
fs.watch("./images/original", function() {
    console.log('something has changed!');
    //fs -> lista fisierelor dintr-un directoriu
    var file_names = fs.readdirSync("./images/original");
    //console.log(file_names);
    //-array of string
    //1) prin metodele String testati extensiile fisierelor originale (.jpg, .png),
    //toate celelalte extensii trebuie ignorate
    //2) toate pozele convertite sa fie impartite in 2 mape diferite
    //daca jpg - thumbs/jpg, daca png - thumbs/png
    //string.endswith
    file_names.forEach( generateThumb );
});

function generateThumb(file_name) {
    if ( `${file_name}`.endsWith('jpg') ){
        var folder = 'jpg';
    } else if ( `${file_name}`.endsWith('png') ) {
        var folder = 'png';
    }
    sharp(`./images/original/${file_name}`) //functia asta ne returneaza un obiect
        .resize(100,100)
        .toFile(`./images/thumbs/${folder}/sm-${file_name}`);
}