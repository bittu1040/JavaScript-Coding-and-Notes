// coercion

// Coercion is an automatic type conversion that occurs in JavaScript when you want to perform certain operations.
// Type conversion can either be implicit (automatically done during code execution) or explicit (done by you the developer).

const sum = 35 + "hello"
console.log(sum); // Output: "35hello"  --> numeric to string coercion 


const a = "hello" + 22 + 5
console.log(a) //  Output: hello225
// step1: "hello" + 22 = "hello22" (22 gets converted to string)
// step2: "hello22" + 5 = "hello225" (then 5 gets converted to string)

const b =  22 + 5 + "hello" 
console.log(b) //  Output: 27hello 
//step1: 22 + 5 = 27 (no coercion since same datatype) 
//step2: 27 + "hello" = "27hello" (27 gets converted to string)



