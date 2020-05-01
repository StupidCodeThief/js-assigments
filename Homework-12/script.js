// Task 1

// Создайте 5 файлов (test1.js, test2.js ... ) Каждый их которых должен выводить приветствие ex. console.log('Hi I'm file test1.js');
// C помощью скрипта представленного ниже, загрузите их на страницу. Так же предусмотрите условие, для обработки ошибок.

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Не удалось загрузить скрипт ${src}`));

//   document.head.append(script);
// }

// loadScript("test1.js", (err, script) => {
//   if (err) {
//     console.log(err);
//   } else
//     loadScript("test2.js", (err, script) => {
//       if (err) {
//         console.log(err);
//       } else
//         loadScript("test3.js", (err, script) => {
//           if (err) {
//             console.log(err);
//           } else
//             loadScript("test4.js", (err, script) => {
//               if (err) {
//                 console.log(err);
//               } else
//                 loadScript("test5.js", (err, script) => {
//                   if (err) {
//                     console.log(err);
//                   } else console.log("calback finished");
//                 });
//             });
//         });
//     });
// });

// Task 2

// Можно ли "перевыполнить" промис?

// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000); // never succeed
// });

// promise.then(alert); // 1

// Task 3

// Задержка на промисах
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), ms);
//   })
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// Task 4

// Промисы: сравните then и catch
// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2); // if promise.state === fulfield => then(f1). promise.state === rejected => cath(f2)

// // Против:

// promise.then(f1, f2); // if promise.state === fulfield => then(f1, f2). promise.state === rejected => unhandledRejection

// Task 5

// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(console.log("err")); // => err => Error: Whoops!

// Task 6

// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson1(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson1("no-such-user.json") // (3)
//   .catch(alert); // Error: 404

// async function loadJson2(url) {
//   const result = await fetch(url);
//   return result((response) => {
//     if (response.status == 200) {
//         const user = await response.json();
//         return user;
//     }
//     throw new Error(response.status);
//   });
// }

// loadJson2("no-such-user.json") // (3)
//   .catch(alert); // Error: 404

// Task 7

// Перепишите, используя async/await
// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status === 200) {
//     const user = await response.json();
//     return user;
//   }

//   throw new HttpError(response);
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.

// async function demoGithubUser() {
//   do {
//     try {
//       const name = prompt("Введите логин?", "iliakan");
//       const result = await loadJson(`https://api.github.com/users/${name}`);
//       if (result.name) {
//         alert(`Полное имя: ${result.name}.`);
//         break;
//       }
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       } else {
//         throw err;
//       }
//     }
//   } while (true);
// }

// demoGithubUser();

// Task 7

// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then((resolve) => {
//     console.log(resolve);
//   });

//   // (async () => {
//   //   let result = await wait();
//   //   console.log(result);
//   // })();
// }

// f();
