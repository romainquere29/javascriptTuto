'use strict';

// 208. Constructor functions

const Person = function(firstname, birthYear) {
    // Instance properties
    this.firstname= firstname;
    this.birthYear= birthYear;

    // // Instance method - Never do this : Never declare method in constructor function => Use prototype
    // this.calcAge = function() {
    //     return 2022-birthYear;
    // }
    // this.age=this.calcAge();
}

const romain = new Person('Romain',1986);

const matilda = new Person('Matilda',2017);
const jack = new Person('Jack',1975);

// console.log(romain,matilda,jack);
// console.log(romain instanceof Person);

// 209. Prototypes
// All the objects build from the constructor will inherit method+properties from the prototype of this constructor

// console.log(romain.__proto__);

Person.prototype.calcAge = function() {
    console.log(2022-this.birthYear);
    this.age=2022-this.birthYear;
}

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

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`Accelerate - New speed of ${this.make} is ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`Break - New speed of ${this.make} is ${this.speed} km/h`);
}

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95);

bmw.brake();
bmw.accelerate();
bmw.accelerate();
mercedes.accelerate();
mercedes.brake();
bmw.brake();
console.log(bmw,mercedes);