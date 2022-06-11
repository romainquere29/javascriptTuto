'use strict';

// const bookings = [];

// const createBooking = function(flightNum,numPassagers=1,price=199*numPassagers) {
//     // numPassagers = numPassagers || 1 ;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassagers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123',2);
// createBooking('LH123',2,800);
// createBooking('LH123', undefined, 800);

// const flight = 'AF123';
// const romain = {
//     name: 'Romain QUERE',
//     passport: 1712398
// }


// // let flightNum = flight;
// // flightNum = 'CA333';
// // const passenger = romain;
// // passenger.name = 'toto';
// // console.log(flight,romain);

// const checkIn = function(flightNum,passenger) {
//     flightNum = 'AF999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 1712398) {
//         alert('Check in');
//     } else {
//         alert('Wrong Passport');
//     }
// }

// // checkIn(flight,romain);
// // console.log(flight,romain);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// }

// newPassport(romain);
// checkIn(flight,romain);
// console.log(flight,romain);

// const oneWord = function(str) {
//     return str.replace(/ /g,'').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // console.log(oneWord('Blab la blabla'));
// // console.log(upperFirstWord('This is very strange'));

// const transformer = function(str, fn) {
//     // console.log(`${fn(str)}`);
//     console.log(`Original string : ${str} \ntransformed by function ${fn.name}`)
//     return fn(str);
// }

// console.log(transformer('Blab la blabla',oneWord));
// console.log(transformer('This is very strange',upperFirstWord));

// const high5 = function () {
//     console.log('✋');
// }

// document.body.addEventListener('click', high5);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Romain');
// greeterHey('Toto');

// greet('Hello')('Romain Q.')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book = function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight : this.iataCode+flightNum, name});
    }
}

lufthansa.book(239, 'Romain QUERE');
lufthansa.book(589, 'Toto');
// console.log(lufthansa.bookings);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    //book = function() {}
}

const book = lufthansa.book;

// book(239, 'Romain QUERE'); Does NOT work
book.call(eurowings, 240, 'Romain QUERE'); // this() points to eurowings
book.call(lufthansa, 241, 'Sandrine QUERE'); // this() points to lufthansa



const airfrance = {
    airline: 'Air France',
    iataCode: 'AF',
    bookings: [],
    //book = function() {}
}

book.call(airfrance, 943, 'Romain QUERE'); 
book.apply(airfrance, [944, 'Romain QUERE']); //apply requires the arguments in an array


console.log(lufthansa,eurowings,airfrance);

