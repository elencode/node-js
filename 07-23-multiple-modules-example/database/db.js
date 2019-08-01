var fs = require( 'fs' );

//in functia saveData inainte de a se scrie in fisier sa se verifice daca acest fisier exista pe disc
//in cazul in care exista, sa se afiseze un mesaj de avertizare, atentie fisierul deja exista, mesajele vor disparea/vor fi suprascrise
function saveData(data) {
    if ( fs.existsSync("data.txt") ) {
        console.error("This file already exists! The data will be overwritten!"); 
    }
    fs.writeFileSync("data.txt", data);
}

function deleteData() {
    fs.unlinkSync("data.txt");
}

exports.saveData = saveData;
exports.deleteData = deleteData;