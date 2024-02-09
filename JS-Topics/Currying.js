// currying
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
// It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).


/*
Currying in JavaScript is a functional programming technique where a function with multiple arguments 
is transformed into a sequence of nested functions, each taking a single argument. 

*/


//  Closure helps to transform our normal function into currying function. 


function addTwoNumber(a,b){
    return a+b;
}

console.log(addTwoNumber(2,3))


let add = function(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

// let addbytwo = add(2)
// addbytwo(3)

console.log(add(2)(4)(6));


const getlunch = (ingredient1) =>{
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`; 
        } 
    } 
} 
console.log(getlunch('rice')('curd')('dal'));