// prototype pattern
// The Prototype Pattern is a design pattern in JavaScript that allows objects to inherit properties and methods from other objects, known as prototypes. 
// It promotes code reuse and helps conserve memory by allowing objects to share common properties and methods through inheritance.


// We will see two example:  
// 1. using simple object   

var person = {
    greet: function() {
        return "Hello, my name is " + this.name;
    }
};
var person1 = Object.create(person);
person1.name = "Bittu";

var person2 = Object.create(person);
person2.name = "Rajesh";

console.log(person1.greet()); // Hello, my name is Bittu
console.log(person2.greet()); // Hello, my name is Rajesh


//2. using constructor function 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Car.prototype.displayInfo = function() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
};

var car1 = new Car("Toyota", "Camry", 2020);
var car2 = new Car("Honda", "Civic", 2018);

console.log(car1.displayInfo()); // This is a 2020 Toyota Camry.
console.log(car2.displayInfo()); // This is a 2018 Honda Civic.

