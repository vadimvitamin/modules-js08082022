// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// Потрібно написати функцію, яка приймає 1 параметр key, яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true

// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };
// const checkKey = key => {
//   for (const key in obj) {
//     if (key === currentKey)
//   }
// };
// checkKey();

// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// // після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

// const multiplyNumeric = obj => {
//   for (const key in obj) {
//     console.log(obj[key]);
//   }
// };
// multiplyNumeric(menu);

//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const calcSalary = salaries => {
//   let total = 0;
//   //   for (const key in salaries) {
//   //     total += salaries[key];
//   //   }
//   або;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// console.log(calcSalary(salaries));

// Підрахувати кількість голосних букв у рядку
// Функція `countVowel()` повертає кількість голосних у вхідному рядку.
//
// Підрахувати кількість голосних у рядку
// Функція `countVowel()` повертає кількість голосних у вхідному рядку.
//
//
// console.log(countVowel('Hello')); //2
// console.log(countVowel('Umbrella')); //3

// const vowel = ['a', 'e', 'i', 'o', 'u'];
// const countVowel = str => {
//   for (const letter of str) {
//       if (
//         vowel.includes(letter);
//     console.log(letter);
// )
//   }
// };
// console.log(countVowel('Hello')); //2
// console.log(countVowel('Umbrella')); //3

// Напишіть код JS, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr = deleteElement(arr, 5);

// function deleteElement(arr, number) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (number === att[i]) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }

// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

// Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];
// const chunk = (data, length) => {
//   let array = [];
//   let index = 0;
//   while (true) {
//     array.push(data.slice(index, length + index));
//     index += length;
//     if (index > data.length) {
//       break;
//     }
//   }
//   return array;
// };

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// // Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunk = (data, length) => {
//   let array = [];
//   let ind = 0;
//   while (ind > data.length) {
//     array.push(data.slice(ind, length + ind));
//     ind += length;
//   }
//   return array;
// };

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// Напишіть функцію, щоб перевірити, чи є вхідний рядок паліндромом
// Функція `checkPalindrome()` повертає логічне значення залежно від того, є вхідний рядок паліндромом чи ні.

// console.log(checkPalindrome("bannana")) //false
// console.log(checkPalindrome("racecar")) //true
// console.log(checkPalindrome("madam")) //true// Напишіть функцію, щоб перевірити, чи є вхідний рядок паліндромом
// Функція `checkPalindrome()` повертає логічне значення залежно від того, є вхідний рядок паліндромом чи ні.

// const checkPalindrome = string => {
//   for (let i = 0; i < string.length; i += 1) {
//     console.log(string[i]);
//     console.log(string[string.length - 1 - i]);
//     if (string[i] !== string[string.length - 1 - i]) {
//       return false;
//     }
//     return true;
//   }
// };
// console.log(checkPalindrome('bannana')); //false
// console.log(checkPalindrome('racecar')); //true
// console.log(checkPalindrome('madam')); //true
// ************************************************************************

// filteredNumbers.forEach(number => {
//   console.log(number + 1);
// });

// let names = ['Anna', 'Dave', 'Hannah', 'Bob'];
// names.forEach(name => {
//   console.log(name + ' is the best');
// });

// ******************************************************
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
// *****************************************
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }
// *****************************************************
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// ******************************************

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає функцію зворотного виклику
//greet(name) - колбек, який приймає ім'я і виводить в консоль
//рядок "Привіт <name>"
//Реалізуй перевірку, чи name не пустий рядок

// Напишіть дві функції
//makeProduct(назва, ціна, callback) - приймає
//імя і ціну товару, а також функцію callback.
//Функція створює об'єкт товару, додає йому унікальний
//ідентифікатор у властивості id і викликає зворотний виклик
//передаючи йому створений об’єкт.
//showProduct(product) - callback приймає об'єкт
//продукта і виводить його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     id: Date.now(),
//     name,
//     price,
//   };
//   callback(product);
// }

// function showProduct(product) {
//   console.log('product');
// }
// makeProduct('mango', 100500, showProduct);
// makeProduct('pen', 123, showProduct);
// **********************************************
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie');
// makeDish('Poly', 'muffins');

// *************************************************
// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка рахує та виводить в консоль кількість своїх викликів
// function makeCounter() {
//   let counter = 0;
//   return function (counter) {
//     return (counter += 1);
//   };
// }
// const testCounter = makeCounter();
// console.log(object());
// ******************************************
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// *******************************************

//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.
// function saveDiscount(discount) {
//   return function (sum) {
//     return sum - sum * (discount / 100);
//   };
// }
// const discount = saveDiscount(30);
// console.log(discount(10));

