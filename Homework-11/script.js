// Task 1

// Перепишите класс
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// function Clock({ template }) {
//     let timer;

//     function render() {
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     this.stop = function() {
//       clearInterval(timer);
//     };

//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }


// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render = () => {
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
//   };

//   stop() {
//     clearInterval(this.timer);
//   };

//   start()  {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();


// Task 2

// Ошибка создания экземпляра класса
// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);


// Task 3

// Улучшенные часы
// У нас есть класс Clock. Сейчас он выводит время каждую секунду

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». 
// Установите значение в 1000 (1 секунда) по умолчанию.
// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.


// Task 4

// Класс расширяет объект?
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// // метод hasOwnProperty от Object.prototype

// console.log( rabbit.hasOwnProperty('name') ); // true
// console.log( Rabbit.prototype.__proto__ );

// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
// В чем разница?
// class Rabbit, Rabbit.__proto__ === Function.prototype
// Rabbit extends Object,  Rabbit.__proto__ === Function: Object;
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// console.log( Rabbit.__proto__ );
// console.log( rabbit.hasOwnProperty('name') ); // true