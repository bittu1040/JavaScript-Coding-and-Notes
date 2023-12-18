// call() is one of the ways to control the value of `this` within a function at the time of invocation. 
// It's particularly useful when you want to borrow functionality from another object, set the context for a function


/*
In JavaScript, the call, apply, and bind methods are used to call a function and set the "this" value inside that function.   ( argument to be passed in this is optional )
call  (thisValue, arg1, arg2, ... ) : This method calls the function and sets the "this" value for the function.
apply (thisValue, argArray): It is similar to call(), but it accepts arguments as an array. It executes a function, setting the `this` value and accepting arguments as an array.
bind(thisValue, arg1, arg2, ...) It is a method that creates a new function, binding the provided object as the this context. To consume this we need to call it later. 
*/ 


function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

person1 = {
    firstName: "Rajeev",
    lastName: "Modi"
}

const p1 = new Person("Bittu", "Kumar");

console.log(p1.getFullName.call(person1))

const p2 = p1.getFullName.bind(person1)
console.log(p2());
console.log(p1.getFullName());


// understand with this example

function Car(company, fuelType) {
    this.company = company;
    this.fuelType = fuelType;

    this.cardetails = function (color, price) {
        return this.company + " " + this.fuelType + " " + color + " " +  price;
    }
}

const car1 = new Car("maruti", "petrol")
const car2 = { company: "hyundai", fuelType: "diesel" }


console.log("car details using call", car1.cardetails.call(car2, "red", "5000"));

console.log("car details using apply", car1.cardetails.apply(car2, ["blue", "6000"]));

const car3Bind= car1.cardetails.bind(car2, "yellow", "7000");

console.log("car details using bind",car3Bind());


// car details using call hyundai diesel red 5000
// car details using apply hyundai diesel blue 6000
// car3 bind hyundai diesel yellow 7000
