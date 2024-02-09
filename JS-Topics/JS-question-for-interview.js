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