"use strict";
/*
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const maxicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);
*/
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  // thu: {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  // fri: {
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // sat: {
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // open 24 hours
  //     close: 24,
  //   },
  // },
  // another way to call herer
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/////////////////////////////////////////////////////////////
// string part 3

// split and join
console.log("a + very + nice + string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join("-"));
};
capitalizeName("jessica and smith dabis");
capitalizeName("jonas schmedtmann");

// padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Jonas".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(7643974520));
console.log(maskCreditCard(4276368987462));
console.log(maskCreditCard("86462904763418364095382466214"));

// Repeat
const message2 = "Bad weather .... All Departues Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
/*
// string part 2
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passerngerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passerngerCorrect);

// comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//  replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}
// practice exercise
const checkBaggage = function (items) {
  // const baggage = items.toLowerCase();
  const baggage = items;
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
*/
/////////////////////////////////////////////////////////////
/*
const question = new Map([
  ["question", "what is the best programming language in the world"],
  [1, "C+"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct🎈"],
  [false, "Try again!"],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//  quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
//////////////////////////////////////////////////////////////
/*
// Maps
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open: D")
  .set(false, "we are closed: (");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
//////////////////////////////////////////////
/*
// New operations to Make Sets Useful!

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const maxicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFoods = italianFoods.intersection(maxicanFoods);
console.log("Intersection:", commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(maxicanFoods);
console.log("Union:", italianMexicanFusion);

console.log([...italianFoods, ...maxicanFoods]);
console.log([...new Set([...italianFoods, ...maxicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(maxicanFoods);
console.log("Difference italian", uniqueItalianFoods);

const uniqueMexicanFoods = maxicanFoods.difference(italianFoods);
console.log("Difference maxican:", uniqueMexicanFoods);

const uiqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(maxicanFoods);
console.log(uiqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(maxicanFoods));
*/
///////////////////////////////////////////////////////

/*
////////////////////////////////////////////////
// set
const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);

console.log(orderSet);
console.log(new Set("jonas"));
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("risotto");
console.log(orderSet);

for (const order of orderSet) console.log(orderSet);

// Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);

*/
////////////////////////////////////////////////////////
/*
// property name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr = openStr + `${day} ,`;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/
/////////////////////////////////////////////////////////////
/*
if (resturant.openingHours && resturant.openingHours.mon)
  console.log(resturant.openingHours.mon.open);

// with optional chaining
console.log(resturant.openingHours.mon?.open);
console.log(resturant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = resturant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(resturant.order?.(0, 1) ?? "Method does not exit");
console.log(resturant.orderRisotto?.(0, 1) ?? "Method does not exit");

// Arrays
const users = [{ name: "jonas", email: "hello@jonas.io" }];
// const users = [];
console.log(users[0]?.name ?? "user array empty");
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");


*/
/////////////////////////////////////////////////////
/*
// for of looping
const menu = [...resturant.starterMenu, ...resturant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log(".............................");
//another way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

*/
////////////////////////////////////////////////////////////
/*
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1, rest2);

*/
////////////////////////////////////////////////////
/*
// resturant.numGuests = 0;
const guests = resturant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined
const guestCorrect = resturant.numGuests ?? 10;
console.log(guestCorrect);

*/
//////////////////////////////////////////////////////////
/*
console.log("---- OR ----");
// use any data type, return any data type, short-circuting
console.log(3 || "jons");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

resturant.numGuests = 0;
const guests1 = resturant.numGuests ? resturant.numGuests : 10;
console.log(guests1);

const guests2 = resturant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");

console.log(0 && "jonas");
console.log(7 && "jonas");

console.log("Hello" && 23 && null && "jonas");

// Practial example
if (resturant.orderPizza) {
  resturant.orderPizza("mushrooms", "spinach");
}

resturant.orderPizza && resturant.orderPizza("mushrooms", "spinach");
*/
//////////////////////////////////////////////////////////////
/*
///////////////////////////////////////
// 1.Destructuring
//  SPREAD, beacuse on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//  Rest, beacus on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);

//  2. Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

resturant.orderPizza("mushrooms", "onion", "olives", "spinach");

resturant.orderPizza("mushrooms");
*/
///////////////////////////////////////////////////////////
/*
// spread operator(...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...resturant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...resturant.mainMenu];

// join 2 arrey
const menuu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log(menuu);

// Iterables:arrays, strings, maps, sets, noT objects

const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
resturant.orderPasta(...ingredients);

// objects
const newResturant = { foundedIn: 1998, ...resturant, founder: "Guiseppe" };
console.log(newResturant);

const resturantCoppy = { ...resturant };
resturantCoppy.name = "Ristorante Roma";
console.log(resturantCoppy.name);
console.log(resturant.name);

*/
///////////////////////////////////////////////////
// Destructuring objets
/*
resturant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

// Destructuring objects
const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri } = openingHours;
console.log(fri);
// Destructuring object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/
/////////////////////////////////////////////////
/*
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

let [main, , secondary] = resturant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = resturant.order(2, 0);

console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values

const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
