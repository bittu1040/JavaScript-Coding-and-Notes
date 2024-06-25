// javascript shortcut which will be helpful

// short circuiting
// ternary operator
// nullish coalescing operator
// optional chaining

// short circuiting
// It refers to the evaluation of logical operator && (AND) and || (OR) where the evaluation of the entire expression stops as soon as the result comes. 
// It solely on the first operand and evaluates from left to right.

// as per And operator: If any one of the operand is false then the result is false
// as per Or operator: If any one of the operand is true then the result is true

let isSwitchOn = true;
let hasBulb ="Yes";
let isLightOn = isSwitchOn && hasBulb;
console.log(isLightOn);  // "Yes"

let age = 18;
let allowedAccess = age >= 13 && age <= 65;
console.log(allowedAccess); // true


let username = "admin";
let password = "secret";
let loginSuccess = username === "admin" && password === "secret";
console.log(loginSuccess); // true


const a = 0 && 5; 
console.log(a);      // 0
const b = 40 && 5; 
console.log(b);      // 5

const c = 0 || 5; 
console.log(c)       // 5
const d = 4 || 5;
console.log(d);      // 4

const userInput= "";
const defaultValue = "Bittu";
const input= userInput || defaultValue;
console.log(input)