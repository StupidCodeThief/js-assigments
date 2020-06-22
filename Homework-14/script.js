// Task 1

// createTextNode vs innerHTML vs textContent
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?
// 1. elem.append(document.createTextNode(text)) // similar
// 2. elem.innerHTML = text
// 3. elem.textContent = text // similar

// Task 2

// Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>

// function clear(elem) {
//   elem.innerHTML = null;

//   //   Array.from(elem.childNodes).forEach((e) => {
//   //     elem.removeChild(e);
//   //   });
// }

// clear(elem); // очищает список

// Task 3

// Создайте список
// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.

// const createUl = () => {
//   const ul = document.createElement("ul");

//   const createLi = () => {
//     document.body.append(ul);

//     const answer = prompt("Enter new li element");

//     if (!answer) return;

//     const li = document.createElement("li");

//     ul.append(li);
//     li.textContent = answer;

//     return setTimeout(() => {createLi()});
//   };

//   return setTimeout(() => {createLi()});
// };

// createUl();

// Task 4

// Цветные часы с использованием setInterval
// Создайте цветные часы как в закреплённом скриншоте.
// (Время обновляется каждую секунду)
// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

// const clock = document.querySelector(".clock");
// const hour = document.querySelector(".hour");
// const min = document.querySelector(".min");
// const sec = document.querySelector(".sec");
// const startClock = document.querySelector(".start");
// const stopClock = document.querySelector(".stop");

// time = () => {
//   let timeStop = false;

//   stopClock.addEventListener("click", () => {
//     timeStop = true;
//   });

//   const timeNow = () => {
//     hour.textContent =
//       new Date().getHours().toString().length == 2
//         ? new Date().getHours()
//         : "0" + new Date().getHours();
//     min.textContent =
//       new Date().getMinutes().toString().length == 2
//         ? new Date().getMinutes()
//         : "0" + new Date().getMinutes();
//     sec.textContent =
//       new Date().getSeconds().toString().length == 2
//         ? new Date().getSeconds()
//         : "0" + new Date().getSeconds();

//     if (timeStop) return;

//     return setTimeout(() => {
//       timeNow();
//     });
//   };

//   return setTimeout(() => {
//     timeNow();
//   });
// };

// startClock.addEventListener("click", () => {
//   time();
// });

// Task 5

// Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

// const second = document.createElement("li");
// const third = document.createElement("li");

// second.textContent = "2";
// third.textContent = "3";

// one.after(second);
// two.before(third);

// Task 6

// Сортировка таблицы
// Напишите код для сортировки по столбцу "name"

// If we need to sort by option

// const sortTable = (table, column = "Имя") => {
//   const rows = Array.from(table.rows);

//   const head = rows.shift();

//   const cellsIndex = Array.from(head.cells).findIndex(
//     (item) => item.textContent === column
//   );

//   rows.sort((a, b) =>
//     a.cells[cellsIndex].textContent > b.cells[cellsIndex].textContent ? 1 : -1
//   );

//   table.tBodies[0].append(...rows);
// };

// sort by first column

// const sortTable = (table) => {
//   const rows = Array.from(table.rows)
//     .shift()
//     .sort((a, b) =>
//       a.cells[0].textContent > b.cells[0].textContent ? 1 : -1
//     );

//   table.tBodies[0].append(...rows);
// };

// sortTable(table);

// Task 7

// Создать уведомление

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым.
// Уведомление должно автоматически исчезнуть через 1,5 секунды.
// Пример объекта options:

// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.

// const showNotification = ({ top = 0, right = 0, className, html }) => {
//   const div = document.createElement("div");
//   div.innerHTML += html;
//   div.className = className;
//   div.style.position = "absolute";
//   div.style.top = top + "px";
//   div.style.right = right + "px";
//   document.body.append(div);
//   console.dir(div);
//   setTimeout(() => div.remove(), 1500);
// };

// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: "Hello " + i++,
//     className: "welcome",
//   });
// }, 2000);

// Task 8

// Найти размер прокрутки снизу
// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

// Напишите соответствующее выражение для произвольного элемента elem.

// P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.

// const scrollBottom = elem => {
//   return elem.scrollHeight - elem.scrollTop - elem.clientHeight;
// };

// Task 9

// Покажите заметку рядом с элементом
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor

// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи.
// Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.
// Демо заметки - в закреплёнке.

// function positionAt(anchor, position, elem) {
//   const anchorCoords = anchor.getBoundingClientRect();
//   const elemCoords = elem.getBoundingClientRect();
//   switch (position) {
//     case "top":
//       elem.style.top = anchorCoords.y - elemCoords.height + "px";
//       elem.style.left = anchorCoords.x + "px";
//       break;

//     case "right":
//       elem.style.left = anchorCoords.right + "px";
//       elem.style.top = anchorCoords.y + "px";
//       break;

//     case "bottom":
//       elem.style.top = anchorCoords.bottom + "px";
//       elem.style.left = anchorCoords.x + "px";
//       break;
//   }
// }

// /**
//  * Показывает заметку с заданным содержимым на заданной позиции
//  * относительно элемента anchor.
//  */
// function showNote(anchor, position, html) {
//   let note = document.createElement("div");
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);

//   positionAt(anchor, position, note);
// }

// // test it
// let blockquote = document.querySelector("blockquote");

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// Task 10

// Найдите координаты точек относительно окна браузера
// В ифрейме ниже располагается документ с зелёным «полем».
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

// const fieldCoords = field.getBoundingClientRect();

// const leftBorderTop = `${fieldCoords.x} : ${fieldCoords.y}`;

// const leftTop = `${fieldCoords.x + field.clientTop} : ${
//   fieldCoords.y + field.clientLeft
// }`;

// const rightBorderBottom = `${fieldCoords.right} : ${fieldCoords.bottom}`;

// const rightBottom = `${fieldCoords.x + field.clientWidth} : ${
//   fieldCoords.y + field.clientHeight
// }`;
