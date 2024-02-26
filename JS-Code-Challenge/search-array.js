// we will see different way to search an array

// filter, find, includes, indexOf

// filter
// It return all number matching the condition
// It is not change the original array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1= arr.filter((data)=>{
    return data>5
});
console.log(arr1); // [ 6, 7, 8, 9, 10 ]
console.log(arr);


// find 
// It return the first matching number
// It is not change the original array
let arr2= arr.find((data)=>{
    return data>5
});
console.log(arr2); // 6
console.log(arr)

// includes
// It return true or false
// It is not change the original array
let arr3= arr.includes(5);
console.log(arr3); // true
console.log(arr)


// indexOf
// It return the index
// It is not change the original array
let arr4= arr.indexOf(5);
console.log(arr4);  // 4
console.log(arr)
