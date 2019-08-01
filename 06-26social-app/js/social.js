//modulul principal - logica de baza a retelei

//lista tuturor utilizatorul din fb-ul nostru
var users = [];

// o functie care genereaza multi utilizatori fake
function generateUsers(number = 10){
    while (users.length != number){
        users.push( new User() );
    }
}
// var u = new User("Ilie Iliescu","1.jpg","m","1919-01-01","Maldiva");
// var ue = new User();

// console.log(u);
// console.log(ue);

//functia care afiseaza lista utilizatorilor
function showUsers(){
    var ulist = document.getElementById('user-list');

    // users.forEach( function( user ){
    //     ulist.appendChild( user.render() );
    // })
    users.forEach( user => ulist.appendChild( user.render() ));
}

generateUsers();

// users[0].friends.push(users[1]);

users[0].addFriend(users[1]);
users[0].addFriend(users[1]);
users[0].addFriend(users[1]);
users[0].addFriend(users[2]);
console.log(users);
showUsers();