const util = require('util');
var education = require ("./modules/education");

//console.log(education);

var univ = new education.University("UTM");
var group1 = new education.Group("TLC-073", 2007);
var group2 = new education.Group("TLC-483", 2012);

var st1 = new education.Student("Albert Einstein", 1932);
var st2 = new education.Student("Michael Jackson", 1974);
var st3 = new education.Student("Antonio Banderas", 1969);

var st4 = new education.Student("Thomas Edison", 1912);
var st5 = new education.Student("Till Lindeman", 1973);
var st6 = new education.Student("Jim Carrey", 1981);

univ.addGroup(group1);
univ.addGroup(group2);

group1.addStudent(st1);
group1.addStudent(st2);
group1.addStudent(st3);

group2.addStudent(st4);
group2.addStudent(st5);
group2.addStudent(st6);
//console.log(univ);
console.log(util.inspect(univ, false, null, true));
