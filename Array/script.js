"use strict";

/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
// console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join("-"));
*/
/////////////////////////////////////////////

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// geeting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("jonas".at(0));
console.log("jonas".at(-1));
*/
//////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
//for(const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(` Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-----------forEach-------------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(` Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
  }
});
*/
////////////////////////////////////////////
/*
// MAP
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
});
*/
///////////////////////////////////////////////

// Map method
/*
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// arro function
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return ` Movement ${i + 1}:You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}:You withdrew ${Math.abs(mov)}`;
//   }
// });
// console.log(movementsDescriptions);

// ternary operator

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}:You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

*/

//////////////////////////////////////////////////////
// Filter Method
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
*/
///////////////////////////////////////////////////

// Reduce Method
/*
console.log(movements);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balance1 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance1);

// same thing for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// chaining methods
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/
/////////////////////////////////////////////

//  Find Method
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// The New findLast and findLastIndex Methods
// console.log(movements);
// const lastWithdrawal = movements.findLast((mov) => mov < 0);
// console.log(lastWithdrawal);

// 'Your latest large movement was X movements ago'

/*
const latestLargeMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 2000
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
*/

////////////////////////////////////////////////////

//  Some and Every Method
/*
console.log(movements);
// Equality
console.log(movements.includes(-130));

// Some : Condition

console.log(movements.some((mov) => mov === -130));
const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);

// Every
console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/
/////////////////////////////////////////
// Flat and FlatMap
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr);
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

*/

/////////////////////////////////////////////////////

/*
//  Sorting Arrays
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); // nt work

// return < 0, A, B
//return > 0, B, A
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// or
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// or
movements.sort((a, b) => b - a);
console.log(movements);
*/
///////////////////////////////////////////
// Array Grouping
console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposits" : "withdrawals"
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return "very active";
  if (movementCount >= 4) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});

console.log(groupedByActivity);
