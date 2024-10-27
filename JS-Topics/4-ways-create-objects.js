// 1. Object Literal Syntax:
const person = { firstName: "Bittu", lastName: "Kumar", age: 30 };


// 2. Constructor Function
function Person(fname, lname) {
    this.firstname= fname;
    this.lastname= lname;
}
const person1= new Person("Bittu", "Kumar")
console.log(person1) // {firstname: 'Bittu', lastname: 'Kumar'}


// 3. Class based syntax
class Person{
    constructor(fname, lname){
        this.firstname= fname;
        this.lastname= lname;
    }
}
const person2= new Person("Bittu", "Kumar")
console.log(person2) // {firstname: 'Bittu', lastname: 'Kumar'}



// 4. Object.create()
const personPrototype = {
    name:"Rahul",
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
    
    const person4 = Object.create(personPrototype);
    person4.name="Bittu"
    console.log(person4) // {name: 'Bittu'},  
    //                   greet will be accessible inside prototype 
     