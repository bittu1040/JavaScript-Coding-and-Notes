slice : 
/*
array.slice(startIndex, endIndex);    both index are optional and endIndex is not included
It does not modify original array
It return a shallow copy of a portion of an array into a new array object

splice :
This method is used for making modifications to the original array by adding, removing, or replacing elements
array.splice(startIndex, deleteCount, item1, item2, ...);

*/


let arr1= [1,2,3,4,5];
let arr2= arr1.slice(2,3)
// console.log(arr1) // [ 1, 2, 3, 4, 5 ]
// console.log(arr2) // [ 3 ]

let arr3= [1,2,3,4,5,6]
let arr4= arr3.splice(1,1,10,20)
// console.log(arr3)  // [ 1, 10, 20, 3, 4, 5, 6 ]
// console.log(arr4) //  [ 2 ]