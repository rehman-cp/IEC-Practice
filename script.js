let myName = "Abdur Rehman";
const myAge = 60;
// const myKid = "18";
let hasPerformedUmraah;
// myAge = 23;
console.log(hasPerformedUmraah);
const a = 10;
// const b = 20;
// const c = a % b;
// console.log(26 % 3); // 20 * 20

if (myName !== "Abdur Rehman") {
  console.log("AB");
} // && and both cond
// || only 1
if (myAge >= 18 || myAge <= 60) {
  console.log("you can open account");
} else {
  console.log("you can not open account");
}

switch (myAge) {
  //if
  case myAge >= 18:
    console.log("you r in switch case");
    break;
  case 60:
    console.log("you r in switch case 2");
    break;
  //else
  default:
    console.log("default case");
    break;
}

//this loop will run from 0 till 15
for (let i = 10; i <= 15; i++) {
  console.log(myName + i);
}

function printMyName(a, b) {
  console.log(a, b);
  return "My Name is" + b;
}

function sayHello() {
  console.log("Hello");
}

function sum(a, b) {
  //   console.log(a, b);
  let c = a + b;
  return c;
}

// const valueFromFunc = sum(12, 10);
const result = printMyName(24, "AB", "KHI");
sayHello();

//Array
const arr = [
  1,
  2,
  "AB",
  true,
  {
    name: "EBAD",
  },
];

arr.push("IEC");
arr.push("IEC");

arr[0] = "zero index";

arr.pop();

console.log(arr[4].name);

//Object
const myObj = {
  name: "AB",
  uni: "NED",
  age: 24,
  hasPerformedUmraah: false,
};

myObj.class = {};
myObj.arr = [];
myObj.name = "IEC";

console.log(myObj);

const numbers = [19, 22, 33, 4, 55, 66, 77, 8, 9, 45, 12, 56, 78];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 18) {
    console.log(numbers[i]);
  }
}
