For dedicated programmers looking to learn javascript.
All the the core concepts of JavaScript can be found here 
with coding challenges to solidify your knowledge.

"[Get only questions here ](Coding_questions_for_practice.md)"  </br>

Best of luck on your coding journey ; ) 

#### improvement contributions are appreciated.
##### I am sharing here some important questions and solution below for practice:  
---


### 1. Merge Two Objects in JavaScript

Write a function that takes two objects and returns a new object with combined key-value pairs. If both objects contain the same key, the value from the second object should overwrite the value in the first object.

#### Example

Given two objects:

```javascript
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };
```

The merged output should be:

```javascript
{ a: 1, b: 2, c: 4, d: 5 }
```

#### Solution

##### Way 1: Using a `for...in` Loop

```javascript
function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}

const mergedResult1 = mergeObjects(obj1, obj2);
console.log(mergedResult1); // Output: { a: 1, b: 2, c: 4, d: 5 }
```

##### Way 2: Using the Spread Operator

```javascript
function mergeObjects1(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const mergedResult2 = mergeObjects1(obj1, obj2);
console.log(mergedResult2); // Output: { a: 1, b: 2, c: 4, d: 5 }
```

##### Way 3: Using the Object.assign

```javascript
function mergeObjects3(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}

// console.log(mergeObjects3(obj1, obj2));  // Output: { a: 1, b: 2, c: 4, d: 5 }
```


##

### 2. Transform Array of Objects in JavaScript

Convert an array of objects, where each object contains an `id` and `name` property, into an object where each key is an `id` from the original array, and the corresponding value is an object with the `name` property.

#### Example

**Input**

```javascript
let arr1 = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
```

**Output**

```javascript
{ 1: { name: 'A' }, 2: { name: 'B' } }
```

#### Solution

##### Way 1: Using a `for...of` Loop

```javascript
function transformArrayOfObject(arr) {
    let obj = {};
    for (const element of arr) {
        obj[element.id] = { name: element.name };
    }
    return obj;
}

console.log(transformArrayOfObject(arr1)); 
// Output: { 1: { name: 'A' }, 2: { name: 'B' } }
```

##### Way 2: Using `Array.prototype.reduce`

```javascript
function transformArrayOfObject1(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = { name: item.name };
        return acc;
    }, {});
}

console.log(transformArrayOfObject1(arr1)); 
// Output: { 1: { name: 'A' }, 2: { name: 'B' }
```


##

### 3. Convert Array of Strings to Object Format in JavaScript

Convert an array of strings, such as `["apple", "banana", "cherry"]`, into an object where each string becomes a key, and each key has a default value of `0`.

#### Example

**Input**

```javascript
let arr2 = ["apple", "banana", "cherry"];
```

**Output**

```javascript
{ "apple": 0, "banana": 0, "cherry": 0 }
```

#### Solution

##### Way 1: Using a `for...of` Loop

```javascript
function arrayToObject(arr) {
    let res = {};
    for (const element of arr) {
        res[element] = 0;
    }
    return res;
}

console.log(arrayToObject(arr2)); 
// Output: { "apple": 0, "banana": 0, "cherry": 0 }
```

##### Way 2: Using `Array.prototype.reduce`

```javascript
function arrayToObject1(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = 0;
        return acc;
    }, {});
}

console.log(arrayToObject1(arr2)); 
// Output: { "apple": 0, "banana": 0, "cherry": 0 }
```

##

### 4. Array Mapping

 Write a function to take an array of numbers and return an array of `squared` values..

#### Example

**Input**

```javascript
let arr3= [1,2,3,4,5];
```

**Output**

```javascript
[ 1, 4, 9, 16, 25 ]
```

#### Solution



```javascript
function arrayMap(arr) {
    return arr.map((data) => {
        return data * data;
    });
}

console.log(arrayMap(arr3)); 
// Output: [1, 4, 9, 16, 25]
```

##

### 5. Group by Property in JavaScript

Given an array of students, group them by their city.

#### Example

**Input**

```javascript
let arr4 = [
    { name: 'A', age: 20, city: 'BLR' },
    { name: 'B', age: 20, city: 'DEL' },
    { name: 'C', age: 21, city: 'BLR' }
];
```

**Output**

```javascript
{
    "BLR": [{ name: 'A', age: 20 }, { name: 'C', age: 21 }],
    "DEL": [{ name: 'B', age: 20 }]
}
```

#### Solution



