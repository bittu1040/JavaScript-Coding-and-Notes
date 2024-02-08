// 1. sum of all fruits

const fruits= [
    {apple: 4, orange: 7, grape:3},
    {guava: 6, lemon: 4, banana: 8},
    {orange: 5, pineapple: 7, apple: 7}
]

let fruitSum={}
fruits.forEach((data)=>{
    for(let x in data ){
        if(fruitSum[x]){
            fruitSum[x]= fruitSum[x]+ data[x]
        }
        else{
            fruitSum[x]= data[x]
        }
    }
})

// console.log(fruitSum)


// 2. reverse each word of sentence

const string1= "Welcome to javascript guide";

let newString1= string1.split(" ")


let newString2= newString1.map((data)=>{
    return data.split("").reverse().join("")
})

// console.log(newString2)


// 3. find two numbers which is equal to given target sum;

const arr= [2,4,11,6];

let targetSum= 15;

function findTwoNumber(arr, target){
    for(const data of arr){
        var difference= target - data;
        if(arr.includes(difference) && difference !== data){
            return [data, difference]
        }
    }
    return null;

}

console.log(findTwoNumber(arr, targetSum));


// 4. find shortest word in list of array

const words= [ "cat", "saturday","sunday","monday","tuesday","wednesday","thursday","friday", "cot"];


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
console.log(findSmallestWord(words)); 


// 5. separate palindrome number from array;

let arr2= ["radar", "hello", "level", "world", "madam", "bba", "racecar"];

function findPalindrome(arr){
    return arr.filter((data)=>{
        return data.split("").reverse().join("")==data;
    })
}

console.log(findPalindrome(arr2));


