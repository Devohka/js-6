 const balance = 12390;
 let message = "Поповніть рахунок";
 if (balance > 0) {
     message = "Позитивний баланс 1";
     console.log(message);
 } else {
     message = "Поповніть рахунок 1";
}
 
 if (balance > 0) {
   message = "Позитивний баланс 2";
   console.log(message);
 } else {
   message = "Поповніть рахунок 2";
 }
console.log(message);
 

// let nameHis = prompt("Яка “офіційна” назва JavaScript?");
// const correctly = "ECMAScript";
// if (nameHis === correctly) {
//   nameHis = alert("Правильно!");
// } else {
//   nameHis = alert("Ви не знаєте? ECMAScript");
// }

const isOnline = false;
const isFriend = true;
const isDnd = false;
let final = "";
if (isFriend === true && isOnline === true && isDnd === false) {
    final = "Можна";
} else {
    final = "Не можна";
}
console.log(final);

const x1 = 10;
const x2 = 30;
const number = 45; 
let segment = "";
if (x1 < number && x2 > number) {
    segment = "Входить у відрізок";
} else if (x1 > number || x2 < number) {
    segment = "Вихідні дані";
}
console.log(segment);

const subscribe = "free";
let icenAccessContent = "";
if (subscribe === "pro" || subscribe === "vip") {
    icenAccessContent = "Ви можите отримати доступ";
} else {
    icenAccessContent = "Ви не можите отримати доступ ваш рівень підписки за малий";
}
console.log(icenAccessContent);

// let number1 = prompt("Ведіть число яке потрапить в діапазон");
// if (number1 === 55 || number1 > 55 && number1 < 99) {
//     number1 = prompt("Число потрапляє в діапазон");
// } else {
//     number1 = prompt("Число не потрапляє в діапазон");
// }

// const myAge = 101;
// let group = "";
// if (myAge < 16 || myAge === 16 || myAge === 0) {
//     group = alert("Ви дитина (0-16)");
    
// } else if (myAge < 17 || myAge < 60 || myAge === 17 || myAge === 60) {
//   group = alert("Ви дорослий (17-60)");
// } else if (myAge > 60 || myAge === 61 || myAge === 100) {
//   group = alert("Ви пеціонер(61-100)");
// }

let myNume = "Andriy"
myNume = myNume.length;
let mySurname = "Fedak";
let math = "";
mySurname = mySurname.length;
if (myNume > 4 && mySurname > 5) {
    math = myNume + mySurname;
} else {
    math = "ОЙ, неможливо виконати умову"; 
}
console.log(math);

let result;
const a = 3;
const b = 1;
result = a + b < 4 ? "Нижче" : "Вище";
// if (a + b < 4) {
//   result = "Нижче";
// } else {
//   result = "Вище";
// }
console.log(result);

if ("0") {
  console.log("Привіт");
}