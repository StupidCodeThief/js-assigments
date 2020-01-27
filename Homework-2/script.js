// task 1

// let name = prompt("What is your name?");
// alert(name);

// task 2

// if ("0") {
//     alert("hi"); // "0" = true
// }

// task 3

// let answer = prompt("What is official name of JavaScript?");
// if (answer === "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("Don't know? ECMAScript!");
// }

// task 4

// let number = Number(prompt("what is your number?"));
// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// task 5

// let result;
// let a = 5;
// let b = 4;
// a + b < 4 ? (result = "Low") : (result = "Much");
// console.log(result);

// task 6

// let login = "Manager";
// let message;

// login === "Manager"
//   ? (message = "Hi")
//   : login === "President"
//   ? (message = "Hello")
//   : login === ""
//   ? (message = "No login")
//   : (message = "");
// console.log(message);

// task 7

// alert(null || 2 || undefined); // 2

// task 8

// alert(alert(1) || 2 || alert(3)); // 1 => 2

// task 9

// alert(1 && null && 2); // null

// task 10

// alert(alert(1) && alert(2)) // 1 => undefined

// task 11

// alert(null || (2 && 3) || 4); // 3

// task 12

// const age = 7;
// if (age >= 14 && age <= 90) {
//   alert("Ok!");
// } else {
//   alert("NO!");
// }

// task 13

// const age = 7;
// if (age <= 14 || age >= 90) {
//   alert("Ok!");
// }

// if (!(age >= 14 && age <= 90)) {
//   alert("Ok!");
// }

// task 14

// if (-1 || 0) alert("first"); // first
// if (-1 && 0) alert("second"); // don`t work
// if (-1 || null || 1) alert("third"); // third

// task 15

// const login = prompt("Enter your login");

// if (login === "admin") {
//   const password = prompt("Enter password");
//   if (password === "OK") {
//     alert("Hello!");
//   } else if (password === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password!!!");
//   }
// } else if (login === null || login === "") {
//   alert("Canceled");
// } else {
//   alert("I don`t know you!");
// }

// task 16

// let i = 3;
// while (i) {
//   alert(i--); // 1 is last, 0 == false
// }

// task 17

// let i = 0;
// while (++i < 5) console.log(i); // 4

// i = 0;
// while (i++ < 5) console.log(i); // 5

// task 18

// 4 is last for both "for"

// task 19

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0 && i != 0) console.log(i);
// }

// task 20

// let i = 0;
// while (i <= 10) {
//   if (i % 2 === 0 && i != 0) console.log(i);
//   i++;
// }

// task 21

// let number = prompt("Enter number more than 100");
// while (number !== null && Number(number) <= 100) {
//     number = prompt("Enter number more than 100");
// }

// task 22

// let browser = "Chrome";
// if (browser === "Edge") {
//     alert("OK");
// } else if (browser === "Chrome" || browser === "Opera" || browser === "Safari" || browser === "Firefox") {
//     alert("Still OK");
// } else {
//     alert("Hope that page looks ok");
// }

// task 23

// const number = Number(prompt("Enter number between 1 and 3"));
// switch (number) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2 or 3, who knows");
//     break;
//   default:
//     alert("Why you`ve done that?");
// }

// task 24

// without else function works normaly

// task 25

// function checkAge(age)  {
//     age > 18 ? true : confirm("Parents know?");
// }
// function checkAge(age)  {
//     age > 18 || confirm("Parents know?");
// }
// checkAge(10)

// task 26

// function min(a, b) {
//     return Math.min(a, b);
// }

// function min(a, b) {
//     let number;
//     a < b ? number = a : number = b;
//     return number;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// task 27

// function pow(x, n) {
//     return Math.pow(x, n);
// }

// function pow(x, n) {
//     let number = x;
//     for (; n > 1; n--) {
//         number *= x;
//     }
//     // return number;
//     alert(number);
// }

// pow(Number(prompt("Enter number")), Number(prompt("Enter the power of the number")));

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

// task 28

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Confirm?",
//   () => {
//     alert("Conrimed");
//   },
//   () => {
//     alert("Canceled");
//   }
// );

