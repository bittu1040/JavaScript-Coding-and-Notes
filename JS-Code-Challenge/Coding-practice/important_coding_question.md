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

