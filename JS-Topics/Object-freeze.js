// Object in JavaScript is mutable by default.
// Object.freeze() is used to freeze an object and make it immutable.

// Once the object is freezed, You can no longer add, delete or modify properties of the object.
// This is helpful when you want to prevent accidental changes to an object.

// Key point to remember.
// 1. Cant add new properties
// 2. Cant delete existing properties
// 3. Cant modify existing properties

let obj= {name: "Bittu", age: 24};

Object.freeze(obj);

// modifying the property
obj.name= "Suraj";
console.log(obj.name);  // Bittu

// adding new property
obj.city= "BLR";
console.log(obj.city); // undefined

// deleting the property
delete obj.age;
console.log(obj.age); // 24

// check if object is freezed
console.log(Object.isFrozen(obj));  // true
