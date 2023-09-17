let myName = "Abdur Rehman";
const myAge = 60;
// const myKid = "18";
let hasPerformedUmraah = false;
myAge = 23;

// const a = 10;
// const b = 20;
// const c = a % b;
// console.log(26 % 3); // 20 * 20

if (myName !== "Abdur Rehman") {
  console.log("not AB");
}
if (myAge >= 18 && myAge <= 60) {
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
for (let i = 0; i <= 15; i++) {
  console.log(myName + i);
}

function printMyName(a, b) {
  console.log(a, b);
  return "My Name is" + b;
}

function sum(a, b) {
  //   console.log(a, b);
  let c = a + b;
  return c;
}

// const valueFromFunc = sum(12, 10);
const result = printMyName(24, "AB", "KHI");
console.log(result);
