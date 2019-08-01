class User {
    constructor(login, password) {
        this.login = login,
        this.password = password
    }

    checkPassword(password){
        if (password != this.password)
            return false;
            
        return true;
    }

}

var user1 = new User("test","1234");

console.log(user1);
console.log(user1.checkPassword("1234"));