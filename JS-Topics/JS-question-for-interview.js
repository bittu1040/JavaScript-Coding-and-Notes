// We will cover the following topics
/*
1. Hoisting
2. SetTimeOut
3. Closure
4. Promise
5. Currying
*/

// Hoisting in JavaScript is a process in which the variable and function declarations are moved to the top of their scope before code execution.

// example 1
/*
function1();
function2();
var function1 = ()=>{
    console.log("function 1")
}

function function2(){
    console.log("Function 2")
}
*/


// example 2

/*
var rate= 10;
function getRate(){
    if(rate== undefined){
        var rate= 6;
        return rate;
    }
    else{
        return 10;
    } 
}
console.log(getRate());
*/


// SetTimeOut in JavaScript
// setTimeout is used to execute a function once after a specified time.

// example 3
/*

(function(){
    console.log("Hello");
    setTimeout(() => {
        console.log(2);
    }, 1000);
    setTimeout(() => {
        console.log(3)
    }, 0);
    console.log(4);
})();

*/

//closure in JS
// A closure is a function having access to the parent scope, even after the parent function has closed.
 
//example 4
/*
function test(){
    for(var i=0;i<3;i++){
        setTimeout(() => {
            console.log(i);
        }, i* 1000);
    }
}

test();
*/






// example 5 with self invocation function-- run this function in node and browser enviroment
// explain this question
/*
function test1(){
    for(var i=0;i<3;i++){
        setTimeout((function() {
            console.log(i);
        })(), i* 1000);
    }
}

test1();
*/


/*
Guess output for below 3 example
// Example 1
var rate= 10;
function getRate(){
 console.log("rate",rate)   // output ??
 if(rate== undefined){
 var rate= 6;
 return rate;
 }
 else{
 return 10;
 } 
}
console.log("function call ",getRate());  // output ??


// Example 2 (replace var with let )
let rate= 10;
function getRate(){
 console.log("rate",rate) // output ??
 if(rate== undefined){
 let rate= 6;
 return rate;
 }
 else{
 return 10;
 } 
}
console.log("function call ",getRate());  // output ??


// Example 3
var rate= 10;
function getRate(){
 console.log("rate",rate)  // output ??
 return rate;
}
console.log("function call ",getRate());  // output ??

*/





/*  Example  explaining many things together about this keyword, arrow function, normal function, call )
var age = 20;

var person = {
    age: 25,
    city: "Blr",
    displayAge: function() {
        console.log(this);
        console.log("age:", this.age);
        console.log("city:", this.city);
    },
    nestedObject: {
        age: 40,
        city: "Pune",
        displayAge: function() {
            console.log(this);
            console.log("age:", this.age);
            console.log("city:", this.city);
        }
    },
    arrowMethod: {
        age: 50,
        city: "Mumbai",
        displayAge: () => {
            console.log(this);  // arrow functions do not have their own `this`
            console.log("age:", this.age);  // this.age here refers to the global scope `age`
        }
    }
}

person.displayAge(); 
person.nestedObject.displayAge(); 
person.arrowMethod.displayAge(); 

var anotherPerson = { age: 30, city: "Delhi" };

person.displayAge.call(anotherPerson);  // `this` refers to anotherPerson

// Using call with an arrow function has no effect since arrow functions do not bind `this`
person.arrowMethod.displayAge.call(anotherPerson);  // `this` is still the global scope due to arrow function

*/
