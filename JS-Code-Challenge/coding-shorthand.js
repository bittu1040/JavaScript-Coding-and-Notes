// 1. Ternary Operator
let a = 10;
let b = 5;
const message = (a > b) ? "a is greater" : "b is greater";
console.log(message);  // a is greater

// 2. Object Destructuring
const person= {myName:"Bittu", age: 23};
const {myName, age} = person;
console.log(myName, age)  // Bittu 23

// 3. Array destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second]= arr;
console.log(first, second) // 1 2


// 4. Option chaining ( ? ) 
// Safely access nested object properties without checking for null or undefined.
const user= {profile: {name: "Bittu", age: 23}};
const myName1 = user?.profile?.name;
console.log(myName1)  // Bittu

// 5. Nullish coalescing operator ( ?? )
// Provides a default value if the left-hand operand is null or undefined.
const myName2 = user?.profile?.name ?? "Guest";
console.log(myName2)  // Bittu 

let test;
console.log(test??"tetette")