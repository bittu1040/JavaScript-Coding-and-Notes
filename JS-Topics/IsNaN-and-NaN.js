/*
🚀 NaN can never be equal to anything even itself. 

NaN often confused developers, lets make short note on it, 
📌 NaN Property represents "Not a Number".  It indicates a value that is not a legal number.

Use isNaN() method to check for NaN:
📌isNaN() returns true when the value is "Not a Number".
📌isNaN() returns false when the value is a valid number.
*/


console.log(parseInt("Bittu"));   // NaN
console.log(10/"ABC");            // NaN
console.log(typeof NaN);          // number
console.log(NaN== NaN);           // false
console.log(isNaN(NaN))           // true

let userInput = "abc123";
let parsedNumber = parseInt(userInput);
if (isNaN(parsedNumber)) {       // true as it doesn't parse into integer
    console.log("Invalid input. Please enter a valid number.");  
} else {
    console.log("Parsed number:", parsedNumber);
}