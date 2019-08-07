let http = require("http")
let fs = require("fs")

let server = http.createServer( (req,res) => {

    console.log( req.url )
    if (req.url == "/") {
        var html = fs.readFileSync("./html/home.html")
    } else if (req.url.endsWith(".css")) {
        var html = fs.readFileSync("." + req.url )
    } else if (req.url == "/images/icon.png") {
        var html = fs.readFileSync("./images/icon.png")
    } else {
        var html = "not found!"
    }
    
    res.write(html)
    res.end()
})
server.listen(3000)