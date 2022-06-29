'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

{/* <div class="movements__row">
  <div class="movements__type movements__type--deposit">2 deposit</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">4 000€</div>
</div> */}

const displayMovements = function(movements) {

  // console.log(containerMovements.innerHTML);
  // console.log('-----------');
  // console.log(containerMovements.textContent);
  containerMovements.innerHTML = '';

  movements.forEach(function(mov,i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div> ` ;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}
displayMovements(account1.movements);

const calcDisplaySummary = function(movements) {
  const incomes = movements.filter(mov => mov > 0).reduce((previous,current)  => previous + current,0);
  labelSumIn.textContent = incomes+'€';
  const outcomes = movements.filter(mov => mov < 0).reduce((previous,current) => previous + current,0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
 const interest =  movements.filter(mov => mov > 0).map(deposit => deposit * 0.012).filter(deposit => deposit >= 1).reduce((previous,current)=> previous + current,0);
  labelSumInterest.textContent = interest+'€';
}
calcDisplaySummary(account1.movements);


// const user = 'Steven Thomas Williams';

// let username = '';
// user.toLowerCase().split(' ').forEach(function(word) {
//   username+=word.slice(0,1);
//   // username+=word[0];
// });

// const username2 = user.toLowerCase().split(' ').map(name => name[0]).join('');


// // const username = user.slice(0,1);
// console.log(username);
// console.log(username2);

const CreateUsernames = function (accts) {
  accts.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}

console.log(CreateUsernames(accounts));
// console.log(accounts);

const calcPrintBalance = function(movements) {
  const balance = movements.reduce((previous,current)=> previous + current, 0);
  labelBalance.textContent = `${balance}€`;
  console.log(labelBalance);
}

calcPrintBalance(account1.movements);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${movement * -1}`);
//   }
// }

// movements.forEach(function(movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} : You withdrew ${movement * -1}`);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// currencies.forEach(function(value,key,map) {
//   console.log(key + ' : ' +value);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'USD']);
// currenciesUnique.forEach(function(value,key,map) {
//   console.log(key + ' : ' +value);
// });

// Demo on bankist.netlify.app

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// let arr = ['a', 'b', 'c', 'd', 'e'];


// console.log(arr.slice(2));
// console.log(arr);
// // const [first,...others]=arr;
// // console.log(first);
// // console.log(others);

// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(-1));
// console.log(arr);
// // splice cut from the initial element not slice


// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j','i','h','g','f'];

// console.log(arr2.reverse());
// console.log(arr2);

// const letter = arr.concat(arr2);
// console.log(letter);

// console.log(letter.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// console.log('Romain'.at(0));
// console.log('Romain'.at(-1));


///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const julia1 = [3, 5, 2, 12, 7];
// const kate1 = [4, 1, 15, 8, 3];

// const checkDogs = function(dogsJulia,dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice(1,-2);
//   // console.log(dogsJulia);
//   // console.log(dogsJuliaCorrected);
//   const dogsMerged = dogsJuliaCorrected.concat(dogsKate);
//   // console.log(dogsMerged);
//   dogsMerged.forEach(function(age,index){
//     const isAdutlt = age >= 3 ? true : false;
//     if (isAdutlt) {
//       console.log(`Dog number ${index + 1 } is an adult, and is ${age} years old `);
//     }
//     else {
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     }
//   })
// };

// checkDogs(julia1,kate1);
// console.log(`-----------------------`);
// checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUsd = movements.map(function(mov) {
//   return mov * eurToUsd;
// })
// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// const movementsUsd2 = [];
// for (const element of movements) {
//   movementsUsd2.push(element * eurToUsd);
// }

// console.log(movementsUsd2);

// movements.forEach(function(movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} : You withdrew ${movement * -1}`);
//   }
// })

// const movementsDescription = movements.map((movement,index) => {
//   if (movement > 0) {
//       return `Movement ${index + 1} : You deposited ${movement}`;
//     } else {
//       return `Movement ${index + 1} : You withdrew ${movement * -1}`;
//     }
//   });

// console.log(movementsDescription);

// const deposit = movements.filter(function(mov) {
//   return mov > 0;
// });
// const withdrawal = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(deposit);
// console.log(withdrawal);

// const deposit2 = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     deposit2.push(mov);
//   }
// }
// console.log(deposit2);

// console.log(movements);

// const balance = movements.reduce(function(acc,cur,index,arr) {
//   console.log(`Iteration ${index} : ${acc}`)
//   return acc+cur;
//   // return acc.toString()+cur.toString();
// }, 0);
// console.log(balance);


// const balance2 = movements.reduce((acc,cur) => acc+cur, 0);
// console.log(balance2);

// const maxValue = movements.reduce((acc,cur) => acc > cur ? acc : cur, 0);
// console.log(`Max Value is ${maxValue}`);

// const age = [5, 2, 4, 1, 15, 8, 3] ;
// const age = [16, 6, 10, 5, 6, 1, 4];
// const HumanAge = age.map( element => element <= 2 ? element * 2 : 16 + element * 4);
// const HumanAgeAdult = HumanAge.filter( element => element >= 18);
// const HumanAgeAdultAvg = HumanAgeAdult.reduce(function(previous,current,index) {
//   return previous + current;
// },0) / HumanAgeAdult.length;
// console.log(age);
// console.log(HumanAge);
// console.log(HumanAgeAdult);
// console.log(HumanAgeAdultAvg);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0)
// .map(mov => mov * eurToUsd)
// .reduce((acc,mov) => acc+mov,0);
// console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// const calcAverageHumanAge = function(dogsAge) {
//   // return dogsAge.map(age => age);
//   return dogsAge.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//   .filter(age => age >= 18)
//   .reduce((previous,current,index,arr) => previous + (current / arr.length) ,0);
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

console.log(movements);
console.log(movements.find(mov => mov < 0));

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);