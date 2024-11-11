For dedicated programmers looking to learn javascript.
All the the core concepts of JavaScript can be found here 
with coding challenges to solidify your knowledge.

Best of luck on your coding journey ; ) 

#### improvement contributions are appreciated.
##### I am sharing here some important questions below for practice:  
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
