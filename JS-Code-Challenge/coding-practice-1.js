// 1.  write a function that can give you unique character  string from string

// input: 'hello'
// output: 'helo'

// way 1
function uniquechar(str) {
    let str1 = str.split("")
    return [... new Set(str1)].join("")
}

// console.log(uniquechar('hello'))

// way 2 

function uniquechar1(str) {
    let str1 = str.split("").filter((data, index, arr) => {
        return arr.indexOf(data) === index;
    })
    return str1.join("")
}

// console.log(uniquechar1('hello'))

// way 3 
function uniquechar2(str) {
    let data = [];
    for (let i = 0; i < str.length; i++) {
        if (!data.includes(str[i])) {
            data.push(str[i])
        }
    }
    return data.join("");
}

//  console.log(uniquechar2('hellobittu'))



// 2. write a function that takes an array of integers and return maximum product that can be obtained by multiplying any three from that array.

// input=[1,2,3,4,5];
// output: 5*4*3= 60

// way 1
function ProductOfThree(arr) {
    if (arr.includes(0)) {
        return 0;
    }
    else if (arr.length < 3) {
        return "not enough data"
    }
    else {
        let sortedArr = arr.sort((a, b) => b - a);
        return sortedArr[0] * sortedArr[1] * sortedArr[2]
    }
}

// console.log(ProductOfThree([1, 2, 3, 4, 5]));

// way 2
function ProductOfThree1(arr) {
    if (arr.length > 3) {
        let sortedArray = arr.sort((a, b) => b - a);
        let productOfThree = 1
        for (let i = 0; i < 3; i++) {
            productOfThree = productOfThree * sortedArray[i]
        }
        return productOfThree;
    }
    else {
        return "not enough data"
    }

}

// console.log(ProductOfThree1([1, 2, 3, 4, 5]));




// 3. write a function to move all zero to the end of the array while maintaining the relative order of the non-zero elements.
// input: [0,1,0,3,12]
// output: [1,3,12, 0, 0]

// way 1
function moveZeroToLast(arr) {
    let newArr = []
    for (let data of arr) {
        if (data !== 0) {
            newArr.push(data)
        }
    }
    diff = arr.length - newArr.length;
    for (let i = 0; i < diff; i++) {
        newArr.push(0)
    }

    return newArr
}

// console.log(moveZeroToLast([0,1,0,3,12]));



// way 2
function moveZeroToLast(arr) {
    let newArrWithZero = []
    let newArrWithNotZero = []

    for (let data of arr) {
        if (data !== 0) {
            newArrWithNotZero.push(data)
        }
        else {
            newArrWithZero.push(data)
        }
    }


    return [...newArrWithNotZero, ...newArrWithZero]
}

// console.log(moveZeroToLast([0,1,0,3,12]));


// 4. write a function to check palindrome, considering only alphanumeric characters and ignoring cases.

// input: "A man, a plan, a canal: Panama"
// output: true;

function checkPalindrome(str) {
    let regex = /[^A-Za-z0-9]/g;
    let str1 = str.toLowerCase().replace(regex, "");
    let str2 = str1.split("").reverse().join("")
    return str1 === str2
}

let str = "A man, a plan, a canal: Panama"
// console.log(checkPalindrome(str));


// example for when we have plane sentence with space only, there we need to remove space and compare 
function palindrome(str) {
    let removeSpace = /\s/g;

    let str1 = str.toLowerCase().replace(removeSpace, "")
    let str2 = str1.split("").reverse().join("")
    return str1 === str2;
}

// console.log(palindrome("never odd or even"));




// 5. given a sorted array, and target value 
// write a function to return the index of the target value in the array using binary search. if target not found- return -1

// input: [1,3,5,7,9,11,13], target=7
// output: 3

// way 1
function findTargetIndex(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1;
}


// console.log(findTargetIndex([0,1,3,5,7,9,11,13], 0))



// way 2
function findTargetIndex1(arr, target) {
    if (arr.indexOf(target) >= 0) {
        return arr.indexOf(target)
    }
    return -1
}


