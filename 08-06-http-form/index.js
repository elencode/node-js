var http = require('http');
var fs = require('fs');
var queryString = require('querystring');

var server = http.createServer( (req, res) => {
    
    if (req.url == "/") {
        res.write( fs.readFileSync("form.html") );
    } else if ( req.url.indexOf("?email") != -1) {
        var url_data = queryString.parse(req.url);
        console.log(url_data['/?email']);

        /// save new address /////
        var data = JSON.parse( fs.readFileSync("./emails.json") ); // obtinem un array de date
        if ( !data.includes(url_data['/?email']) ) {
             data.push(url_data['/?email']);
        }
        
        fs.writeFileSync( './emails.json', JSON.stringify(data) );


        res.write( fs.readFileSync("thanks.html"));
    } else if ( req.url == "/send" ) {
        var data = JSON.parse(fs.readFileSync("./emails.json"));

        data.forEach (email => {
            res.write(`${email} <br>`);

            //?? utilizand nodemailer sa se trimita cate un email pe fiecare adresa din aceasta lista
            //w3schools nodemailer
        })
        res.write("Sending automatic emails!");
    }

    res.end();
});

server.listen(3000);