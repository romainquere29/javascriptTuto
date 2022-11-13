'use strict';

// 208. Constructor functions

// const Person = function(firstname, birthYear) {
//     // Instance properties
//     this.firstname= firstname;
//     this.birthYear= birthYear;

    // // Instance method - Never do this : Never declare method in constructor function => Use prototype
    // this.calcAge = function() {
    //     return 2022-birthYear;
    // }
    // this.age=this.calcAge();
// }

// const romain = new Person('Romain',1986);

// const matilda = new Person('Matilda',2017);
// const jack = new Person('Jack',1975);

// console.log(romain,matilda,jack);
// console.log(romain instanceof Person);

// 209. Prototypes
// All the objects build from the constructor will inherit method+properties from the prototype of this constructor

// console.log(romain.__proto__);

// Person.prototype.calcAge = function() {
//     console.log(2022-this.birthYear);
//     this.age=2022-this.birthYear;
// }

// romain.calcAge();
// Person.prototype.species = 'Homo Sapiens' ;
// console.log(romain,matilda,jack);
// console.log(romain.species);

// console.log(romain.__proto__);
// console.log(romain.__proto__.__proto__);
// //console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3,6,48,5,-1,5,3]; // new Array
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function() {
//     //The Set object lets you store unique values of any type, whether primitive values or object references.
//     return [...new Set(this)];
// }

// // console.log(arr.unique());
// // console.log([...new Set([33,35,33])]);

// const h1 = document.querySelector('h1');

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`Accelerate - New speed of ${this.make} is ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`Break - New speed of ${this.make} is ${this.speed} km/h`);
// }

// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercedes',95);

// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// bmw.brake();
// console.log(bmw,mercedes);

///////////////////////////////////////

// 213. ES6 Classes

// Class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//     constructor(fullname, birthYear) {
//         this.fullName= fullname;
//         this.birthYear=birthYear;
//     }

    // //Method will be added to .prototype property
    // calcAge() {
    //     console.log(2022-this.birthYear);
    // }
    // greet () { // equivalent to PersonCl.prototype.greet = function() { outside of class declaration
    //     console.log(`Hey ${this.firstname}`);
    // }

    // get age() {
    //     return 2022-this.birthYear;
    // }

    // // Set a property that already exists
    // // Setter is useful when a validation is required
    // set fullName(name) {
    //     // console.log(name);
    //     if(name.includes(' ')) this._fullName = name;
    //     else alert(`${name} is not a fullname`);
    // }

    // get fullName() {
    //     return this._fullName;
    // }

    // // static method are applied only to class and not inherited
    // static hey() {
    //     console.log('Hey there 😀🔥');
    // }
// }

// PersonCl.hey = function () {
//     console.log('Hey there 😀🔥');
// }



// const jessica = new PersonCl('Jess Davies',1990);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica);

// // PersonCl.prototype.greet = function() {
// //     console.log(`Hey ${this.firstname}`);
// // }
// jessica.greet();


// PersonCl.hey();
// jessica.hey();

//214. Setters and getters

// const account = {
//     owner: 'Romain',
//     movement: [200,-5,-250,27],

//     get latest() {
//         return this.movement.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movement.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 33;
// console.log(account.movement);

// 216. Object Create
// const PersonProto = {
//     calcAge() {
//         console.log(2022-this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2005;
// steven.calcAge();

// console.log(steven.__proto__); // return calcAge

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1972);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
    2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
    3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/



// class CarCl {
//     constructor(mark,speed) {
//         this.mark = mark;
//         this.speed = speed;
//     }

//     accelerate () {
//         this.speed += 10;
//         console.log(`Speed of ${this.mark} is ${this.speed} km/h`);
//     }

//     brake () {
//         this.speed -= 5;
//         console.log(`Speed of ${this.mark} is ${this.speed} km/h`);
//     }

//     get speedUS() {
//         return this.speed/1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed*1.6;
//     }
// };

// const ford = new CarCl('Ford',120);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 100;
// console.log(ford);

// 218; Inheritance between classes
// Child Class call parent class to inherit properties
// Child proto is created based in the base of Parent proto with Object.create

// const Person = function(firstname, birthYear) {
//     // Instance properties
//     this.firstname= firstname;
//     this.birthYear= birthYear;

// }

// Person.prototype.calcAge = function() {
//     console.log(2022-this.birthYear);
//     this.age=2022-this.birthYear;
// }


// const Student = function(firstname, birthYear, course) {
//     // Instance properties
//     Person.call(this,firstname, birthYear); // Call Parent call
//     this.course= course;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstname} and I study ${this.course}`);
// }

