// closure in JS
// Function along with its lexical scope bundled together forms a closure. 
// Closure is a combination of a function bundled together with its surrounding state. (lexical environment)
// A closure gives you access to an outer function's scope from an inner function.  (this means inner function will have access to outer function's scope)

function x() {
    var a = 8;
    var a = 100;
    return function y() {
        console.log(a);
    }
}
var z = x();   
z();





