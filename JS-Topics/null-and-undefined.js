// null and undefined
// both are used to check absence of value but with slightly difference. 

// undefined
// 1. If we declare any variable and nothing assigned
// 2. If function doesn't return anything
// 3. If we try to access any property from object and that is not available


var a
console.log(a)

var obj= {}
console.log(obj.a)

function test(){

}

console.log(test())

// null is typically used when you want to explicitly indicate the absence of a value.

var b=null;
console.log(b);