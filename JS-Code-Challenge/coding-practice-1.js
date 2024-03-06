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
function moveZeroToLast(arr){
    let newArr= []
    for(let data of arr){
        if(data!==0){
            newArr.push(data)
        }
    }
    diff= arr.length- newArr.length;
    for(let i=0; i<diff; i++){
        newArr.push(0)
    }

    return newArr
}

// console.log(moveZeroToLast([0,1,0,3,12]));



// way 2
function moveZeroToLast(arr){
    let newArrWithZero= []
    let newArrWithNotZero= []

    for(let data of arr){
        if(data!==0){
            newArrWithNotZero.push(data)
        }
        else{
            newArrWithZero.push(data)
        }
    }


    return [...newArrWithNotZero, ...newArrWithZero ]
}

// console.log(moveZeroToLast([0,1,0,3,12]));


// 4. write a function to check palindrome, considering only alphanumeric characters and ignoring cases.

// input: "A man, a plan, a canal: Panama"
// output: true;

function checkPalindrome(str){
    let regex=  /[^A-Za-z0-9]/g ;
    let str1= str.toLowerCase().replace(regex, "");
    let str2= str1.split("").reverse().join("")
    return str1===str2
}

let str= "A man, a plan, a canal: Panama"
// console.log(checkPalindrome(str));


// example for when we have plane sentence with space only, there we need to remove space and compare 
function palindrome(str){
    let removeSpace= /\s/g;

    let str1= str.toLowerCase().replace(removeSpace, "")
    let str2= str1.split("").reverse().join("")
    return str1===str2;
}

// console.log(palindrome("never odd or even"));




// 5. given a sorted array, and target value 
// write a function to return the index of the target value in the array using binary search. if target not found- return -1

// input: [1,3,5,7,9,11,13], target=7
// output: 3

// way 1
function findTargetIndex(arr, target){
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1;
}


console.log(findTargetIndex([0,1,3,5,7,9,11,13], 0))



// way 2
function findTargetIndex1(arr, target){
    if(arr.indexOf(target)>=0){
        return arr.indexOf(target)
    }
    return -1
}


console.log(findTargetIndex1([0,1,3,5,7,9,11,13], 144))

let arr= [0,1,3,5,7,9,11,13];
console.log(arr.indexOf(0))