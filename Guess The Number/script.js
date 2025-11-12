// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} piece of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/* const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(4, 5, 8));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No team winns...`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// Array

/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Nargis", "Bilkis", "shopna", "Mim"];

const newLength = friends.push("Nafi");
console.log(friends);
console.log(newLength);

friends.unshift("Nafi");
console.log(friends);

// Remove

friends.pop();
console.log(friends);
const popper = friends.pop();
console.log(popper);
console.log(friends);

*/

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// const jonas = [
//   "jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // 0, 1, ...., 4
// // 4, 3, ...., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`....... Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 💃`);
//   }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`Loop is ended...`);
//   }
// }

// "use strict";

// const x = "23";
// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

"use strict";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");
  }
  // when player wins
  else if (guess === SecretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > SecretNumber ? "Too High!" : "Too Low!";
      displayMessage(guess > SecretNumber ? "Too High!" : "Too Low!");
      // score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // when guess is to high
  // else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High!";
  //     // score = score - 1;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";

  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// when we click again button
document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
