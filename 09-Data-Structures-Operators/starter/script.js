'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIdex) {
    return [this.starterMenu[starterIndex],this.mainMenu[mainIdex]];
  },

  orderDelivery: function({starterIndex=1, mainIndex=2, time='20:00', address='Bourg'}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} + ${this.mainMenu[mainIndex]} will be delivered for ${time} to ${address}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and  ${ing3} `);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// }

// Will assign 10 if rest1.numGuests is a falthy value (null,undefined,'',0)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Will assign 10 if rest1.numGuests null or undefined
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// rest1.owner = rest1.owner && 'ANONYMOUS' ;
// rest2.owner = rest2.owner && 'ANONYMOUS' ;

// Assign a value if exists
// rest1.owner &&= 'ANONYMOUS' ;
// rest2.owner &&= 'ANONYMOUS' ;
// console.log(rest1,rest2);

// restaurant.orderDelivery( {
//   time: '22:30',
//   address: 'Merros Huella, Plozevet',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery( {
//   address: 'Merros Izella, Plozevet',
//   mainIndex: 0,
// })

// const arr = [0,1,2];
// const [x,y,z] = arr;
// console.log(x,y,z);

// let [main,,secondary] = restaurant.categories;
// console.log(main,secondary);

// [secondary,main]=[main,secondary];
// console.log(main,secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main,secondary);
// const [starter,mainCourse] = restaurant.order(0,2);
// console.log(starter, mainCourse);

// const nested = [2,4,[5,6]];
// const [i, ,[j,k]]=nested;
// console.log(i,j,k);

// // Set default values which are taken into acocunt when arrays is shorter than expected
// const [p=1,q=1,r=1]= [8,9];
// console.log(p,q,r);

// const {name:nameRestaurant,openingHours,categories} = restaurant;
// console.log(nameRestaurant, openingHours,categories);


// const {menu = [], starterMenu:starters= []} = restaurant;
// console.log(menu,starters);

// //Mutating variables
// let a=111;
// let b=999;
// const obj = {a:23 , b:7, c:14};

// ({a,b} = obj);
// console.log(a,b);

// const {openingHours} = restaurant;
// const {fri : {open:o, close:c}} = openingHours;
// console.log(openingHours);
// console.log(o,c);

// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr];
// console.log(newArr);
// console.log(...newArr);


// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// restaurant.mainMenu.push('Gnocci');
// console.log(restaurant.mainMenu)

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu];
// //const menu = restaurant.starterMenu  + restaurant.mainMenu;
// console.log(menu);

// const str = 'Romain';
// const letters = [...str, ' ', 'SSSS'];
// console.log(letters);

// const ingredients = [prompt('Lets make Pasta! Ingredient 1'), prompt('Lets make Pasta! Ingredient 2'), prompt('Lets make Pasta! Ingredient 3')] ;
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);

// const newRestaurant = {...restaurant, founder: 'Romain Q'};
// console.log(newRestaurant);

// const newRestaurant = {...restaurant};
// newRestaurant.name = 'Classica San Sebastian';
// console.log(restaurant);
// console.log(newRestaurant);

// // SPREAD because on RIGHT side of =
// const arr = [1,2,...[3,4,5]];
// console.log(arr);

// // REST because on LEFT side of =
// const [a,b,...others]  = [1,2,3,4,5];
// console.log(a);
// console.log(b);
// console.log(others);

// // Rest element should be the latest element of destructuring
// const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,risotto,otherFood);

// const {sat,...weekdays} = restaurant.openingHours;
// console.log(sat,weekdays);

// const add = function(...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum+=numbers[i];
//   }
//   console.log(sum);
// }

// add(2,3);
// add(5,3,7,2);

// const x = [5,3,7,2];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'tomatoes');
// restaurant.orderPizza('mushrooms');

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(false || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 3;
// const guests2 = restaurant.numGuests||1;
// const guests3 = restaurant.numGuests??1;

// console.log(guests1, guests2, guests3);
// console.log(guests2);

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log(7 && 'Jonas' && null && 23);
// console.log(7 && 'Jonas' && 0 && 23);
// console.log(7 && 'Jonas' && 23);

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// restaurant.orderPizza2 && restaurant.orderPizza2('mushrooms', 'spinach');


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};




///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [players1,players2] = game.players;
// console.log(players1,players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);

// const allPlayers = [...players1,...players2];
// console.log(allPlayers);

// const players1Final = [...players1,'Thiago', 'Coutinho' , 'Perisic'];
// console.log(players1Final);

// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// console.log(game.odds)
// const {team1,x:draw,team2} = game.odds
// // 'team1', 'draw' and 'team2'
// console.log(team1,draw,team2);

// const printGoals = function(...playerName) {
//   // console.log(playerName);
//   console.log(`${playerName.length} goals were scored by :`);
//   for (let i = 0; i < playerName.length; i++) {
//     console.log(playerName[i]);
//   }
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// console.log(team1<team2&&game.team1||team2<team1&&game.team2);


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// for (const [number,scorer] of Object.entries(game.scored)) {
//   console.log(`Goal ${number} : ${scorer}`);
// }

// let sum = 0;
// // console.log(Object.values(game.odds));
// for (const x of Object.values(game.odds)) {
//   sum+=x;
// }
// const avg = sum / Object.values(game.odds).length;
// console.log(avg);

// for (const [key,value] of Object.entries(game.odds)) {
//   // console.log(key, value);
//   const team = key === 'x' ? 'Draw' : `Victory of ${game[key]}`;
//   // console.log(team);
//   console.log(`Odd of ${team} : ${value}`);
// }


// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza', 3, 8, 9, 3]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');

// orderSet.delete(3);

// for (const el of orderSet) {
//   console.log(el);
// }

// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Fireznce, Italy');
// rest.set(2,'Lisbon, Portugal');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11)
// .set('close',23).set(true,'We are open').set(false,'we are close');
// // console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete('categories');
// console.log(rest.has('categories'));
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);


// const question = new Map([
//   ['question', 'What is the best prog lang ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'This is Correct !'],
//   [false, 'Try Again']
// ]);

// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// console.log(question);

// console.log(question.get('question'));
// for (const [key,value] of question) {
//   if (typeof(key) === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// //Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


// console.log(gameEvents.values());
//1.
const eventsTmp = new Set(gameEvents.values());
const events = [...eventsTmp];
console.log(eventsTmp);
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
const avgEvents= time/gameEvents.size;
console.log(`An event happened, on average, every ${avgEvents} minutes`);

for (const [key,value] of gameEvents) {
  const prefixStr = key < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(prefixStr, key,value);
}


