//module 
class Owner {
    constructor(fullname, year) {
        this.fullname = fullname,
        this.year = year

    }

//getter/setter
//apelam ca o proprietate dar functioneaza ca o metoda
//mdn class getter

    get age() {
        return new Date().getFullYear() - this.year;
    }

    set age( value ) {
        if (value > 0){
            this.year =  new Date().getFullYear() - value;
        } else {
            console.error('age cannot be negative');
        }

    }
    log() {
        console.log(`%cOWNER`,"color:brown; font-size: 30px;");
        console.log(`%c  fullname: ${this.fullname}`,"color:grey; font-size: 20px;");
        console.log(`%c  year: ${this.year}`, "color:grey; font-size: 20px;");


    }
}