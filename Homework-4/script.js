// Task 1

// const user = {
//   name: "john",
//   go: function() {
//     alert(this.name);
//   }
// };

// (user.go)(); // => without semicolon alert don`t work, with - alert "John"
// user.go(); // => alert "John"

// Task 2

// let obj, method;
// obj = {
//   go: function() {
//     alert(this);
//   }
// };

// obj.go(); // => [object Object]
// (obj.go)(); // => [object Object]
// (method = obj.go)(); // => [object Window] lost context, method = function() {alert(this);}.
// (obj.go || obj.stop)(); // => [object Window] lost context, (obj.go || obj.stop)() => (function() {alert(this);})().

// Task 3

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// const user = makeUser();

// alert(user.ref.name); // undefined, user.ref.name => user.[object Window].name, name is not propherty of [object Window]

// Task 4

// const calculator = {
//   read: function() {
//     this.firstNumber = parseInt(prompt("Enter first number"));
//     this.secondNumber = parseInt(prompt("Enter second number"));
//   },
//   sum: function() {
//     return this.firstNumber + this.secondNumber;
//   },
//   mul: function() {
//     return this.firstNumber * this.secondNumber;
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Task 5

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// ladder.up().up().down().showStep();

// Task 6

// function A() {
//   this.admin = false;
// }

// function B() {
//   this.admin = false;
// }

// const a = new A();
// const b = new B();

// console.log(a == b); // always false
// const c = a;
// console.log(a == c); // true, objects have a link to one memory area

// Task 7

// function Calculator () {
//   this.read = function() {
//     this.firstNumber = parseInt(prompt("Enter first number"));
//     this.secondNumber = parseInt(prompt("Enter second number"));
//   },
//   this.sum = function() {
//     return this.firstNumber + this.secondNumber;
//   },
//   this.mul = function() {
//     return this.firstNumber * this.secondNumber;
//   }
// };

// const calculator = new Calculator();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Task 8

// function Accumulator(startigValue) {
//     this.value = startigValue,
//     this.read = function() {
//         this.value += parseInt(prompt("Enter number"));
//         return this;
//     }
// }
// const accumulator = new Accumulator(100);
// accumulator.read();
// alert(accumulator.value);