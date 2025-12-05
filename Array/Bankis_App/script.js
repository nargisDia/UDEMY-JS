"use strict";

// exercise 1
/* 
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // or dogsJulia.slice(1,3);
  // console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // "Dog number 1 is an adult, and is 5 years old"
  // "Dog number 2 is still a puppy 🐶"
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
/////////////////////////////////////////////////////////////////

// exercise 2
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAges);

  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

////////////////////////////////////////////////////

// exercise 3
/*
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAges);

  const adults = humanAges.filter((age) => age >= 18);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
///////////////////////////////////////////////////////

// exercise 4
/*
const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },

  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },

  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },

  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },

  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },

  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },

  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// 1.
const huskyWeight = breeds.find(
  (breed) => breed.breed === "Husky"
).averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(
  (breed) =>
    breed.activities.includes("fetch") && breed.activities.includes("running")
).breed;
console.log(dogBothActivities);

// 3.
// const allActivities = breeds.map((breed) => breed.activities).flat();

const allActivities = breeds.flatMap((breed) => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((breed) => breed.activities.includes("swimming"))
      .flatMap((breed) => breed.activities)
      .filter((activity) => activity !== "swimming")
  ),
];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every((breed) => breed.averageWeight > 10));

// 7.
console.log(breeds.some((breed) => breed.activities.length >= 3));

// Bonous
const fetchWeights = breeds
  .filter((breed) => breed.activities.includes("fetch"))
  .map((breed) => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBreed);

*/
////////////////////////////////////////////////////

// exercise 5

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3.
const ownersTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

const ownersTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersTooMuch);
console.log(ownersTooLittle);

// 4.
console.log(`${ownersTooMuch.join(" and ")}'s dogs are eating to much`);
console.log(`${ownersTooLittle.join(" and ")}'s dogs are eating to little`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = (dog) =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

console.log(dogs.every(checkEatingOkay));

// 7.
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

// 8.
const dogsGroupedByPortion = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > dog.recFood) {
    return "too-much";
  } else if (dog.curFood < dog.recFood) {
    return "too-little";
  } else {
    return "exact";
  }
});
console.log(dogsGroupedByPortion);

// 9.
const dogsGroupedByOwners = Object.groupBy(
  dogs,
  (dog) => `${dog.owners.length}--owners`
);
console.log(dogsGroupedByOwners);

// 10.
const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
// data

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, // %
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

// elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");

const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  // .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// add full balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);
  // console.log("LOGIN");
};

// Event handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // prevent form submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAccount);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    //indexof(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//////////////////////////////////////////////////////////
// lecture
// Empty arrays + fill method
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const movementsUI = Array.from(document.querySelectorAll(".movements__value"));

// console.log(movementsUI);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );

  console.log(movementsUI);
});
*/
//////////////////////////////////////////////////
// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

// toSorted (sort), toSpliced (splice)
// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);
*/

// Array Methods Practice

// 1.
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;
// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this tis a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);
  const expections = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (expections.includes(word) ? word : capitzalize(word)))
    .join(" ");
  return capitzalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/
