// Task 1

// const user = {
//   name: "John",
//   years: 30
// };

// const { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// Task 2

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// const topSalary = obj => {
//   const salary = Object.entries(obj);
//   if (Array.isArray(salary) && salary.length) {
//     return salary.reduce((prev, cur) => {
//       return prev[1] >= cur[1] ? prev : cur;
//     })[0];
//   }
//   return null;
// }; // <= in my opinion better option

// const topSalary = obj => {
//   let maxSalary = 0;
//   let maxName = null;
//   for (const [name, salary] of Object.entries(obj)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// };

// console.log(topSalary(salaries));

// Task 3

// const date = new Date(2012, 1, 20, 3, 12);

// console.log(date);

// Task 4

// const date = new Date();
// const getWeekDay = date => {
//   const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
//   return days[date.getDay()];
// };
// console.log(getWeekDay(date));

// Task 5

// const date = new Date();
// const getWeekDay = date => {
//   // const days = [7, 1, 2, 3, 4, 5, 6];
//   // return days[date.getDay()];

//   return date.getDay() === 0 ? 7 : date.getDay();
// };
// console.log(getWeekDay(date));

// Task 6

// const date = new Date(2015, 0, 2);

// const getDateAgo = (date, daysAgo) => {
//   // return new Date(date.getTime() - daysAgo * 24 * 60 * 60 * 1000).getDate();

//   const secondsPerDay = 86400000;
//   return new Date(date.getTime() - daysAgo * secondsPerDay).getDate();
// };

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

// Task 7

// const getLastDayOfMonth = (year, month) => {
// //   const date = new Date(
// //     new Date(year, month + 1).setDate(new Date(year, month + 1).getDate() - 1)
// //   );
// //   return date.getDate();
//
//   return new Date(year, month + 1, 0).getDate(); // lol, it works
// };

// console.log(getLastDayOfMonth(2012, 1));

// Task 8

// const getSecondsToday = () => {
//   return Math.round(
//     (new Date().getTime() - new Date(new Date().setHours(0, 0, 0)).getTime()) /
//       1000
//   );
// };

// console.log(getSecondsToday());

// Task 9

// const getSecondsToTomorrow = () => {
//   return Math.round(
//     (new Date(new Date().setHours(24, 0, 0)).getTime() -
//       new Date().getTime()) /
//       1000
//   );
// };

// console.log(getSecondsToTomorrow());

// Task 10

// const formatDate = date => {
//   let past = new Date() - new Date(date);

//   const options = {
//     year: "2-digit",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "numeric",
//     minute: "numeric"
//   };

//   if (past / 1000 < 1) {
//     return "right now";
//   }

//   past /= 1000;

//   if (past / 60 < 1) {
//     return `${Math.round(past)} seconds ago`;
//   }

//   past /= 60;

//   if (past / 60 < 1) {
//     return `${Math.round(past)} min ago`;
//   }

//   return new Date(date).toLocaleString("ru", options); // alert result looks like "12.02.20, 22:54"
// };

// console.log(formatDate(new Date(new Date() - 1)));
// console.log(formatDate(new Date(new Date() - 32 * 555)));
// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));

// Task 11

// const user = {
//   name: "Василий Иванович",
//   age: 35
// };

// const userJSON = JSON.stringify(user);

// console.log(userJSON);
// console.log(JSON.parse(userJSON));

// Task 12

// const sumTo = num => {
//   if (num <= 1) return num;
//   return num + sumTo(num - 1);
// };

// const sumTo = num => {
//   let sum = 0;
//   for (num; num > 0; num--) {
//     sum += num;
//   }
//   return sum;
// };

// const sumTo = num => {
//   return ((num + 1) / 2) * num;
// }; // the fastest.

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));
// console.log(sumTo(100000)); // using progression => Maximum call stack size exceeded

// Task 13

// const factorial = num => {
//   if (num <= 1) return num;
//   return num * factorial(num - 1);
// };

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// Task 14

// const fib = num => {
//   let x = 1;
//   let y = 0;
//   for (let i = 0; i < num; i++) {
//     x += y;
//     y = x - y;
//   }
//   return y;
// };

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));

// Task 15

// const list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// const printList = list => {
//   console.log(list.value);
//   if (list.next) return printList(list.next);
// };
// printList(list);

// const printList = list => {
//   for (let i = list; i; i = i.next) {
//     console.log(i.value);
//   }
// };
// printList(list);

// Task 16

// const list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// const printReverseList = list => {
// //   const temp = [];
// //   const getValue = list => {
// //     temp.unshift(list.value);
// //     if (list.next) {
// //       return getValue(list.next);
// //     }
// //   };
// //   getValue(list);
// //   temp.forEach(item => {
// //     console.log(item);
// //   }); // I don't know why I`ve done that.

//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value);
// };
// printReverseList(list);

// const printReverseList = list => {
//   const temp = [];
//   for (let i = list; i; i = i.next) {
//     temp.unshift(i.value);
//   }
//   temp.forEach(item => {
//     console.log(item);
//   });
// };

// printReverseList(list);
