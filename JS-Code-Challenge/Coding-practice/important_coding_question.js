// 1. Merge Two Objects: 
/* 
     Write a function that takes two objects and returns a new object with combined key-value pairs. 
     If the same key exists in both objects, the value from the second object should overwrite the first. 
*/


const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };

// way 1
function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key]
    }
    return obj1;
}

// console.log(mergeObjects(obj1, obj2));

// way 2
function mergeObjects1(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

// console.log(mergeObjects1(obj1, obj2));

// way 3
function mergeObjects3(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}

// console.log(mergeObjects3(obj1, obj2));






// 2 Transform Array of Objects: 

/*
     Given an array of objects, return an object where keys are derived from one of the object properties, 
     and values are arrays of objects.
     Example: Convert [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] into { 1: { name: 'A' }, 2: { name: 'B' } }
*/

let arr1 = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

// way 1
function transformArrayOfObject(arr) {
    let obj = {}
    for (const element of arr) {
        obj[element.id] = { name: element.name }
    }
    return obj;
}

// console.log(transformArrayOfObject(arr1));

// way 2 using reduce 

function transformArrayOfObject1(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = { name: item.name }
        return acc;
    }, {})
}

// console.log(transformArrayOfObject1(arr1));



// 3 Convert Array of Strings to Object Format: 
/*
    Given an array of strings like ["apple", "banana", "cherry"], 
    convert it into an object where each element is a key with a default value.
    Example: { "apple": 0, "banana": 0, "cherry": 0 }
*/

let arr2 = ["apple", "banana", "cherry"];

// way 1
function arrayToObject(arr) {
    let res = {}
    for (const element of arr) {
        res[element] = 0
    }
    return res;
}

// console.log(arrayToObject(arr2));


// way 2

function arrayToObject1(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = 0
        return acc;
    }, {})
}

// console.log(arrayToObject1(arr2));


// 4. Array Mapping: 
/*
    Write a function to take an array of numbers and return an array of squared values.
*/

let arr3= [1,2,3,4,5];
function arrayMap(arr){
    return arr.map((data)=>{
        return data*data;
    })
}
console.log(arrayMap(arr3));