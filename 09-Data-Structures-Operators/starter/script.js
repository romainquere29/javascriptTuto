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

};

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

const newRestaurant = {...restaurant};
newRestaurant.name = 'Classica San Sebastian';
console.log(restaurant);
console.log(newRestaurant);