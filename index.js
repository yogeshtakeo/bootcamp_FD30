// Javascript

console.log("Hello World");

// Variables

// let a = 10;

// a = "Kabina ";

// const name = "Yogesh";

// name = "sandesh";

// console.log(name);
let nameVar = "unique";

// function changeName() {
//   nameVar = "sandesh";
//   a = 15;
// }

// const changeName = () => {
//   nameVar = "Ashma";
//   a = 9;
// };

const changeName = function (name, width) {};

changeName();
console.log(nameVar);

// Ternary Operators

// let a = 15;
// let b = 12;
// let c = 15;

// in conditional if else

// if (a < b) {
//   console.log("a is less than b");
// } else {
//   console.log("a is greater than b");
// }

//  in ternary operator

// a < b ? console.log("a is less than b") : console.log("a is greater than b");

// const greater_number_between_a_and_b = a < b ? b : a;

// console.log(greater_number_between_a_and_b);

const ten = 10;
const eleven = 11;
const twelve = 12;

const greaterNumber2 = eleven > twelve ? eleven : twelve;

const greater_number1 = eleven > ten ? eleven : ten;

const actual_greater_number =
  greaterNumber2 > greater_number1 ? greaterNumber2 : greater_number1;

const nested_comparision =
  ten > eleven ? ten : eleven > twelve ? eleven : twelve;

console.log(actual_greater_number);
console.log(nested_comparision);

//   multiple conditions
let a = 15;
let b = 12;
let c = 13;

// if (a > b && a > c) {
//   console.log(" a is the gretest", a);
// } else {
//   if (b > c) {
//     console.log(" b is the gretest", b);
//   } else {
//     console.log(" c is the gretest", b);
//   }
// }

const compareWithA = (a > b && a > c) ? a : "a is not greater";

console.log(compareWithA);
