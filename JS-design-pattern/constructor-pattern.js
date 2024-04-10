// The constructor pattern is a creational design pattern used in JavaScript to create new object with similar properties and methods. 
// It involves defining a constructor function and then creating objects of similar type by calling the constructor function with new keyword.


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

person1.sayHello();
person2.sayHello();