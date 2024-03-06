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
