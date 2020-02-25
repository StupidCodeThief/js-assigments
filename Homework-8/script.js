// Task 1

// const makeCounter = () => {
//   let count = 0;

//   return () => {
//     return count++;
//   };
// };

// // independent counters

// const counter = makeCounter();
// const counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // 0
// console.log(counter2()); // 1

// Task 2

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// const counter = new Counter();

// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1

// Task 3

// const phrase = "Hello";

// if (true) {
//   const user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi(); // Hello, John

// Task 4

// const sum = num1 => {
//   return (num2) => {
//       return num1 + num2;
//   }
// };

// console.log(sum(2)(2));
// console.log(sum(-5)(20));

// Task 5

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const inBetween = (from, to) => {
//   return function() {
//     if (arguments[0] >= from && arguments[0] <= to) {
//       console.log(arguments[0]);
//       return true;
//     }
//     return false;
//   };
// };

// const inArray = arr => {
//   return function() {
//     return arr.includes(arguments[0]);
//   };
// };

// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 2, 10])));

// Task 6

// const users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// const byField = param => {
//   return (a, b) => {
//     return a[param] > b[param] ? 1 : -1;
//   };
// };

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));
// console.log(users.sort(byField("surname")));

// Task 7

// function makeArmy() {
//   const shooters = [];

//   for (let i = 0; i < 10; i++) {
//     let shooter = () => {
//       console.log(i);
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// const army = makeArmy();

// army[0]();
// army[5]();

// task 8

// const makeCounter = () => {
//   let count = 0;

//   return () => {
//     counter.set = num => {
//       count = num;
//       return count;
//     };
//     counter.decrease = () => {
//       return count--;
//     };
//     return count++;
//   };
// };

// const counter = makeCounter();

// console.log(counter());
// console.log(counter.set(54));
// console.log(counter.decrease());

// Task 9

// const sum = num1 => {
//   let result = num1;
//   const getSum = num2 => {
//     result += num2;
//     getSum.toString = () => {
//       return result;
//     };
//     return getSum;
//   };
//   return getSum;
// };

// console.log(sum(1)(2) == 3);
// console.log(sum(1)(2)(3) == 6);
// console.log(sum(5)(-1)(2) == 6);
// console.log(sum(6)(-1)(-2)(-3) == 0);
// console.log(sum(0)(1)(2)(3)(4)(5) == 15);
// console.log(sum(0)(1)(2)(3)(4)(5) == 15);

// Task 10

// const printNumbers = (from, to) => {
//   const delay = setInterval(
//     () => {
//       if (from >= to) {
//         clearInterval(delay);
//       }
//       console.log(from++);
//     },
//     1000,
//     from,
//     to
//   );
// };

// const printNumbers = (from, to) => {
//   setTimeout(
//     (tick = () => {
//       console.log(from++);
//       if (from <= to) setTimeout(tick, 1000);
//     }),
//     1000,
//     from,
//     to
//   );
// };

// printNumbers(0, 5);

// Task 11

// let i = 0;

// setTimeout(() => console.log(i), 100); // after cycle, i == 100000000, asynchronous code is executed after the synchronous

// for (let j = 0; j < 100000000; j++) {
//   i++;
// }


