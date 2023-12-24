// closure in JS
// Function along with its lexical scope bundled together forms a closure. 
// Closure is a combination of a function bundled together with its surrounding state. (lexical environment)
// A closure gives you access to an outer function's scope from an inner function.  (this means inner function will have access to outer function's scope)


//example 
/*
function x() {
    var a = 8;
    var a = 100;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();   
z();
*/




// example 1 
// change the let and var in for loop and see the result. you will understand the difference between block scope and global scope. 
// let and const is blocked scope, so loop jitna bar chlta hai, every time ek block create hota hai jisme settimeout store rhta hai aur usme i ka value store rhta hai. 
// var keyword jb hm use krte hain, wo block scope nhi hota hai, is time i ka value global scope me update hota jata hai, isliye last me hmko 6 milta hai jhan pe for loop stop hota hai. 

function y() {
    for(let i=1; i<=5; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
    console.log("bittu")
}

y();





