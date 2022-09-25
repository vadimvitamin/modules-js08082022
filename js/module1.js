// // Виведіть на екран загальну кількість яблук і винограду. Різницю яблук та винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff =  apples - grapes;
// console.log(diff)

// // Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;

// console.log(students);

// // Розбери пріоритет операторів в інструкції надання
//  значення змінної result.
// const result = 108 + 223 - 2 * 5;
//                 // 331    -     //    10
// console.log(result);

// // Напиши скрипт, який виводить у консоль заокруглені
//  вгору/вниз і т.д. Значення змінної value.
// //  Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевірте, що буде в консолі при
// значеннях 27.3 і 27.9.

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
//const value = Math.floor(27.5);// Округлення в низ до цілого числа
//const value = Math.ceil(27.001) // Округлення до першого більшо числа
// const value = Math.round(27.5)// Звичайне математичне округлення
// console.log(value);

// // Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
//const message = `${companyName} has ${repairBots+ defenceBots} bots in stock`;// Новий синтаксис
//const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock';//Старий синтаксис
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

// Вага та висота зберігаються в змінних weight і height, але не як числа,
//  а у вигляді рядків (спеціально для завдання).
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс масії тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,30';
// Замінюємо кому на крапку
// Приводимо Стрінгу до числа
// let height = '1.75';
// weight = Number(weight.replace(',','.'))
// height = Number(height)
// // const bmi = (weight/ Math.pow(height,2)).toFixed(1);
// const bmi =(Number(weight.replace(',','.')) / Math.pow(Number(height),2)).toFixed(1)//
// console.log(bmi); // 28.8

// Яким буде результат виразів?
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0_%E2%80%94_A

// console.log(10 >= '7'); //true

// console.log('2' > '12'); // true

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6);//false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true);//false

// console.log('0' == false);//true

// console.log('0' === false);//false

// console.log('Papaya' < 'papaya');//true

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null);//true

// console.log(undefined === null);//false

// Використовуючи конструкцію if..else та prompt, напиши код, який запитуватиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Вірно!", інакше - "Не знаєте? ECMAScript!"

// const value = prompt("Яка офіційна назва JavaScript?").toLocaleLowerCase()
// const ecma = 'ECMAScript'

// if(value === ecma.toLocaleLowerCase()){
//     alert("Вірно!")
// }else{
//     alert("Не знаєте? ECMAScript!")
// }

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".
// const value = Number(prompt('Enter number'))
// console.log(value);
// console.log(typeof value);

// if (value > 0) {
//     console.log("Це позитивне число");
// } else if (value === 0) {
//     console.log("Це нуль");
// } else if (value < 0) {
//     console.log("Це від'ємне число");
// } else {
//     console.log('Ви ввели не число');
// }

// if (value > 0) {
//     console.log("Це позитивне число");
// }
// if (value === 0) {
//     console.log("Це нуль");
// }
// if (value < 0) {
//     console.log("Це від'ємне число");
// }
// if (isNaN(value)) {
//     console.log('Ви ввели не число');
// }

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ
// let link = 'https://somesite.com/about';

// console.log(link.slice(link.length-1) === '/');

// console.log(link.endsWith('/'));
// console.log(!false);
// if (!link.endsWith('/')) {
//     // link = `${link}/`
//     // link = link + '/'
//     link += '/'
// }
// console.log(link);

// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"

// console.log(typeof days);
// if(days === 0){
//     console.log("Сьогодні");
// }else if (days === 1){
//     console.log("Завтра");
// }else if (days === 2){
//     console.log("Післязавтра");
// }else {
//     console.log("Дата в майбутньому");
// }
// const days = Number(prompt('Enter days'))
// // console.log(isNaN(days) || Number.isNaN(days));
// console.log(days);

// switch (days) {
//     case 0:
//         console.log("Сьогодні");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//     case 2:
//         console.log("Післязавтра");
//         break;
//     default:
//         console.log("Дата в майбутньому");
// }

// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     // / оператор ділення
//     // % оператор залишку від ділення
//     // if (i % 5 === 0){
//     //     console.log(i);
//     // }
// }

// Створи світлофор

// const color = prompt('Enter color')
// console.log(color);