// ***************************************************
// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };
// product.showPrice();
// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind({ price: 100 }));
// **********************************************************
//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   min() {},
//   mult() {},
//   div() {},
// };
// ******************************************************************
// Даний об'єкт counter. Напишіть до нього getter та setter
// const counter = {
//   _count: 3,
// }
// *********************************************************************
// Переберіть масив і поверніть новий масив, збільшений на 2
// Параметр для збільшення передайте, як this

// const numbers = [1, 2, 3];
// let restNumbers = [];
// numbers.forEach(function (number) {
//   console.log(number);
//   console.log(this);
//   restNumbers.push(number * this);
// }, 2);
// console.log(restNumbers);
// ****************************************************
// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);
// ***************************************************
//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.

// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function sortUsres(users, men) {
//   const women = [];
//   for (let user of users) {
//     if (!men.includes(user)) {
//       console.log(user);
//       women.push(user);
//     }
//   }
//   console.log(women);
// }
// sortUsres(users, men);

//Замінити всі розширення файлів з .css на .js
// const files = [
//   'index.css',
//   'script.js',
//   'style.css',
//   'step-types.json',
//   'firebase.css',
// ];
// for (let i = 0; i < files.length; i += 1) {
//   console.log(files[i]);
//   files[i] = files[i].replace('.css', '.js');
// }
// console.log(files);
// *******************************************************
// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];
// for (let i = 0; i < names.length; i += 1) {
//   if (typeof names[i] !== 'string') {
//     names.splice(i, 1);
//   }
// }
// console.log(names);
// ***********************************************************
//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {
//   const daySpeed = 7;
//   const nigthSpeed = 2;
//   let days = 0;
//   let total = 0;
//   while (depth > total) {
//     days += 1;
//     total += daySpeed;
//     if (total < depth) {
//       total -= nigthSpeed;
//     }
//   }
//   console.log(days);
// }
// calcDays(42); //виповзе за 8 днів
// calcDays(17); //виповзе за 3 дні
// calcDays(18); //виповзе за 4 дні
// ********************************************************
// Cтворити функцію яка буде приймати 1 параметр та знаходити
// в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)

// const numbers = [1, 2, 3, 1, 2, 17, 19];

// function getCommonElements(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       newArr.push(arr[i]);
//       console.log(arr[i]);
//     }
//   }

//   return newArr;
// }
// console.log(getCommonElements(numbers));
// ************************************************************************
// ****************************************************************Blanded JS 24.09.2022 10.00**********************************
// const url =
//   'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';

// // console.log(window.location);
// console.log(url);
// const link = new URL(url);
// console.log(link);
// const search = link.search.slice(1);
// console.log(search);
// const arrQuery = search.split('&');
// console.log(arrQuery);
// const objQuery = arrQuery.reduce((obj, item) => {
//   const [key, value] = item.split('=');
//   //   console.log(values);
//   obj[key] = value;
//   console.log(obj);
//   return obj;
// }, {});
// console.log(objQuery);
// *****************************************************************************************
// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]
// **********************************************************************************
// Напишіть функцію, яка рахує кількість входжень значення в масив
// let arr = [2,4,3,1,2,1];
// Очікуваний результат: (arr, 1) => 2
// let arr = [2, 4, 3, 1, 2, 1];
// const checkIncome = function (arr, number) {
//   return arr.filter(el => el === number).length;
// };
// console.log(checkIncome(arr, 1));
// ******************************************************************************
// Сортувати у порядку за зменшенням
//
// let arr = [5, 2, 1, -10, 8];
//
// // ... ваш код для сортування за спаданням
//
// alert(arr); // 8, 5, 2, 1, -10
// let arr = [5, 2, 1, -10, 8];
// function sortBy(arr)
// return [...arr].sort()
// sortBy(sortBy(arr));
// дописати

// *************************************************
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = { name: 'Bruce', age: 25 };
// let jhon = { name: 'Jhon', age: 30 };
// let maria = { name: 'Maria', age: 28 };

// let arr = [bruce, jhon, maria];

// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }
// sortByAge(arr);
// console.log(arr);
//**************8 */
// // тепер: [bruce, maria, jhon]
// alert(arr[0].name); // Bruce
// alert(arr[1].name); // Maria
// alert(arr[2].name); // Jhon
// *********************************************************************************
// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

// const input = 'Every developer likes to mix kubernetes and javascript';
// Result
// 'E3y d7r l3s to mix k8s and j8t'
// function shortString(input) {
//   return input
//     .split(' ')
//     .map(word => {
//       if (word.length > 4) {
//         return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
//       } else {
//         return word;
//       }
//     })
//     .join(' ');
// }
// console.log(shortString(input));
// *******************************************************************************
