'use strict';

// let hasDriversLicense= false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :-)');

// function myName () {
//     console.log('I\'m Romain QUERE')
// }

// myName();
// myName();
// myName();

// function fruitProcess (nbApples, nbOranges) {
//     console.log(nbApples,nbOranges);
//     const Juice = `Juice with ${nbApples} apples and ${nbOranges} oranges`;
//     return Juice
// }

// const juice1 = fruitProcess(3,8);
// console.log(juice1);

// const juice2 = fruitProcess(4,4);
// console.log(juice2);


// function calcAge1(birthdate) {
//     return (2022-birthdate);
// }

// const calcAge2 = function (birthdate) {
//     return (2022-birthdate);
// }

// console.log(calcAge1(1986));
// console.log(calcAge2(1986));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// // DATA1
// let Dolphins_score1=44
// let Dolphins_score2=23
// let Dolphins_score3=71
// let Koalas_score1=65
// let Koalas_score2=54
// let Koalas_score3=49


// const calcAverage = (val1,val2,val3) => (val1+val2+val3)/3;

// function checkWinner(avgDolhins,avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins! With a score of ${avgDolhins} for Dolphins and ${avgKoalas} for Koalas`)
//     }
//     else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas wins! With a score of ${avgDolhins} for Dolphins and ${avgKoalas} for Koalas`)
//     }
//     else {
//         console.log(`Draw with a score of ${avgDolhins} for Dolphins and ${avgKoalas} for Koalas`)
//     }
// }

// let averageDolphins = calcAverage(Dolphins_score1,Dolphins_score2,Dolphins_score3);
// let averageKoalas = calcAverage(Koalas_score1,Koalas_score2,Koalas_score3);
// // console.log(averageDolphins,averageKoalas);
// checkWinner(averageDolphins,averageKoalas);

// Dolphins_score1=85
// Dolphins_score2=54
// Dolphins_score3=41
// Koalas_score1=23
// Koalas_score2=23
// Koalas_score3=27

// averageDolphins = calcAverage(Dolphins_score1,Dolphins_score2,Dolphins_score3);
// averageKoalas = calcAverage(Koalas_score1,Koalas_score2,Koalas_score3);
// checkWinner(averageDolphins,averageKoalas);

// checkWinner(511,206);

// let friends = ['Toto','Tata','Titi',3];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[3]);
// friends[3] = 'Jose'
// console.log(friends[3]);
// console.log(friends.length);


// let friends2 = ['Toto','Tata','Titi',friends];
// console.log(friends2);

// const calcAge2 = function (birthdate) {
//     return (2022-birthdate);
// }
// const years = [1986, 1972, 2000];

// const age = [calcAge2(years[0]),calcAge2(years[1]),calcAge2(years[2])];
// console.log(age);


// const friends = ['Toto','Tata','Titi',3];
// // Push add element at the end of array
// let newlength  = friends.push('Jay')

// console.log(friends);
// console.log(newlength);

// // Push add element at the start of array
// newlength  = friends.unshift('AAAA')

// console.log(friends);
// console.log(newlength);

// // Remove last element and return removed element
// const poped_element = friends.pop();
// console.log(poped_element);
// console.log(friends);

// // Remove 1st element and return removed element
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // Return position -1 if not exists
// console.log(friends.indexOf('Titi'))
// console.log(friends.indexOf('Bob'))

// // Return boolean if exists
// console.log(friends.includes('Toto'))
// console.log(friends.includes('Bob'))

// function TipsCalculator(bill) {
//     let tips;
//     if (bill >= 50 && bill <= 300) {
//         tips = bill*0.15;
//     }
//     else {
//         tips = bill*0.2;
//     }
//     return tips
// }


// // console.log(TipsCalculator(49));
// // console.log(TipsCalculator(50));

// // console.log(TipsCalculator(300));
// // console.log(TipsCalculator(301));