// const mike = new Student('Mike',1998,'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`Accelerate - New speed of ${this.make} is ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`Break - New speed of ${this.make} is ${this.speed} km/h`);
// }


// const EV = function(make, speed, charge) {
//     Car.call(this,make,speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge --;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }


// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercedes',95);

// const tesla = new EV('Tesla',120,23);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// console.log(tesla);


// class declaration
// class PersonCl {
//     constructor(fullname, birthYear) {
//         this.fullName= fullname;
//         this.birthYear=birthYear;
//     }

//     //Method will be added to .prototype property
//     calcAge() {
//         console.log(2022-this.birthYear);
//     }
//     greet () { // equivalent to PersonCl.prototype.greet = function() { outside of class declaration
//         console.log(`Hey ${this.firstname}`);
//     }

//     get age() {
//         return 2022-this.birthYear;
//     }

//     // Set a property that already exists
//     // Setter is useful when a validation is required
//     set fullName(name) {
//         // console.log(name);
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a fullname`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // static method are applied only to class and not inherited
//     static hey() {
//         console.log('Hey there 😀🔥');
//     }
// }

// PersonCl.hey = function () {
//     console.log('Hey there 😀🔥');
// }

// class StudentCl extends PersonCl{
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear); //constructor function of the parent class PersonCl
//         this.course = course;
//     }
//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(`I'm a student of ${2022-this.birthYear} years old`);
//     }
// }

// const martha = new StudentCl('Martha Jones', 1978, 'Sport');
// martha.introduce();
// martha.calcAge();

// class Account {
//     // Public Fields (instances) - present on all the instances of the class created
//     locale = navigator.language;

//     // Private fields (instances) - only callable from the class
//     #movements = [];
//     #pin;

//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this.locale = navigator.language;
//         // this._movements = [];
//         console.log(`Thanks for opening an account ${this.owner}.`);
//     }

//     // Public Method
//     getMovements() {
//         return this.#movements;
//         return this; // Returning this makes the methods chainable
//     }

//     deposit(val) {
//         this.#movements.push(val);
//         return this;
//     }

//     withdraw(val) {
//         this.deposit(val*-1);
//         return this;
//     }


//     requestLoan(val) {
//         if(this.#approveLoan(val)){
//             this.deposit(val);
//             console.log('Loan approved');
//         }
//         return this;
//     }

//     // Available only on the class, not from the instances
//     static helper() { 
//         console.log('Helper')
//     }

//     //Private methods
//     #approveLoan(val){
//         return true;
//     }
// }

// const acc1 = new Account('Romain', 'EUR', 1234);
// acc1.deposit(100);
// acc1.withdraw(30);
// acc1.requestLoan(145);
// console.log(acc1);

// // Chaning
// acc1.deposit(300).deposit(500).withdraw(100).requestLoan(200).withdraw(200);
// console.log(acc1);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
    Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
    Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(mark,speed) {
        this.mark = mark;
        this.speed = speed;
    }

    accelerate () {
        this.speed += 10;
        console.log(`Speed of ${this.mark} is ${this.speed} km/h`);
        return this;
    }

    brake () {
        this.speed -= 5;
        console.log(`Speed of ${this.mark} is ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed/1.6;
    }

    set speedUS(speed) {
        this.speed = speed*1.6;
    }
};

class EVCl extends CarCl {
    #charge;
    constructor(mark,speed,charge) {
        super(mark,speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Speed of ${this.mark} is ${this.speed} km/h and charge is ${this.#charge}%`);
        return this;
    }

    accelerate () {
        this.speed += 20;
        this.#charge --;
        console.log(`Speed of ${this.mark} is ${this.speed} km/h and charge is ${this.#charge}%`);
        return this;
    }

}

const ford = new CarCl('Ford',120);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford);
const  rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(90).brake().brake().brake().accelerate();
console.log(rivian);
console.log(rivian.speedUS);