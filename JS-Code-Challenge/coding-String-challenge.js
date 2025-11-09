// 1. reverse string each word
function reverseStr(str) {
    let newstr = [];
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        newstr.push(str1[i].split("").reverse().join(""));
    }
    return newstr.join(" ")
}

const str = "this is javascript codee";
reverseStr(str);



// 2.  find number of character
const str2 = " this is javascript code and you have to find max character";
function findNumberOfChar(str) {
    let str1 = str.split("");
    let charCount = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (char !== ' ') {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    return charCount;

}

// console.log(findNumberOfChar(str2))




// 3.   find maximum value from an object
let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function findMaxValue(obj) {
    let max = 0;
    for (let data in obj) {
        // console.log(obj[data])
        if (obj[data] > max) {
            max = obj[data];
        }
    }
    for (let data in obj) {
        if (obj[data] === max) {
            return data
        }
    }
}

// console.log(findMaxValue(obj))

// 4. combine 2 and 3 -- find max character and its value

// 5. understand sorting problem 
// string sorting
// [ {name: "bittu", city:"blr"},{name: "rahul", city:"blr"},{name: "samay", city:"blr"} ]
// sort by name



// 6  slice and splice
/*
    slice : 
    array.slice(startIndex, endIndex);    both index are optional and endIndex is not included
    It does not modify original array
    It return a shallow copy of a portion of an array into a new array object

    splice :
    This method is used for making modifications to the original array by adding, removing, or replacing elements
    array.splice(startIndex, deleteCount, item1, item2, ...);

*/


let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice(2, 3)
// console.log(arr1) // [ 1, 2, 3, 4, 5 ]
// console.log(arr2) // [ 3 ]

let arr3 = [1, 2, 3, 4, 5, 6]
let arr4 = arr3.splice(1, 1, 10, 20)
// console.log(arr3)
// console.log(arr4)


// 7. Create your own string method: repeatify(3)- input string will be repeated three times
// Ex- console.log("hello".repeatString(3)); // HelloHelloHello

String.prototype.repeatString = function (times) {
    let str = "";
    for (let i = 0; i < times; i++) {
        str = str + this;  // here this= "Hello"
    }
    return str;
}
// console.log("Hello".repeatString(3))  // HelloHelloHello



// 8. Write a program to mask card number 

const cardNumber = "1234234534564567";
const len = cardNumber.length;
const last4 = cardNumber.slice(len - 4)
const remaining = cardNumber.slice(0, len - 4);
const masked = "*".repeat(remaining.length) + last4
console.log(masked)   // ***************4567


// 9. Write a JavaScript program to return count of each character in a string.

function countCharacter(str) {
    let charCount = {};
    for (let s of str) {
        if (s !== " ") {
            charCount[s] = (charCount[s] || 0) + 1
        }
    }
    return charCount
}

// console.log("cc",countCharacter("my name is bittu"));

// 10. Write a JavaScript program to remove all occurrences of a specified character from a given string in JavaScript
function removeAllOccurance_1(str, char) {
    return str.split(char).join("");
}

function removeAllOccurance_2(str, char) {
    const regex = new RegExp(char, 'g');
    return str.replace(regex, '');
}

//    console.log(removeAllOccurance_1("my name is bittu", "i"));  // my name s bttu
//    console.log(removeAllOccurance_2("my name is bittu", "i"));  // my name s bttu


// 11. Write a JavaScript program to remove last occurance of a specified character from a given string in JavaScript.

// 12. Write a JavaScript program to find first occurance of a specified character from a given string in JavaScript.

// 13. Write a JavaScript program that takes two strings as input and returns true if they are anagrams of each other, otherwise return false.

function checkAnagram(str1, str2) {
    // Remove whitespace and convert to lowercase
    const Str3 = str1.replace(/\s+/g, '').toLowerCase();
    const Str4 = str2.replace(/\s+/g, '').toLowerCase();

    if (Str3.length !== Str4.length) {
        return false;
    }

    const sortedStr1 = Str3.split('').sort().join('');
    const sortedStr2 = Str4.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(checkAnagram("abcd", "cdab"));  // true

// 14.  Write a JavaScript program that converts a string to camelCase
function toCamelCase(str) {
    if (!str) {
        return '';
    }
    const words = str.split(' ');
    words[0] = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        let lowercaseWord = words[i].toLowerCase();
        let camelCaseWord = lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
        words[i] = camelCaseWord;
    }

    return words.join('');
}

console.log(toCamelCase("hello world"));  // "helloWorld"
console.log(toCamelCase("HELLO WORLD"));  // "helloWorld"
console.log(toCamelCase("helloWorld"));   // "helloworld"
console.log(toCamelCase("123camelCase")); // "123camelcase"
console.log(toCamelCase("")); // Output: ""
console.log(toCamelCase(null)); // Output: ""


// 15. Write a program to slice a string into chunks of a given length.
const str = 'javascript';
const chunkSize = 3;

function sliceByLength(input, size) {
  const result = [];
  for (let i = 0; i < input.length; i += size) {
    result.push(input.slice(i, i + size));
  }
  return result;
}

console.log(sliceByLength(str, chunkSize)); // Output: ['jav', 'asc', 'rip', 't']

// 16. Write a JavaScript function to reverse the words in a given sentence and capitalize the first letter of each word.

function reverseWordsWithCapital(sentence) {
  return sentence
    .split(' ')
    .reverse()
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(reverseWordsWithCapital("hello world from javascript"));
// Output: "Javascript From World Hello"
