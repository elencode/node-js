let http = require("http") //vine un obiect cu multe optiuni

let server = http.createServer( (req, res) => {
    console.log("client request!");
    res.write("<h1>Hello client!</h1>")
    res.write("Bye client!")
    res.end()
} ) //crearea serverului
//arrow function va fi actionata la fiecare request
//request - vine de la client. response - se trimite la client. 
//ambele sunt obiecte


server.listen(3000) //pornirea serverului. il punem in regim de asteptare
//localhost:3000

