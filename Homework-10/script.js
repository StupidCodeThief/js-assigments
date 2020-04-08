// Task 1

// Сначала у нас есть такой код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// const rabbit = new Rabbit();
// alert( rabbit.eats ); // true

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// const rabbit = new Rabbit();
// Rabbit.prototype = {};
// console.log( rabbit.eats ); // true

// // …А если код такой (заменили одну строчку)?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// const rabbit = new Rabbit();
// Rabbit.prototype.eats = false;
// console.log( rabbit.eats ); // false

// // Или такой (заменили одну строчку)?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// const rabbit = new Rabbit();
// delete rabbit.eats;
// console.log( rabbit.eats ); // true

// // Или, наконец, такой:
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// const rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log(rabbit.eats); // undefined

// Task 2

// Добавить функциям метод "f.defer(ms)"
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

// Function.prototype.defer = function(timeout) {
//   return setTimeout(this, timeout);
// };

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

// Task 3

// Добавьте функциям декорирующий метод "defer()"
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// Function.prototype.defer = function(timeout) {
//   return (...args) => {
//     setTimeout(() => this.apply(null, args), timeout);
//   };
// };

// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// // Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

// Task 4

// Перепишите в виде класса
// Есть класс CoffeeMachine , заданный в функциональном стиле.
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа.
// Исходный код:
// function CoffeeMachine(power) {
//   var waterAmount = 0;
//   var WATER_HEAT_CAPACITY = 4200;
//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }
//   this.run = function() {
//     setTimeout(function() {
//       alert( 'Кофе готов!' );
//     }, getTimeToBoil());
//   };
//   this.setWaterAmount = function(amount) {
//     waterAmount = amount;
//   };
// }

// При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства.

// function CoffeeMachine(power) {
//   this.power = power
// }

// CoffeeMachine.prototype = {
//   _WATER_HEAT_CAPACITY: 4800,

//   getTimeToBoil() {
//     return (this.waterAmount * this._WATER_HEAT_CAPACITY * 80) / this.power;
//   },

//   run() {
//     setTimeout(() => {
//       console.log("Кофе готов!");
//     }, this.getTimeToBoil());
//   },

//   setWaterAmount(amount) {
//     this.waterAmount = amount;
//   }
// };

// const coffeeMachine = new CoffeeMachine(10000);

// coffeeMachine.setWaterAmount(50);

// console.log(coffeeMachine.getTimeToBoil());

// coffeeMachine.run();

// Task 5

// Найдите ошибку в наследовании
// Найдите ошибку в прототипном наследовании. К чему она приведёт?

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.walk = function() {
//   console.log( "ходит " + this.name );
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype.__proto__ = Animal.prototype;

// Rabbit.prototype.walk = function() {
//   console.log( "прыгает! и ходит: " + this.name );
// };

// const animal = new Animal("kot");
// animal.walk();

// const rabbit = new Rabbit("krol");
// rabbit.walk();

// Task 6

// В чём ошибка в наследовании
// Найдите ошибку в прототипном наследовании. К чему она приведёт?

// function Animal(name) {
//  this.name = name;
//  this.walk = function() {
//     console.log( "ходит " + this.name );
//   };
// }

// function Rabbit(name) {
//   Animal.apply(this, arguments);
//   this.walk = function() {
//     console.log( "прыгает " + this.name );
//   };
// }

// Rabbit.prototype = Object.create(Animal.prototype);

// const rabbit = new Rabbit("Кроль");
// rabbit.walk();

// Task 7

// Класс "часы"
// Есть реализация часиков, оформленная в виде одной функции‑конструктора. У неё есть приватные свойства timer , template и метод render .
// Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.
// P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).

// function Clock({ template }) {
//   this.template = template;
// }

// Clock.prototype = {
//   timer: 0,

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   },

//   stop() {
//     clearInterval(timer);
//   },

//   start() {
//     this.render();
//     timer = setInterval(this.render.bind(this), 1000);
//   }
// };

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
// setTimeout(clock.stop, 5000);

// Task 8

// Класс "расширенные часы"
// Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision , который будет задавать
// частоту тика в setInterval . Значение по умолчанию: 1000 .
// Для этого класс Clock надо унаследовать. 
// Пишите ваш новый код в файле extended‐clock.js .
// Исходный класс Clock менять нельзя.
// Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.
// P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }