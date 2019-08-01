//module 
class Car {
    constructor(model, photos, year, type, power, worth) {
        this.model = model,
        this.photos = photos,
        this._year = year,//
        this.type = type,//
        this._power = power,//
        this.worth = worth
    }

    get year(){
        return this.year;
    }

    set year(value) {
        if (value < 1999) {
            this._year= value;
        } else {
            console.error('This car is too old');
        }
    }

    get power(){
        return this._power;
    }

    set power(value) {
        if (value > 0) {
            this._power = value;
        } else {
            console.error('power cannot be negative');
        }
    }
    log() {
        console.log(`%cCAR`,"color:green; font-size: 30px;");
        console.log(`%c  model: ${this.model}`,"color:grey; font-size: 20px;");
        // for(var i = 0; i < this.photos.length; i++) {
        //     console.log(`%c -photo ${i}:${this.photos[i]}`,"color:grey; font-size: 20px;");
        // }
        
        this.photos.forEach( (photo,i) => {
            console.log(`%c -photo ${i}: ${photo}`, "color:grey; font-size: 20px;");
        });

        console.log(`%c  year: ${this.year}`,"color:grey; font-size: 20px;");
        console.log(`%c  type: ${this.type}`,"color:grey; font-size: 20px;");
        console.log(`%c  power: ${this.power}`,"color:grey; font-size: 20px;");
        console.log(`%c  worth: ${this.worth}`,"color:grey; font-size: 20px;");
        
        
    }
}