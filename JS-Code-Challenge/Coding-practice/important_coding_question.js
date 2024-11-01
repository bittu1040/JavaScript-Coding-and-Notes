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
    return {...obj1, ...obj2}
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

let arr1= [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

// way 1
function transformArrayOfObject(arr){
    let obj={}
    for (const element of arr) {
        obj[element.id]= {name:element.name}
    }
    return obj;
}

// console.log(transformArrayOfObject(arr1));

// way 2 using reduce 

function transformArrayOfObject1(arr){
    return arr.reduce((acc,item)=>{
        acc[item.id]= {name: item.name}
        return acc;
    }, {})
}

// console.log(transformArrayOfObject1(arr1));



// 3. 


