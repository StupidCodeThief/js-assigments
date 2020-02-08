// Task 1

// let str = "Hi";
// str.test = 5; // no,
// console.log(str.test); // undefined

// Task 2

// const getSum = () => {
//   const sum = parseInt(prompt("Enter number 1")) + parseInt(prompt("Enter number 2"));
//   alert(` Your sum is ${sum}`);
// };

// getSum();

// Task 3

// console.log((6.35).toFixed(1)); // loss of precision
// console.log((6.35 * 10).toFixed(1) / 10);

// Task 4

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// } // infinite loop due to loss of precision: i == 9.999999999999996 next i == 10.199999999999996.

// Task 5

// const getRandom = (min, max) => {
//     return min + Math.random() * (max - min);
// }

// console.log(getRandom(1, 5))

// Task 6

// const getRandomInteger = (min, max) => {
//     return Math.round(min + Math.random() * (max - min));
//     // return Math.floor(Math.random() * (max - min + 1)) + min; // found in learnjs
// }

// console.log(getRandomInteger(1, 5))

// Task 7

// const ucFirst = str => (str ? str[0].toUpperCase() + str.slice(1) : str);

// console.log(ucFirst("kek"));
// console.log(ucFirst("55"));
// console.log(ucFirst(""));

// Task 8

// const sheckSpam = str => {
//   if (!str) {
//     return str;
//   } else {
//     const result = str.toLowerCase()
//     return result.includes("viagra") || result.includes("xxx");
//   }
// };

// console.log(sheckSpam("viagra"));
// console.log(sheckSpam('buy ViAgRA now'));
// console.log(sheckSpam('free xxxxx'));
// console.log(sheckSpam("hi"));

// Task 9

// const truncate = (str, maxlength) => {
//   if (str.length > maxlength) {
//     let result;
//     return (result = str.slice(0, maxlength - 1) + "...");
//   } else {
//     return str;
//   }

//   // return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
// };

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// Task 10

// const extractCurrencyValue = str => {
//   return parseFloat(str.slice(1));
// };

// console.log(extractCurrencyValue("$500"));

// Task 11

// const fruits = ["Яблоки", "Груша", "Апельсин"];

// const shoppingCart = fruits; // array is not copied, arrays copyes by link similar as objecks
// shoppingCart.push("Банан");

// console.log(fruits.length); // 4

// Task 12

// const styles = ["Jazz", "Bluse"];
// console.log(styles);
// styles.push("Rock");
// console.log(styles);
// styles[Math.floor(styles.length / 2)] = "Classic";
// // styles[Math.floor((styles.length - 1) / 2)] = "Classic";
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Rap", "Reggi")
// console.log(styles);

// Task 13

// const arr = ["a", "b"];

// arr.push(function() {
//   console.log(this);
// });

// arr[2](); // this == arr => [ 'a', 'b', [Function] ]

// Task 14

// const sumInput = () => {
//   const arr = [];
//   while (true) {
//     let userInput  = prompt("Enter number or press cancel to sum");
//     if (userInput  === "" || userInput  === null || !isFinite(userInput)) break;
//     arr.push(parseInt(userInput));
//   }
//   alert(
//     arr.reduce((prev, cur) => {
//       return prev + cur;
//     })
//   );
// };
// sumInput();