// console.log(findTargetIndex1([0,1,3,5,7,9,11,13], 144))

// let arr= [0,1,3,5,7,9,11,13];
// console.log(arr.indexOf(0))



// 6. write a function which return first non-repeating character, if not available then return -1

// example:
// input: "aabbcc"
// output: -1

// input: "aabbcd"
// output: "c"

function findFirstNonRepeatingCharacter(str) {
    let data = {};
    for (let i = 0; i < str.length; i++) {
        if (data[str[i]]) {
            data[str[i]] = data[str[i]] + 1
        }
        else {
            data[str[i]] = 1
        }
    }
    // return data  //  { a: 2, b: 5, c: 2, d: 1 }

    for (let key in data) {
        if (data[key] === 1) {
            return key;
        }
    }
    return -1
}


// console.log(findFirstNonRepeatingCharacter("aabbccdfh"))



// 7. find occurance of characters in given string

function findOccurance(str) {
    let result = {};
    for (let data of str) {
        if (result.hasOwnProperty(data)) {
            result[data] = result[data] + 1;
        }
        else {
            result[data] = 1
        }
    }
    return result;
}

// console.log(findOccurance("sdhjsbdcsdncjsdnjnddjsbhsvghsp"))

//{ s: 7, d: 6, h: 3, j: 4, b: 2, c: 2, n: 3, v: 1, g: 1, p: 1 }


// 8. Flatten a nested array
function flattenArray(arr) {
    const flattened = [];
    arr.forEach((element) => {
        if (Array.isArray(element)) {
            let flattened1 = flattenArray(element)
            flattened.push(...flattened1)
        }
        else {
            flattened.push(element);
        }
    });

    return flattened;
}

// console.log(flattenArray([1, 2, 3, [4, 5], 10]));
// output: [1, 2, 3, 4, 5, 10]


const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
const flattenedArray = nestedArray.flat(Infinity);
// console.log(flattenedArray);
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// using reduce method

function flattenArray1(arr) {
    return arr.reduce(function (acc, curr) {
        if (Array.isArray(curr)) {
            return acc.concat(flattenArray1(curr));
        } else {
            return acc.concat(curr);
        }
    }, []);
}

// console.log(flattenArray([1, 2, 3, [4, 5], 10]));


// 9. Find the longest word in a string

function longestWord(str) {
    let str1 = str.split(" ");
    let str2 = str1.sort((a, b) => {
        return b.length - a.length
    });
    let longestWord = str2.filter((data) => {
        return data.length == str2[0].length
    })

    return longestWord;
}

// console.log(longestWord("my name is bittu"));




// native sorting of string by length
// native sorting of number


// 10. Compare two array
//   input: [1,2,3,4,5], [1,2,3,4,5]
//   output: true

function compareArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((data, index, arr) => {
        return data == arr2[index];
    })
}

console.log(compareArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));  // true
console.log(compareArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]));  // false



// 11. write a function that accepts unlimited number of input and return sum of it.  

function add(...arg) {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum = sum + arg[i]
    }
    return sum
}

// console.log(add(1, 2, 3, 4, 5)) //15



// 12. Write a program to remove duplicate element from an array in different ways.

const numbers = [1, 3, 2, 3, 3, 4, 5];
// 1
function removeDuplicates(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) == -1) {
            res.push(arr[i])
        }
    }
    return res;
}
// console.log(removeDuplicates(numbers));

// 2
function removeDuplicate1(arr) {
    return [...new Set(arr)]
}
// console.log(removeDuplicate1(numbers));

// 3
function removeDuplicates2(arr) {
    let obj = {};
    for (let data of arr) {
        obj[data] = true;
    }
    return Object.keys(obj).map(Number)
}
// console.log(removeDuplicates2(numbers));



// 13. Write a program to implement currying which gives sum of three numbers.

function SumOfThee(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// console.log(SumOfThee(2)(3)(4))  // 9


// 14. Write a program to generate 6 digits random OTP 

function generateOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp = otp + Math.floor(Math.random() * 10);
    }
    return otp;
}

