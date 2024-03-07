// ЗАДАЧА No1 |напишите функцию calculateBMI,
//которая принимает объект с данными о человеке (имя, рост, вес) и возвращает
// его индекс массы тела (BMI).
// const user = {
//   name: "Murtuz",
//   height: 1.71,
//   weight: 55,
// };

// function calculateBMI(userObject) {
//   let result = userObject.weight / Math.pow(userObject.height, 2);
//   return result;
// }

// const result = calculateBMI(user).toFixed(1);
// console.log(`Индекс массы тела пользоваетля равен ${result}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No2 | создайте функцию findLongestWord,
// которая принимает массив слов и возвращает самое длинное слово из этого массива.
// const wordsArr = ["cucumber", "pen", "carpet"];

// function findLongestWord(arr) {
//   let newArr = "";
//   for (element of arr) {
//     if (newArr.length < element.length) {
//       newArr = element;
//     }
//   }
//   return newArr;
// }

// const result = findLongestWord(wordsArr);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА No3 | напишите функцию createUser, которая принимает имя и возраст пользователя,
//а затем возвращает объект, представляющий этого пользователя со свойствами name и age.
// let userName = "Murtuz";
// let age = 19;
// let userObject = {};

// function createUser(name, age) {
//   userObject.name = name;
//   userObject.age = age;
//   return userObject;
// }

// const result = createUser(userName, age);
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ЗАДАЧА No4 | cоздайте функцию filterProductsByPrice, которая принимает массив объектов
// с информацией о продуктах (название и цена),
//а затем возвращает новый массив с продуктами, цена которых меньше определенной суммы.
// let productsArray = [{ bread: 0.55 }, { milk: 2 }, { juice: 1 }, { bun: 0.85 }];
// function filterProductsByPrice(arr) {
//   let filteredArr = [];
//   for (let element of arr) {
//     for (let key in element) {
//       if (element[key] < 1) {
//         filteredArr.push(key);
//       }
//     }
//   }
//   return filteredArr;
// }

// const result = filterProductsByPrice(productsArray);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА No5 | напишите функцию getFullName,
//которая принимает объект с данными о человеке (имя и фамилия)
// и возвращает его полное имя в формате "Имя Фамилия".
// userObject = {
//   name: "Jon",
//   surname: "Jones",
// };
// function getFullName(obj) {
//   let firstName = obj.name;
//   let lastName = obj.surname;
//   let fullname = firstName + " " + lastName;
//   return fullname;
// }

// const result = getFullName(userObject);
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА No6 | cоздайте функцию sortByAge,
//которая принимает массив объектов с информацией о людях (имя и возраст),
//а затем возвращает этот массив, отсортированный по возрастанию возраста.
//X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No	7 | напишите функцию formatDate,
//которая принимает объект с информацией о дате (год, месяц, день)
//и возвращает строку с отформатированной датой в формате "ГГГГ-ММ-ДД".
// const dateObject = { year: 2004, month: 4, day: 10 };

// function formatDate(obj) {
//   let year = obj.year;
//   let month = obj.month;
//   let day = obj.day;
//   const resultDate = `${year}-${month}-${day}`;
//   return resultDate;
// }

// const result = formatDate(dateObject);
// console.log(result);

//Задача No8 | напишите функцию calculateAverageGrade,
//которая принимает объект с данными о студенте (имя и массив оценок) и
//возвращает средний балл этого студента.
// const studentObj = { name: "Pablo", grades: [5, 4, 4, 4, 3, 5] };

// function calculateAverageGrade(obj) {
//   let sum = 0;

//   for (let count of obj.grades) {
//     sum += count;
//   }
//   let average = sum / obj.grades.length;
//   return average.toFixed(2);
// }

// const result = calculateAverageGrade(studentObj);

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No9 | создайте функцию findProductByName, которая принимает
//массив объектов с информацией о продуктах (название и цена)
// и название продукта для поиска, а затем возвращает объект с данными о найденном продукте.
// const products = [
//   { name: "apple", price: 1 },
//   { name: "banana", price: 2 },
//   { name: "orange", price: 3.55 },
// ];

// function findProductByName(products, productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product;
//     }
//   }
// }

// const result = findProductByName(products, "apple");
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////

//Задача No10 | напишите функцию mergeObjects,
//которая принимает два объекта и возвращает новый объект,
//содержащий все свойства из обоих объектов.
// let userObject = { name: "Samuel", age: 25 };
// let userMarks = { mathematics: 5, physics: 5, chemistry: 5 };

// function mergeObjects(firstObj, secondObj) {
//   let newObj = { ...firstObj, ...secondObj };
//   return newObj;
// }
// const result = mergeObjects(userObject, userMarks);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No11 | cоздайте функцию filterByCategory,
//которая принимает массив объектов с информацией о товарах (название, категория и цена)
//и название категории для фильтрации, а затем возвращает новый массив товаров только из указанной категории.

// const productsArr = [
//   { name: "cheeze", category: "dairy", price: 6 },
//   { name: "bun", category: "flour", price: 1 },
//   { name: "sturgeon", category: "seafood", price: 50 },
// ];

// function filterByCategory(arr, categoryObj) {
//   let newArr = [];
//   for (let obj of arr) {
//     if (obj.category === categoryObj) {
//       newArr.push(obj);
//     }
//   }
//   return newArr;
// }

// const result = filterByCategory(productsArr, "flour");
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No12 | напишите функцию getTotalPages,
//которая принимает объект с информацией о книге (название и количество страниц)
//и возвращает общее количество страниц в книге, если она состоит из нескольких частей.
// const singleVolumeBook = { name: "Старик и море", pages: 200 };
// const multiVolumeBook = {
//   name: "Война и мир",
//   parts: [{ pages: 500 }, { pages: 1000 }, { pages: 800 }],
// };

// function getTotalPages(book) {
//   let totalPages = 0;
//   if (book.parts) {
//     for (let i = 0; i < book.parts.length; i += 1) {
//       totalPages += book.parts[i].pages;
//     }
//   } else {
//     totalPages = book.pages;
//   }
//   return totalPages;
// }

// const result = getTotalPages(multiVolumeBook);

// console.log(result);
