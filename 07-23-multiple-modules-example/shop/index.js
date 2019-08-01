var commerce = require ("./commerce");

//console.log(commerce);

var p = new commerce.Product('pizza','100');

var c = new commerce.Client('Markus','01234567');

p.info();
c.info();