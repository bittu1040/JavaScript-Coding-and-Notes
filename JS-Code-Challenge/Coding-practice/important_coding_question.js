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
// console.log(arrayMap(arr3));


// 5. Group by Property: 
/*
   Given an array of objects, group them by a specified property.
   Example: Group students by city, so 
   [{name: 'A', age: 20, city: 'BLR'}, {name: 'B', age: 20, city: 'DEL'}, {name: 'C', age: 21, city: 'BLR'}] 
   
   becomes 
   { "BLR": [{name: 'A', age: 20}, {name: 'C', age: 21}], "DEL": [{name: 'B', age: 20}] }.

*/

let arr4=  [{name: 'A', age: 20, city: 'BLR'}, {name: 'B', age: 20, city: 'DEL'}, {name: 'C', age: 21, city: 'BLR'}] ;

function groupByCategory(arr, property){
    return arr.reduce((acc, item)=>{
        if(!acc[item[property]]){
            acc[item[property]]=[];
        }
        acc[item[property]].push(item)
        return acc;
    }, {})
}

// console.log(groupByCategory(arr4, 'city'));


// 6. Find Duplicates in Array: 
/*
   Write a function to identify duplicates in an array and return them as a new array.
*/

let arr5= [1,2,3,1,3,4,2,5];
function findDuplicate(arr){
    let res=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                res.push(arr[i]);
            }
        }
    }
    return res;
}
// console.log( findDuplicate(arr5));


let arr6= [1,2,3,1,3,4,2,5];
function findDuplicate1(arr) {
    let res = {};
    let duplicates = [];

    arr.forEach(element => {
        res[element] = (res[element] || 0) + 1;
    });

    for (let key in res) {
        if (res[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}

// console.log(findDuplicate1(arr6));


// 7. Write a function to count the frequency of each element from given array and return an object with each element and its count.
let arr7 = [1, 2, 3, 1, 3, 4, 2, 5, 5, 4]

function countFrequency(arr){
	let count= {};
  for(let data of arr){
  	if(!count[data]){
    	count[data]=0;
    }
  	count[data]=count[data]+1
  }
  return count;
}

console.log(countFrequency(arr7));


// 8. Write a function to find and return the longest string in an array of strings.
let arr8= ["bittu", "ajay", "sachin"];

function longestStr(arr){
	let longest= arr[0];
  for(let str of arr){
  	if(str.length>longest.length){
    	longest= str
    }
  }
  
  return longest
}

console.log(longestStr(arr))

// 9. Write a function to count the number of vowels in a string.
// 10.  Write a function to flatten a nested array.
