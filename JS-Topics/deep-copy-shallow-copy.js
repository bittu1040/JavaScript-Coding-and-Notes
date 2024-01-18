/*
Deep copy and Shallow copy in JavaScript:

deep copy and shallow copy becomes useful when dealing with nested structures, 
such as arrays of objects, objects containing other objects, or arrays with nested arrays. 

Shallow copy: 
A shallow copy creates a new object and copy references to the nested structures. 
Changes to the nested structures are reflected in both the original and the copy.

Deep copy: 
A deep copy creates a new object that has its own values, independent of the original object, including nested structures. 
Changes in the copy do not affect the original and vice versa. 

*/


// Original array with nested values
let arr1 = [10, 20, { nestedKey: 30 }, 40];

// Shallow copy of 'arr1'
let arr2 = Object.assign([], arr1);

// Modify 'arr2', 'arr1' affected
arr2[2].nestedKey = 11;

console.log("\nShallow Copy - Array with Nested Values:");
console.log(arr1[2].nestedKey);    // 11
console.log(arr2[2].nestedKey);   // 11


// Original object with nested values
let obj1 = { name: "bittu", details: { city: "blr" } };

// Shallow copy of 'obj1'
let obj2 = Object.assign({}, obj1);

// Modify 'obj2', 'obj1' affected
obj2.details.age = 24;

console.log("Shallow Copy - Object with Nested Values:");
console.log(obj1.details.age);   // 24
console.log(obj2.details.age);   // 24

// Original array of objects with nested values
let students = [
  { id: 1, name: 'abc', details: { age: 23 } },
  { id: 2, name: 'def', details: { age: 24 } },
  { id: 3, name: 'ghi', details: { age: 25 } }
];

// Deep copy of 'students'
let studentsCopy = JSON.parse(JSON.stringify(students));

// Modify 'studentsCopy', 'students' remains unaffected
studentsCopy[1].details.age = 30;

console.log("\nDeep Copy - Array of Objects with Nested Values:");
console.log(students[1].details.age); // 24
console.log(studentsCopy[1].details.age);  //30

// structuredClone helps to deep clone only supports in latest node (18) and in browser
// let studentsCopy= structuredClone(students)