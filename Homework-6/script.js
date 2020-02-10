// Task 1

// const camelize = str => {
//   let arr = str.split("-");
//   arr = arr.map(item => {
//     return item.charAt(0).toUpperCase() + item.slice(1);
//   });
//   return console.log(arr.join(""));
// };
// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// Task 2

// const arr = [5, 3, 8, 1];

// const filterRange = (arr, min, max) => {
//   return arr.filter(item => item >= min && item <= max);
// };

// const filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);

// Task 3

// const arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, min, max) => {
//   arr.forEach(item => {
//     if (item < min || item > max) {
//       arr.splice(arr.indexOf(item), 1);
//     }
//   });
// };

// filterRangeInPlace(arr, 1, 4);

// console.log(arr);

// Task 4

// const arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => {
//   return b - a;
// });

// console.log(arr);

// Task 5

// const arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = arr => {
//   const result = arr.slice();
//   return result.sort((a, b) => {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   });
// };

// const sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

// Task 6

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };

// const users = [vasya, petya, masha];

// const names = users.map(item => {
//   return item["name"];
// });

// console.log(names);

// Task 7

// const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// const petya = { name: "Петя", surname: "Иванов", id: 2 };
// const masha = { name: "Маша", surname: "Петрова", id: 3 };

// const users = [vasya, petya, masha];

// const usersMapped = users.map(item => {
//   return {
//       fullName: `${item["name"]} ${item["surname"]}`,
//       id: item["id"],
//     };
// });

// console.log(usersMapped);
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// Task 8

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };

// const arr = [ vasya, petya, masha ];

// const sortByAge = (arr) => {
//     arr.sort((a, b) => {
//         return a["age"] - b["age"];
//     })
// };

// sortByAge(arr);

// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// Task 9

// const arr = [1, 2, 3];

// const shuffle = arr => {
//   arr.sort(() => Math.random() - 0.5);
//   console.log(arr);
// };

// shuffle(arr);
// shuffle(arr);
// shuffle(arr);

// Task 10

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 29 };

// const arr = [vasya, petya, masha];

// const getAverageAge = arr => {
//   const averageAge = arr.reduce((prev, cur) => {
//     return prev + cur.age;
//   }, 0);
//   return averageAge / arr.length;
// };

// console.log(getAverageAge(arr));

// Task 11 && 12

// const unique = arr => {
//   const result = [];
//   arr.reduce((prev, cur) => {
//     if (prev !== cur) {
//       if (!result.includes(cur)) result.push(cur);
//     }
//     return cur;
//   }, 0);
//   return result;
//     // // another solution
//     // return Array.from(new Set(arr));
// };

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O"
// ];
// console.log(unique(strings));

// Task 13

// const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// const aclean = arr => {
//   const result = new Map();
//   arr.forEach(item => {
//     const key = item
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     result.set(key, item);
//   });
//   return Array.from(result.values());
// };

// console.log(aclean(arr));

// Task 14

// const map = new Map();

// map.set("name", "John");

// const keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys);

// Task 15

// const messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];

// const readMessages = new WeakSet();
// messages.forEach(item => {
//   readMessages.add(item)
// })
// console.log(readMessages.has(messages[2])); // messages[2] exist in readMessages(weekSet) because messages[2] is contained in in messages
// messages.pop(); // messages[2] removed
// console.log(readMessages.has(messages[2])); // messages[2] do not exist in readMessages(weekSet)

// Task 16

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// const sumSalaries = obj => {
//   // return Object.values(obj).reduce((prev, cur) => {
//   //   return prev + cur;
//   // }, 0);

//   let result = 0;
//   for (let item of Object.values(obj)) {
//     result += item;
//   }
//   return result;
// };

// console.log(sumSalaries(salaries));

// Task 17

// const user = {
//   name: "John",
//   age: 30
// };

// const count = obj => {
//   return Object.keys(obj).length;
// };

// console.log(count(user));
