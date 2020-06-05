// task 1

// Псевдослучайный генератор
// Есть много областей, где нам нужны случайные данные.

// Одной из них является тестирование. Нам могут понадобиться случайные данные: текст, числа и т.д., чтобы хорошо всё проверить.

// В JavaScript мы можем использовать Math.random(). Но если что-то пойдёт не так, то нам нужно будет перезапустить тест, используя те же самые данные.

// Для этого используются так называемые «сеяные псевдослучайные генераторы». Они получают «зерно», как первое значение, и затем генерируют следующее, используя формулу. Так что одно и то же зерно даёт одинаковую последовательность, и, следовательно, весь поток легко воспроизводим. Нам нужно только запомнить зерно, чтобы воспроизвести последовательность.

// Пример такой формулы, которая генерирует более-менее равномерно распределённые значения:

// next = previous * 16807 % 2147483647

// Если мы используем 1 как зерно, то значения будут:
// 1. 16807
// 2. 282475249
// 3. 1622650073
// 4. …и так далее…

// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.
// Пример использования:

// function* pseudoRandom(seed) {
//   let previous = 0;
//   if (!previous) {
//     previous = seed;
//   }
//   while (true) {
//     let next = (previous * 16807) % 2147483647;
//     previous = next;
//     yield next;
//   }
// }

// let generator = pseudoRandom(1);

// console.log(generator.next().value); // 16807
// console.log(generator.next().value); // 282475249
// console.log(generator.next().value); // 1622650073

// Task 2

// Дочерние элементы в DOM

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>

// Как получить:
// // 1) Напишите код, который получит элемент <div>?
// const div = document.body.firstElementChild;
// // 2) Напишите код, который получит <ul>?
// const ul = div.nextElementSibling;
// // 3) Напишите код, который получит второй <li> (с именем Пит)?
// const li = ul.lastElementChild;

// console.log(div);
// console.log(ul);
// console.log(li);

// Task 3

// Вопрос о соседях
// Если elem – произвольный узел DOM-элемента…

// - Правда, что elem.lastChild.nextSibling всегда равен null? // no, it`s text node or undefined
// - Правда, что elem.children[0].previousSibling всегда равен null ? // no, it`s text node or undefined

// Task 4

// Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

// Должно получиться точно так же, как закреплено в шапке. (Скриншот таблицы)

// const table = Array.from(document.getElementsByTagName("table"))[0];
// const max = table.getElementsByTagName("tr").length;

// for (let i = 0; i < max; i++) {
//   table.rows[i].cells[i].style.backgroundColor = "red";
// }


// Task 5

// Поиск элементов
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table". // document.getElementById("age-table");
// Все элементы label внутри этой таблицы (их три). // document.getElementsByTagName('label');
// Первый td в этой таблице (со словом «Age»). // document.getElementById("age-table").rows[0].cells[0]
// Форму form с именем name="search". // document.getElementsByName("search")[0];
// Первый input в этой форме. // document.getElementsByName("search")[1]; or // document.getElementsByName("search")[0].firstElementChild;
// Последний input в этой форме. // document.getElementsByName("search")[0].lastElementChild;

// Откройте страницу https://learn.javascript.ru/task/find-elements/table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// Task 6

// Считаем потомков
// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

// const res = Array.from(document.getElementsByTagName('li'));
// res.forEach((li) => {
//     const num = Array.from(li.getElementsByTagName('li')).length;
//     console.log(`${(li.firstChild.textContent).trim()} ${num}`)
// });


// Task 7

// Что содержит свойство nodeType? // node type) from 1 to 12

// Что выведет этот код? // 3 -> text node
// <html>
// <body>
//   <script>
//     alert(document.body.lastChild.nodeType); 
//   </script>
// </body>
// </html>


// Task 8

// Тег в комментарии
// Что выведет этот код? // BODY

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // что выведет?
// </script>


// Task 9

// где в DOM-иерархии "document"? // Window => Document (document is the top of DOM)
// Объектом какого класса является document? // Node
// Какое место он занимает в DOM-иерархии? // Top
// Наследует ли он от Node или от Element, или может от HTMLElement? // yes Event Target -> Node -> document