```javascript
function groupByCategory(arr, property) {
    return arr.reduce((acc, item) => {
        if (!acc[item[property]]) {
            acc[item[property]] = [];
        }
        acc[item[property]].push({ name: item.name, age: item.age });
        return acc;
    }, {});
}

console.log(groupByCategory(arr4, 'city')); 
// Output: { "BLR": [{ name: 'A', age: 20 }, { name: 'C', age: 21 }], "DEL": [{ name: 'B', age: 20 }] }
```

##

### 6.  Find Duplicates in Array

Write a function to identify duplicates in an array and return them as a new array.

#### Example

**Input**

```javascript
let arr5= [1,2,3,1,3,4,2,5];
```

**Output**

```javascript
[ 1, 2, 3 ]
```

#### Solution

##### Way 1: Using `two for loop` Loop
```javascript
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
console.log( findDuplicate(arr5));
```


##### Way 2: Using `hashmap with object`
```javascript
function findDuplicate1(arr){
    let res= {}
    arr.forEach(element => {
        if(!res[element]){
            res[element]= 1;
        }
        else{
            res[element]= res[element]+1;
        }
    });

    return res;
}
```

##

### 7. Count Frequency of Elements

Write a function to count the frequency of each element in an array and return an object:

#### Example

**Input**
```javascript
let arr = [1, 2, 2, 3, 3, 3, 4];
```

**Output**
```javascript
{ '1': 1, '2': 2, '3': 3, '4': 1 }
```

#### Solution

##### Way 1: Using `HashMap`

```javascript
function countFrequency(arr) {
    let frequencyMap = {};
    for (let element of arr) {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }
    return frequencyMap;
}

let arr = [1, 2, 2, 3, 3, 3, 4];
console.log(countFrequency(arr)); 
```

##

### 8. Longest String in Array

Write a function to find and return the first occurrence of the longest string in an array of strings.

#### Example

**Input**
```javascript
const strings = ["apple", "banana", "cherry", "orange", "grape"];
```

**Output**
```javascript
"banana"
```

#### Solution

##### Way 1:

```javascript
function findFirstLongestStr(arr) {
  let longest = ""; 
  for (let data of arr) {
    if (data.length > longest.length) {
      longest = data;
    }
  }
  return longest;
}
```
##### Way 2:
```javascript
function findLongestStr(arr){
	return arr.reduce((acc, data)=>{
  	if(data.length>acc.length){
    	return data;
    }
    else{
    	return acc;
    }
  }, "")
}
```

##


### 9. Write a function to count the number of vowels in a string.



#### Example

Given two objects:

```javascript
const str = "Bittu bittu"
```

Output

```javascript
4   // ('i', 'u', 'i', 'u')
```

#### Solution

##### Way 1: Using a for...of Loop

```javascript
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if ("aeiou".includes(char.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(str)); // Output: 4
```

##### Way 2: Using reduce

```javascript
function countVowels(str) {
    return str.split("").reduce((count, char) => {
        if ("aeiou".includes(char.toLowerCase())) {
            count++;
        }
        return count;
    }, 0);
}

console.log(countVowels(str)); // Output: 4
```

##

### 10. Implement a function to flatten a nested array.
We can solve this in different way ( for..of, reduce, flat, flatMap) 

#### Example

```javascript
let arr = [1, [2, [3, 4, 5]]]
```

Output

```javascript
[1, 2, 3, 4, 5]
```

#### Solution

##### Way 1: Using a for...of Loop

```javascript
function flattenArr(arr) {
  let res = []
  for (let data of arr) {
    if (Array.isArray(data)) {
      let flatData = flattenArr(data)
      res.push(...flatData)
    } else {
      res.push(data)
    }
  }
  return res
}

console.log(flattenArr(arr))  // [1, 2, 3, 4, 5]
```

##### Way 2: Using reduce

```javascript
function flattenArr(arr){
  return arr.reduce((acc, data)=>{
    if(Array.isArray(data)){
      return acc.concat(flattenArr(data));
    }
    else{
    return acc.concat(data)
    }
  }, [])
}

console.log(flattenArr(arr))  // [1, 2, 3, 4, 5]
```

##### Way 3: Using reduce

```javascript
console.log(arr.flat(Infinity))  // [1, 2, 3, 4, 5]
```

##

### 11. Combine Arrays Without Duplicates

 Write a function that merges two arrays into one, ensuring there are no duplicate values.


#### Example

```javascript
mergeArrays([1, 2, 3], [2, 3, 4])
```
should return 

```javascript
[1, 2, 3, 4]
```

#### Solution



```javascript
let arr1= [1,2,3];
let arr2= [2,3,4];

function mergeArrays(arr1, arr2){
  return [...new Set(arr1.concat(arr2))]
}

console.log(mergeArrays(arr1, arr2))
```

##
