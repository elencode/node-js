c1 = new Car("BMW 5", ['1.jpg','2.jpg'], 1999, 'sedan', 250, 5000);

c1.log();



o1 = new Owner("Mark XYZ", 2000);

//alert( o1.age() ); - se foloseste ca metoda

o1.age = 0;
o1.log();

alert( o1.age); // folosim get si va fi ca proprietate

c1.year = 50;
alert(c1.year);

c1.power = -300;
alert(c1.power);