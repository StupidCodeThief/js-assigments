// Task 1

// const user = {
//   name: "John"
// };

// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// Task 2

// let isEmpty = obj => {
//   for (const key in obj) {
//     return true;
//   }
//   return false;
// };

// const user = {};
// console.log(isEmpty(user));
// user["8:30"] = "get up";
// console.log(isEmpty(user));

// Task 3

// we can change obj properties, but can`t change obj

// Task 4

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// const getSum = obj => {
//   let sum = 0;
//   for (let key in obj) {
//     if (Number(obj[key])) {
//       sum += obj[key];
//     }
//   }
//   return sum;
// };

// console.log(getSum(salaries));

// Task 5

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const getMultiply = obj => {
//   //   for (const key in obj) {
//   //     if (Number(obj[key])) {
//   //       obj[key] *= 2;
//   //     }
//   //   }
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// console.log(menu);
// getMultiply(menu);
// console.log(menu);
