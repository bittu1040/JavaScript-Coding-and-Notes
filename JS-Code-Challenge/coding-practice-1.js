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

