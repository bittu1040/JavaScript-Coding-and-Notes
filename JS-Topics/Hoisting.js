// Hoisting

/* Variables and function declarations are moved to the top of their scope before code execution.
   Variables can be declared after they are used.
   Remember : only declaration is hoisted not initialization.
*/

// we can access function before it is declared. 
/*
test()
function test(){
    console.log("bbb")
}

test()

console.log(a);
var a;

*/


// question 1:


console.log(b1);
console.log(a1);


var a1= 10;
let b1;