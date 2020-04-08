// Task 1

// Связанная функция как метод
// Что выведет функция?

// function f() {
//   console.log( this ); // Object [global] || Window
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

// Task 2

// Повторный bind
// Можем ли мы изменить this дополнительным связыванием? => НЕТ

// Что выведет этот код?

// function f() {
//   console.log(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } ); // second bind ignored

// f(); // Вася

// Task 3

// Свойство функции после bind
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// const bound = sayHi.bind({
//   name: "Вася"
// });

// alert(bound.test); // undefined, bind returns a new object without test property

// Task 4

// Исправьте функцию, теряющую "this"
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // Эту строку

// Task 5

// Использование частично применённой функции для логина
// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// Task 6

// Работа с прототипами
// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

// const animal = {
//   jumps: null
// };
// const rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert(rabbit.jumps); // true

// delete rabbit.jumps;

// alert(rabbit.jumps); // null

// delete animal.jumps;

// alert(rabbit.jumps); // undefined

// Task 7

// Алгоритм поиска
// Задача состоит из двух частей.

// У нас есть объекты:

// 1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например,
// pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// 2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// const head = {
//   glasses: 1
// };

// const table = {
//   pen: 3
// };

// const bed = {
//   sheet: 1,
//   pillow: 2
// };

// const pockets = {
//   money: 2000
// };

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

// console.log(pockets.pen);
// console.log(bed.glasses);

// console.log(pockets.glasses);
// console.log(head.glasses); // faster

// Task 8

// Куда будет произведена запись?
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// const animal = {
//   eat() {
//     this.full = true;
//   }
// };

// const rabbit = {
//   __proto__: animal
// };

// rabbit.eat(); // rabbit

// Task 9

// Почему наедаются оба хомяка?
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// const hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = []; // add every chid personal stomach
//     this.stomach.push(food);
//   }
// };

// const speedy = {
//   __proto__: hamster
// };

// const lazy = {
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// console.log(lazy.stomach); // empty

