//acest exemplu demonstreaza cum pot fi salvate niste date in fisier

var username = "Tester";
var password = "password";
var email = "test@test.test";

//conectam modulul file system
//cand incarcam un modul se indica o variabila in care trebuie incarcat

var fs = require('fs');
//console.log(fs);
fs.writeFileSync("data.txt",`${username}\n${password}\n${email}`);