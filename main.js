var x = 67;
var y = 89;
var z = x + y;

// const name = "John Doe";

// console.log("The sum of x and y is: " + z);
// console.log("Hello, " + name + "! The sum of x and y is: " + z);
// console.log(`The sum of x and y is: ${z}`);

var x = 100;
var w = x + y;
// console.log(x + w);

let a = 10;
let b = 20;
let c = a + b;
// console.log(`The sum of a and b is: ${c}`);

a = 45;
b = 55;
c = a + b;
const Name = "Feranmi";
// console.log(`The new sum of a and b is: ${c}`);

const r = 75;
const q = 34;
const s = r + q;
// console.log(`The sum of r and q is: ${s}`);

const t = 54;
const T = 50;

a = 2;
b = 6;
c = a + b;
// console.log("the sum of a and b is:");

const car = ["Toyota", "Lexus", "Hyundai", "Hiace"];
car.length;

const user = {
  id: 1,
  first_name: "Adebanjo",
  last_name: "Adeniji",
  isStudent: true,
  portfolio: ["frontend", "WordPress"],
};
console.log(
  `My name is ${user.first_name} ${user.last_name}. The name of my car is ${car[0]}`
);

const userName = prompt("Enter your name");
const isStudent = prompt("Are you a current student?");

if (userName === user.first_name || isStudent === "Yes") {
  alert(`Welcome to class ${userName}`);
} else {
  alert("Incorrect name, please try again");
}

const validate = `${userName} is in the class today!`;

document.getElementById("identity").innerHTML = validate;