// const bill_list = [125,555,44];
// const tips = [TipsCalculator(bill_list[0]),TipsCalculator(bill_list[1]),TipsCalculator(bill_list[2])];
// console.log(tips);
// const total = [bill_list[0]+tips[0],bill_list[1]+tips[1],bill_list[2]+tips[2]]
// console.log(total);
// console.log(125*1.15);
// console.log(555*1.2);
// console.log(44*1.2);
// const friends = ['Toto','Tata','Titi',3];
// const romain = {
//     firstName : 'Romain',
//     lastName : 'Quéré',
//     age : 2022-1986,
//     job : 'DevOPS',
//     friends: friends
// };
// console.log(romain);
// console.log(romain.lastName);
// console.log(romain['lastName']);

// const interestedIn = prompt('What do you want to know abour Romain ? firstName, age, job');

// if (romain[interestedIn]) {
//     console.log(romain[interestedIn]);
// }
// else {
    //     console.log('Wrong request !')
    // }
    
// romain.location = 'Plozévet';
// romain['github'] = 'rquere29';
// console.log(romain);

// const friendSentence = `${romain.firstName} ${romain.lastName} has ${romain.friends.length} friends and his best friend is ${romain.friends[0]}`;
// console.log(friendSentence);

// const friends = ['Toto','Tata','Titi',3];
// const romain = {
//     firstName : 'Romain',
//     lastName : 'Quéré',
//     birthYear : 1986,
//     job : 'DevOPS',
//     friends: friends,
//     driverLicense: false,

//     // calcAge: function(toto) {
//     //     return 2022 - toto;
//     // }

//     // calcAge: function() {
//     //     return 2022 - this.birthYear;
//     // }
//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     endSentence : function() {
//         if (this.driverLicense){
//             return "and he has a driver's licence";
//         }
//         else {
//             return "and he has no driver's licence";
//         }
//     },

//     endSentence2 : function() {
//         return this.driverLicense ? "and he has a driver's licence" : "and he has no driver's licence";
//     },
    
//     GetSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} ${this.endSentence2()}`;
//     }
// };

// console.log(romain.calcAge(1986));
// console.log(romain['calcAge'](1986));

// console.log(romain.calcAge(romain.birthYear));
// console.log(romain['calcAge'](romain.birthYear));
// console.log(romain.age); // undefined if called before romain.calcAge()
// console.log(romain.calcAge());
// console.log(romain.age);
// // console.log(romain['calcAge']());
// console.log(romain.GetSummary());

// Coding Challenge #3
// const mark = {
//     fullname : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
//     calcBMI : function() {
//         this.bmi = this.mass / (this.height*this.height);
//         return this.bmi;
//     }
// }

// const john = {
//     fullname : 'John Smith',
//     mass : 92,
//     height : 1.95,
//     calcBMI : function() {
//         this.bmi = this.mass / (this.height*this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// console.log(mark);
// john.calcBMI();
// console.log(john);

// console.log(mark.bmi);
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullname}'s bmi : ${mark.bmi} is higher than ${john.fullname}'s bmi :  ${john.bmi}`);
// }
// else {
//     console.log(`${mark.fullname}'s bmi : ${mark.bmi} is lower than ${john.fullname}'s bmi :  ${john.bmi}`);
// }

// for (let rep=1; rep <= 10;rep+=1) {
//     console.log(`Lifting weights repetition ${rep} 💪`);
// }



const john = [
    'John Smith',
    'male',
    92,
    1.95,
    'Plozévet',
    ['toto','Titi',"Tata",5]
]

// for (let i = 0; i < john.length; i++)
// {
//     // Continue ignores the curent occurence of the loop
//     // if (typeof(john[i]) !== 'string') continue;
//     // Break end the loops
//     if (typeof(john[i]) === 'number') break;
//     console.log(john[i]);
// }

// for (let i = john.length - 1; i >= 0; i--)
// {
//     // Continue ignores the curent occurence of the loop
//     // if (typeof(john[i]) !== 'string') continue;
//     // Break end the loops
//     console.log(john[i]);
//     if (typeof(john[i]) === 'object') {
//         console.log('This is an arrray')
//         for (let o = 0; o < john[i].length; o++) {
//             console.log(john[i][o]);
//         }
//     }
// }

// for (let rep = 1; rep <= 10 ; rep++) {
//     console.log(`Loop - Repitition number : ${rep}`);
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`While - Repitition number : ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

while (dice !== 6){
    console.log(dice)
    dice = Math.trunc(Math.random() * 6) + 1;
}