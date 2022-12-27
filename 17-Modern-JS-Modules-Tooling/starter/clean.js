'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits
  = Object.freeze({
    jonas: 1500,
    matilda: 100,
  });
// spendingLimits.jay = 200;
// console.log(spendingLimits);

const addExpense = function (state, limits, value, description, user = 'Jonas') {
  const cleanUser = user.toLowerCase();
  const bigLimit = limits[cleanUser] ? limits[cleanUser] : 0;

  return value <= bigLimit ? [...state, { value: -value, description, user: cleanUser }] : state;
  // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (budget, limit) {
  return budget.map(entry => {
    return (entry.value < -limit[entry.user] ? { ...entry, flag: 'limit' } : entry)
  })
};

const newBudget4 = checkExpenses(newBudget3, spendingLimits);
console.log(newBudget4);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.description.slice(-2)).join(' / ');
  // let output = '';
  // for (const el of budget) {
  //   output += el.value <= -bigLimit ? `${el.description.slice(-2)} ' / '` : '';
  //   //   if (el.value <= -bigLimit) {
  //   //     output += `${el.description.slice(-2)} ' / '`; // Emojis are 2 chars
  //   //   }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

};

logBigExpenses(newBudget4, 100);