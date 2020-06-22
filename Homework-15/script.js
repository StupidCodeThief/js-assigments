// Task 1

// Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
// Демо в шапке карточки.

// const div = document.querySelector(".text");
// const button = document.querySelector(".close");

// button.addEventListener("click", () => {
//   div.classList.toggle("visually-hidden");
// });

// Task 2

// Спрятать себя
// Создайте кнопку, которая будет скрывать себя по нажатию.

const button = document.querySelector(".close");

// button.addEventListener("click", () => {
//   button.classList.add("visually-hidden");
// });

// Task 3

// Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// button.addEventListener("click", () => alert("1")); // work
// button.removeEventListener("click", () => alert("1")); // fail
// button.onclick = () => alert(2); // work

// Task 4

// Передвиньте мяч по полю
// Пусть мяч перемещается при клике на поле, туда, куда был клик (демо в шапке)
// Требования:
// - Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// - CSS-анимация желательна, но не обязательна;
// - Мяч ни в коем случае не должен пересекать границы поля;
// - При прокрутке страницы ничего не должно ломаться;

// Заметки:
// - Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// - Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

// function animate({ duration, draw, timing }) {
//   let start = performance.now();

//   requestAnimationFrame(function animate(time) {
//     let timeFraction = (time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;

//     let progress = timing(timeFraction);

//     draw(progress);

//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     }
//   });
// }

// field.addEventListener("click", (event) => {
//   const { width, height, left, top } = field.getBoundingClientRect();
//   const x = event.clientX - left - field.clientLeft;
//   const y = event.clientY - top - field.clientTop;

//   // const x = event.offsetX; // easier than event.clientX/event.clientY
//   // const y = event.offsetY;

//   let moveX = x;
//   let moveY = y;

//   // const { width, height } = field.getBoundingClientRect();

//   if (x + ball.width > width) {
//     moveX = width - ball.width;
//   }

//   if (x < ball.width / 2) {
//     moveX = ball.width / 2;
//   }

//   if (y + ball.height > height) {
//     moveY = height - ball.height;
//   }

//   if (y < ball.height / 2) {
//     moveY = ball.height / 2;
//   }

//   ball.style.left = moveX - ball.width / 2 + "px";
//   ball.style.top = moveY - ball.width / 2 + "px";

//   // animate({
//   //   duration: 1000,
//   //   timing(timeFraction) {
//   //     return Math.pow(timeFraction, 2);
//   //   },
//   //   draw(progress) {
//   //     ball.style.left = progress * (moveX - ball.width / 2) + "px";
//   //     ball.style.top = progress * (moveY - ball.width / 2) + "px";
//   //   },
//   // });
// });

// Task 5

// Создать раскрывающееся меню.
// Создать меню, которое по нажатию открывается либо закрывается:
// P.S. HTML/CSS исходного документа можно и нужно менять.

// const showList = document.querySelector(".show-list");
// const list = document.querySelector(".list");

// showList.addEventListener("click", () => {
//   list.classList.toggle("visually-hidden")
// });

// Task 6

// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

// Результат должен выглядеть, как в шапке карточки.

// const divs = Array.from(document.querySelectorAll(".pane"));

// divs.forEach((elem) => {
//   elem.insertAdjacentHTML(
//     "beforeend",
//     "<button class='remove-button'>X</button>"
//   );
// });

// const removeButton = Array.from(document.querySelectorAll(".remove-button"));

// removeButton.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     elem.parentNode.classList.add("visually-hidden");
//   });
// });

// Task 7

// Карусель (опционально, но очень хорошо если вы бы сделали)
// Создайте «Карусель» - ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.

// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const images = document.querySelectorAll(".carusel-image");
// let index = 0;

// left.addEventListener("click", () => {
//   if (index > 0) {
//     images[index].classList.toggle("visually-hidden");

//     index--;

//     if (index < images.length) {
//       images[index].classList.toggle("visually-hidden");
//     }
//   }
// });

// right.addEventListener("click", () => {
//   if (index < images.length - 1) {
//     images[index].classList.toggle("visually-hidden");

//     index++;

//     if (index < images.length) {
//       images[index].classList.toggle("visually-hidden");
//     }
//   }
// });

// Task 8

// Раскрывающееся дерево
// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
// Требования:
// - Использовать только один обработчик событий (применить делегирование)
// - Клик вне текста заголовка (на пустом месте) ничего делать не должен.
// Скрин в шапке. (Животные)

// const list = document.querySelector(".tree");

// const listItems = Array.from(list.querySelectorAll("ul"));

// listItems.forEach((item) => {
//   item.classList.add("visually-hidden");
// });

// list.addEventListener("click", (event) => {
//   if (event.target.tagName != "SPAN") return;

//   event.target.parentNode
//     .querySelector("ul")
//     .classList.remove("visually-hidden");
// });

// Task 9

// Сортируемая таблица
// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

// Каждый элемент <th> имеет атрибут data-type:

// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.

// Сортировка должна поддерживать только типы "string" и "number".

// P.S. Таблица может быть большой, с любым числом строк и столбцов.

// const sortTable = (target, table) => {
//   const tBody = table.querySelector("tbody");
//   const i = target.cellIndex;
//   const rows = Array.from(table.rows);

//   rows.shift();

//   if (target.dataset.type === "string") {
//     rows.sort((a, b) =>
//       a.cells[i].textContent > b.cells[i].textContent ? 1 : -1
//     );
//   }

//   if (target.dataset.type === "number") {
//     rows.sort((a, b) =>
//       parseFloat(a.cells[i].textContent) > parseFloat(b.cells[i].textContent)
//         ? 1
//         : -1
//     );
//   }

//   tBody.append(...rows);
// };

// grid.addEventListener("click", (event) => {
//   if (event.target.tagName != "TH") return;

//   sortTable(event.target, grid);
// });

// Task 10

// Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// Демо: в шапке два скрина, один описывает бокс с линками, второй модальное окно, которое должно открывать при клике на линку.

// Детали:
// - Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// - Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

// contents.addEventListener("click", (event) => {
//   const link = event.target.closest("a");

//   if (link.tagName === "A") {
//     event.stopPropagation();

//     confirm("Перейти по ссылке?") ? null : event.preventDefault();
//   }
// });