// // const test = color || 'DONT WORK!'
// // console.log(test);
// const a = new Date().getMilliseconds()
// console.log();
// switch (color) {
//     case 'red':
//         console.log('STOP!!!')
//         break;
//     case 'yellow':
//         console.log('READY !!!')
//         break;
//     case 'green':
//         console.log('GO !!! || RUN !!!')
//         break;
//     default:
//         console.log('BE CAREFULL !!!')
// }
// const b = new Date().getMilliseconds();

// console.log(b - a);

// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Привіт!"
// інакше виводити рядок "Невірний пароль!"

// BLANDED 2

// const message = prompt("Enter your login");
// console.log(message);
// if (message === "Admin") {
//     const passowrd = prompt("Enter your password")
//     if (password === "я головний") {
//         console.log(hello);
//      } else {
//         console.log("wrong password")
//     }
// } else if (!message) {
//     console.log("Cancel")
//         else {console.log("i do not know!")

// }

// За допомогою циклу for додайте всі парні числа від min до max

//const max = 50;
//const min = 0;

// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i +=1) {
//     if(i % 2 === 0) {
//         total += i;
//     }
// } console.log(total)

// якщо потрібно непарні числа то треба стаити !== 0

// За допомогою циклу for виведіть всі непарні числа від min до max

//const max = 70;
//const min = 35;

// const max = 70;
// const min = 35;

//  for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {

//     }
//  }  console.log(i)

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// let total = 0;

// while (true) {
//     const number = prompt("Enter your number");
//    if ( number === null) {
//     break;
//    }
//    total += number(number);
// }
//  alert('Загальна сума введених чисел дорівнює ${total}.');

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// const validNumber = 100;
// let userNumber;
// do {
//  userNumber = prompt('enter number', 5);
// } while (userNumber < validNumber);
// console.log(userNumber)

//   Моя ЗАДАЧА
// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const number = 73;

// if (number >= 0 && number <= 15) {
//     console.log('first')
// } else if (number > 15 && number <= 30) {
//     console.log('second')
// } else if (number > 30 && number <= 45) {
//     console.log('third')
// } else if (number > 45 && number <= 59) {
//     console.log('fourth')
// } else console.log('uncknow')

// Перепишіть конструкцію if за допомогою умовного оператора '?':

// const a = 1;
// const b = 2;
// let result;
//
// if (a + b < 4) {
//   result = 'Many';
// } else {
//   result = 'Much';
// }

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Many';
// } else {
//   result = 'Much';
// }

// через тернарник

// result = a + b < 4 ? result = 'Many' : result = 'Much';
// console.log(result)

// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const language = "JS"
// switch (language.toLowerCase()) {
//     case 'php':
//         console.log("PHP Расмус Лердорф")
//         break;
// } case 'php';
// console.log("C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота")
// break;

// case 'php';
//         console.log("Swift Кріс Латтнер")
//         break;

//         case 'php';
//         console.log("JS Брендан Ейх")
//         break;
//         case 'php';
//             console.log("Java Джеймс Гослінг")
//             break;
//             case 'php';
//                 console.log("Python Гвідо ван Россум")
//                 break;

//                 default : console.log("error")

// Натуральне число більше 1 називається простим, якщо воно ні на що не ділиться, крім себе і 1.
//
// Інакше кажучи, n > 1 – просте, якщо його розподілі на будь-яке число крім 1 і є залишок.
//
//   Наприклад, 5 це просте число, воно не може бути розділене без залишку на 2, 3 та 4.
//
// Напишіть код, який виводить усі прості числа з інтервалу від 2 до n.
//
//   Для n = 10 результат має бути 2,3,5,7.
//
// P.S. Код також має бути легко модифікований для будь-яких інших інтервалів.

// область видимости конспект

// const globalValue = 10;
// console.log(globalValue);

// function foo(){
// console.log(globalValue);
// };

// for (let i = 0; i < 5; i += 1) {
//   console.log(globalValue);

//   if (i === 2) {
//     console.log(globalValue);
//   }
// }

// блочная область видимости
// for (let i = 0; i < 5; i += 1) {
//   const a = 20;
//   console.log(a); // 20

//   if (i === 2) {
//     const b = 30;
//     console.log(a); // 20
//     console.log(b); // 30
//   }

//   if (i === 3) {
//     console.log(a); // 20

//     // ❌ Ошибка! Переменная b не доступна в этой области видимости
//     console.log(b);
//   }
// }

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const task = { priority, category, completed };
  const task1 = {
    completed: {},
    category: 'General',
    priority: 'Normal',
    text: {},
  };
  return task;

  console.log(data);
  // Change code above this line
}
