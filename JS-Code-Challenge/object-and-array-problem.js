// 1. sum of all fruits

const fruits = [
    { apple: 4, orange: 7, grape: 3 },
    { guava: 6, lemon: 4, banana: 8 },
    { orange: 5, pineapple: 7, apple: 7 },
];

let fruitSum = {};
fruits.forEach((data) => {
    for (let x in data) {
        if (fruitSum[x]) {
            fruitSum[x] = fruitSum[x] + data[x];
        } else {
            fruitSum[x] = data[x];
        }
    }
});

// console.log(fruitSum)

// 2. reverse each word of sentence

const string1 = "Welcome to javascript guide";

let newString1 = string1.split(" ");

let newString2 = newString1.map((data) => {
    return data.split("").reverse().join("");
});

// console.log(newString2)

// 3. find two numbers which is equal to given target sum;

const arr = [2, 4, 11, 6];

let targetSum = 15;

function findTwoNumber(arr, target) {
    for (const data of arr) {
        var difference = target - data;
        if (arr.includes(difference) && difference !== data) {
            return [data, difference];
        }
    }
    return null;
}

// console.log(findTwoNumber(arr, targetSum));

// 4. find shortest word in list of array

const words = [
    "cat",
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "cot",
];

// let shortestWord= words.sort((a,b)=>{
//     return a.length - b.length
// });
// console.log(shortestWord[0])

function findSmallestWord(arr) {
    return arr.reduce((a, b) => {
        if (a.length < b.length) {
            return a;
        } else {
            return b;
        }
    }, arr[0]);
}
// console.log(findSmallestWord(words));

// 5. separate palindrome number from array;

let arr2 = ["radar", "hello", "level", "world", "madam", "bba", "racecar"];

function findPalindrome(arr) {
    return arr.filter((data) => {
        return data.split("").reverse().join("") == data;
    });
}

// console.log(findPalindrome(arr2));

// 6. count the character in string
// input: malyalam
// outout : m:2, a:3, l:2, y:1

function countString(str) {
    let obj = {};
    for (let x of str) {
        if (obj[x]) {
            obj[x] = obj[x] + 1;
        } else {
            obj[x] = 1;
        }
    }
    return obj;
}

// console.log(countString("malyalam"));

// 7
// return missing number

function returnMissingNumber(arr) {
    let missingNumberList = [];
    arr.sort((a, b) => {
        return a - b;
    });
    let first = arr[0];
    let last = arr[arr.length - 1];

    for (let i = first; i <= last; i++) {
        if (!arr.includes(i)) {
            missingNumberList.push(i);
        }
    }
    return missingNumberList;
}

// console.log(returnMissingNumber([1, 2, 3, 5, 6, 8]));


// 8. 
// group items of array by category
// input
// const products = [
// { name: 'apples', category: 'fruits' },
// { name: 'oranges', category: 'fruits' },
// { name: 'potatoes', category: 'vegetables' }
//  ];

// output:
// const products = {
//     fruits: [
//      { name: 'apples', category: 'fruits' },
//      { name: 'oranges', category: 'fruits' },
//     ],
//     vegetables: [
//     { name: 'potatoes', category: 'vegetables' }]

//  };



const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
];

// way 0

function groupItems(array) {
    let groupedObj = {
        fruits: [],
        vegetables: []
    };
    for (let i = 0; i < array.length; i++) {
        if (array[i].category === "fruits") {
            groupedObj.fruits.push({ name: array[i].name, category: array[i].category })
        }
        if (array[i].category === "vegetables") {
            groupedObj.vegetables.push({ name: array[i].name, category: array[i].category })
        }
    }

    return groupedObj
}


// console.log(groupItems(products))





// way 1

const input = [
    { name: 'apples', category: 'fruits', price: 100 },
    { name: 'oranges', category: 'fruits', price: 30 },
    { name: 'potatoes', category: 'vegetables', price: 20 }
];

let Output =
{
    fruits: [
        { name: 'apples', category: 'fruits', price: 10 },
        { name: 'oranges', category: 'fruits', price: 30 }
    ],
    vegetables: [{ name: 'potatoes', category: 'vegetables', price: 20 }]
}

function groupItem1(array) {
    let groupedObj1 = {};
    for (let data of array) {
        if (groupedObj1[data.category]) {
            groupedObj1[data.category].push(data);
        }
        else {
            groupedObj1[data.category] = [data]
        }
    }
    return groupedObj1
}

// console.log(groupItem1(input));


// way 2

const arr1 = [
    { name: 'apples', category: 'fruits', price: 10 },
    { name: 'oranges', category: 'fruits', price: 30 },
    { name: 'potatoes', category: 'vegetables', price: 20 }
];

function groupItems(array) {
    let groupedObj = {}
    array.map((data) => {
        if (groupedObj[data.category]) {
            groupedObj[data.category].push(data)
        }
        else {
            groupedObj[data.category] = [data]
        }
    })
    return groupedObj;
}
// console.log(groupItems(arr1))


//way 3

const arr20 = [
    { name: 'apples', category: 'fruits', price: 10 },
    { name: 'oranges', category: 'fruits', price: 30 },
    { name: 'potatoes', category: 'vegetables', price: 20 }
];


function groupItem2(array) {
    let res = array.reduce((groupedObj2, data) => {
        if (groupedObj2[data.category]) {
            groupedObj2[data.category].push(data);
        } else {
            groupedObj2[data.category] = [data];
        }
        return groupedObj2;
    }, {})
    return res;
}

console.log(groupItem2(arr20));






