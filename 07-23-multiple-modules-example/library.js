var data = [
    {username:"ivanushka"},
    {username:"mariushka"},
    {username:"vovanushka"}
];

//console.log(data);

module.exports.data = data; //accesam datele din afara cu export

//o functie locala
function test() {
    console.log("library Test ok!!!");
}
//exportam
module.exports.test = test;