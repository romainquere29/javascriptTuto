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

// book.call(airfrance, 943, 'Romain QUERE');
// book.apply(airfrance, [944, 'Romain QUERE']); //apply requires the arguments in an array


// const bookEW = book.bind(eurowings);
// bookEW(222, 'Romain De Quere');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Romain De Quere2');

// const bookEW24 = book.bind(lufthansa,24);
// bookEW24('Romain De Quere2');

// console.log(lufthansa,eurowings,airfrance);

// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate,value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.196);
// console.log(addVAT(200));


// const customAddTax = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     } 
// }

// const addVAT2 = customAddTax(0.196);
// console.log(addVAT2(200));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer : function () {
        let answersStr = this.question + '\n';
        for (const el of this.options) {
            answersStr += el + '\n';
        }
        const UserAnswer=parseInt(prompt(answersStr));
        // console.log(typeof UserAnswer === 'number');
        // console.log(UserAnswer < this.answers.length);
        // console.log(this.answers[UserAnswer]++);
        typeof UserAnswer === 'number' && UserAnswer < this.answers.length && this.answers[UserAnswer]++;
        this.displayResults('string');
    },
    displayResults : function(type='array') {
        if (type === 'array') {
            console.log(this.answers);
        }
        else if (type === 'string') {
            console.log('Poll results are ' + this.answers.join(', '));
        }
    }
};

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers : [5, 2, 3]},'string');
// poll.displayResults.call({answers : [1, 5, 3, 9, 6, 1]},'string');

// const runOnce = function() {
//     console.log('This will never run again');
// };

// // runOnce();

// (function() {
//     console.log('This will never run again 2');
// })();

// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }

// // console.log(isPrivate);
// console.log(notPrivate);

// const secureBooking = function() {
//     let passengerCount = 0;
//     return function() {
//         passengerCount++;
//         console.log(passengerCount);
//     }
// };

// const booker = secureBooking();

// booker();
// A function has access to the var environment of the context on 
// which they were created

// booker();
// booker();

// let f;

// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a*2);
//     }
// }

// const h = function() {
//     const b = 777;
//     f = function() {
//         console.log(b*2);
//     }
// }

// g();
// f();
// console.dir(f);

// //Reassign f()
// h();
// f();

// console.dir(f);

//Example 2
// const boardPassengers = function(n,wait) {
//     const perGroup = n/3;
//     setTimeout(function(){
//         console.log(`We are now baording all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passenger`);
//     }, wait * 1000);
//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 6;
// boardPassengers(180,5);

( function () {
    const header = document.querySelector('h1');
    header.style.color='red';

    document.querySelector('body').addEventListener('click', function() {
            header.style.color='blue';
        });
})();

// console.dir(window);