// console.log(generateOTP()) // 232445


// 15. Write a program to find intersection of two arrays.

function commonElementArray(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                res.push(arr1[i]);
            }
        }
    }
    return res;
}

function commonElementArray1(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}


// console.log(commonElementArray1([1,2,3,4,5], [3,4,5,6,7]));


// 16. Write a Javascript program for custom array method for max and min value.

Array.prototype.customMax = function () {
    if (this.length === 0) {
        return undefined;
    }
    let max = this[0];
    for (let num of this) {
        if (num > max) {
            max = num
        }
    }
    return max
}

// console.log([1,2,3,4,5].customMax()); // 5

Array.prototype.customMin = function () {
    if (this.length === 0) {
        return undefined;
    }
    let min = this[0];
    for (let num of this) {
        if (num < min) {
            min = num
        }
    }
    return min
}

// console.log([1,2,3,4,5].customMin()); // 1


// 17 Write a JavaScript program to capitalize the first letter of each word of a given string.


function capitalizeFirstLetter(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        res.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));

    }
    return res.join(" ");
}
// console.log(capitalizeFirstLetter("my name is Bittu Kumar"));


// 18. Write a JavaScript program that determines whether a given string contains only unique characters or not.

function isAllcharactersUnique(str) {
    let data = []
    for (let i = 0; i < str.length; i++) {
        if (!data.includes(str[i])) {
            data.push(str[i])
        }
        else {
            return false
        }
    }
    return true;
}

console.log(isAllcharactersUnique("Bitu"));  // true
console.log(isAllcharactersUnique("Bittu")); // false


// 19. Write a JavaScript function that checks the sum of all integers in array equals the highest integer in that array.

function sumOfAllEqualHighest(arr) {
    let max = Math.max(...arr);
    let totalsum = arr.reduce((a, b) => {
        return a + b;
    }, 0);

    return (totalsum - max) === max;
}

console.log(sumOfAllEqualHighest([1, 2, 3, 4, 5]));      //  5!=10=> false
console.log(sumOfAllEqualHighest([1, 2, 3, 4, 15, 5]));  // 15==15=> true


// 20. Write a JavaScript program to find unique object property values.

let products = [
    { title: "IPhone 8", company: "Apple" },
    { title: "IPhone 11", company: "Apple" },
    { title: "Galaxy", company: "Samsung" },
    { title: "Vivo V5", company: "Vivo" },
    { title: "OPPO C9", company: "Oppo" },
    { title: "Lumia", company: "Nokia" },
    { title: "S23 Ultra", company: "Samsung" },
    { title: "Iphone 13", company: "Apple" },
];

function uniqueObjectValues(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i].company)) {
            res.push(arr[i].company);
        }
    }
    return res;
}

function uniqueObjectValues1(arr) {
    return [... new Set(arr.map((data) => {
        return data.company;
    })
    )]
}

// console.log(uniqueObjectValues1(products));
// console.log(uniqueObjectValues(products));



// 21. Write a JavaScript program to return all objects with the maximum value from a given JavaScript object.



let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function findMaximumValue(obj) {
    let res= {};
    let maxValue= Math.max(...Object.values(obj));
    for(let keys in obj){
        if(obj[keys]===maxValue){
            res[keys]=obj[keys];
        }
    }
    return res;
}

console.log("value", findMaximumValue(obj));  // { t: 4, i: 4 }


// 22. Write a JavaScript program to return the object with the maximum value (the first encountered) from a given JavaScript object

function findMaximumValue1(obj) {

}

console.log(findMaximumValue1(obj));  // { t: 4}



// 23. Write a JavaScript Program that takes an array of numbers and returns sum of all numbers that are divisible by both 3 and 5.

function findSumDivisibleBy3_5(arr){
    let sum= 0;
    for(let i of arr ){
        if(i%3===0 && i%5===0){
            sum= sum+i;
        }
    }
    return sum
}

console.log(findSumDivisibleBy3_5([10, 15, 9, 12, 30, 8, 25]))  // 45