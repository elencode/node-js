class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    info(){
        console.log(`${this.name}: ${this.price} `);
    }
}

class Client {
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }

    info() {
        console.log(`${this.name}: ${this.phone} `);
    }
}

module.exports.Product = Product;
module.exports.Client = Client;