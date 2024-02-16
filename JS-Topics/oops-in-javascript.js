

// encaptulation
/*
Data Hiding / Encapsulation in JavaScript. 
Data Hiding/Encapsulation in JavaScript can be easily achieved by the help of Closure. 
Encapsulation is a fundamental concept of Object oriented programming.
This helps us to hide internal details of object from other objects. 
JavaScript uses closures to implement encapsulation, which allows developers to create private variables and methods that cannot be accessed from outside the object. 
*/

// example 1
// we can't access count variable from outside, 
/*
function counter(){
    let count=0;
    return function(){
        return count++;
    }
  }
  
  let count= counter()
  console.log(count())
  console.log(count())
  
  
  // example 2
  function personDetails(name, age){
      let privateAge= age;
    
    this.name= name;
    this.getAge= function(){
            return privateAge;
    } 
  }
  let person1= new personDetails("Bittu", 22);
  console.log(person1.getAge())

*/
// inheritance :
// Inheritance in JavaScript is a fundamental concept of Object oriented programming. 
// child class can inherit all the functionalities of the parent's class
// this allows code reusability

// inheritance can be achieved in two ways:
// class based and prototype based. 


// class based inheritance

/*
class Car{
    constructor(name, brand, color){
        this.name= name;
        this.brand= brand;
        this.color= color;
    }
    getCarDetails(){
        return this.name + " " + this.brand + " " + this.color
    }
    start(){
        return "car is started";
    }
}

let car1= new Car("800", "maruti", "red" )
console.log(car1);


class electricCar extends Car{
    constructor( name, brand, color, batteryCapacity){
        super(name, brand, color)
        this.batteryCapacity= batteryCapacity;
    }
}

let car2= new electricCar("Nexon","Tata","Blue","100AH")

Car.prototype.testMethod= function(){   // custom method added in prototype which is available to all the instances
    return "test method"
}

console.log(car2.testMethod());
console.log(car1.testMethod());
*/


/*
function Car(name, brand, color){
    this.name= name;
    this.brand= brand;
    this.color= color;
}

Car.prototype.start= function(){
    return "car is started"
}


let car1= new Car("800", "maruti", "red" )

Car.prototype.start= function(){
    return "car is started ........"
}

console.log(car1.start());

console.log(car1.name)

*/



// abstraction
// Abstraction involves hiding the complexity of the implementation and showing only the necessary features of an object. 
// It allows programmers to focus on the essential aspects of an object while hiding the irrelevant details.
// In JavaScript, abstraction can be achieved through encapsulation

// To remember this: we can take example of car- we only know to drive, we don't know how car is running. 
// and me also dont want to know how this car drive is happening behind the scene. 

// Lets see the example with the same car:


/*
class Car{
    constructor(name, brand, color){
        this.name= name;
        this.brand= brand;
        this.color= color;
    }
    startCar(){
        console.log(`${this.name}  is started`);
    }
    stop(){
        console.log(`${this.name} is stopped`);
    }
}

let car1= new Car("800", "maruti", "red" )
car1.startCar();
car1.stop();


*/



// polymorphism
// This allows methods to behave differently depending on the specific type of object they are called on.
// Polymorphism allows different objects to respond to the same method or property in his own way.

class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(`Drawing a ${this.name}`);
    }
}

class Circle extends Shape {
    draw() {
        console.log(`Drawing a Circle`);
    }
}


let shape = new Shape("Shape");
let circle = new Circle("nn");

console.log(shape)
console.log(circle)

shape.draw(); 
circle.draw();





