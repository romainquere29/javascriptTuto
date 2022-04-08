// let js = 'amazing';

// console.log(40+8+23-19);


// let toto = 12;
// let firstName = "Romain";
// let lastName = "Quéré";
// let isMale = true;
// console.log(firstName+' '+lastName + toto);
// // console.log(typeof toto);
// // console.log(typeof firstName);
// console.log(typeof isMale);

// isMale = 'Yes';
// console.log(typeof isMale);

// let birthYear=1986;
// birthYear=1985;

// // markMass = 78;
// // markHeight = 1.69;
// // johnMass = 92;
// // johnHeight = 1.95;
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 75;
// const johnHeight = 1.80;

// const markBmi= markMass / (markHeight * markHeight)
// const johnBmi = johnMass / (johnHeight * johnHeight)

// console.log('Mark : ' +markBmi);
// console.log('John : ' +johnBmi);

// // if (markBmi > johnBmi) 
// // markHigherBMI = true
// // else
// // markHigherBMI = false
// markHigherBMI = markBmi > johnBmi
// console.log(markHigherBMI);

// const MassRomain = 75;
// const HeightRomain = 1.80;
// console.log(`Ì'm Romain my mass is ${MassRomain}`);

// const inputYear = '1991';
// console.log(Number(inputYear) + 19);
// console.log(inputYear + 19);

// //Falsy values : 0, '', undefined, null, Nan
// console.log(Boolean(0)); // False
// console.log(Boolean(1893)); // True
// console.log(Boolean('')); // False
// console.log(Boolean('toto')); // True
// let tata;
// console.log(tata);
// console.log(Boolean(tata)); // False
// console.log(Boolean({})); // True
// console.log(Boolean(Number('Romain'))); // False

// if (0) {
//     console.log("Condition executed");
// } else {
//     console.log("Condition NOT executed");
// }

// if (1986) {
//     console.log("Condition executed");
// } else {
//     console.log("Condition NOT executed");
// }

// const age = '18';
// if (age === 18) console.log('=== You just became an adult')
// if (age == 18) console.log('== You just became an adult')

// const favourite = Number(prompt("What's your favourite nuumber"));
// console.log(favourite);
// // if (favourite == 83) console.log('good choice')
// if (favourite === 83) {
//     console.log('very good choice')
// }
// else if (favourite === 7) {
//     console.log('also a good choice')
// }
// else {
//     console.log('bad choice')
// }

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// const DolphinsScore1 = 96;
// const DolphinsScore2 = 108;
// const DolphinsScore3 = 89;

// const KoalasScore1 = 88;
// const KoalasScore2 = 91;
// const KoalasScore3 = 110;

// const DolphinsScoreAvg =  (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3
// const KoalasScoreAvg = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3
// if (DolphinsScoreAvg === KoalasScoreAvg) {
//     console.log('Draw')
// } else if (DolphinsScoreAvg > KoalasScoreAvg) {
//     console.log('Dolphins won')
// } else {
//     console.log('Koalas won')
// }

// const age=35;
// age >= 33 ? console.log('You lived older than Jesus') : 
// console.log('Will you live older than Jesus?')
// const olderJesus = age >= 33 ? true : false
// console.log(olderJesus)

const bill = 299;
const tip = ( bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2
console.log(tip);
