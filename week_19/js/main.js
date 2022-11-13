

// Assigment 1
class Car {
    constructor(name, model, price) {
        // properties
        this.n = name;
        this.m = model;
        this.p = price;
    }
    // Methods
    run() { 
        return `Car Is Running Now`;
    }
    stop() { 
        return ` Car Is Stopped`;
    }
}

let car_one = new Car("honda",2007,270000);
let car_two = new Car("kay",2013,290000);
let car_three = new Car("sizoky",2020,360000);

console.log(`Car One ${car_one.n} Is MG And Model Is ${car_one.m} And Price Is ${car_one.p}`);
console.log(car_one.run());
// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"





// Assigment 2
// Parent Class
class Phone {
    constructor(name, serial, price) {
        // properties
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
    // Methods
}
// Derived Class
class Tablet extends Phone { 
    constructor(name, serial, price, size) { 
        // properties
        super(name, serial, price);
        this.size = size || "Unknown";
    }
    // Methods
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
}

// Write Tablet Class Here
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9
console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5
console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

















// Assigment 3
// Edit The Class
class User {
    // properties
    // private Propertie
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    // Methods
    get showData() { // Can You See A private Propertie 
        let numberWithoutDash = Array.from([this.#c].toString()).filter((el) => el !== "-").join("");
        let part_1 = numberWithoutDash.slice(0, 4);
        let part_2 = numberWithoutDash.slice(4, 8);
        let part_3 = numberWithoutDash.slice(8, 12);
        let part_4 = numberWithoutDash.slice(12, 16);
        return `Hello ${this.u} Your Credit Card Number Is ${part_1}-${part_2}-${part_3}-${part_4}`;
    }
    // Solution Other
    /*
    get showData() {
        let re = /\d{4}-\d{4}-\d{4}-\d{4}/ig;
        if (String(this.#c).match(re)) {
            let myString = String(this.#c).match(re);
            return `Hello ${this.u} your card number is ${myString.join("")} `;
        }else{
            re = /[0-9]{4}-?/ig;
            let myString = String(this.#c).match(re)
            return `Hello ${this.u} your card number is ${myString.join("-")} `
        }
    }
    */
}
let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined











// Assigment 4
// Write Your Code Here
String.prototype.addLove = function() {
    return `I Love ${this} Web School`
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School










// Assigment 5
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
    score: {
        writable: false,
    },
    id: {
        enumerable: false,
    }
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}






































































































































