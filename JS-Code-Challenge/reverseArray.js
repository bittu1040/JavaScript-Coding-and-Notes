let arr= [1,2,3,4];
let reversedArr=arr.reverse();
console.log("reversed array is",reversedArr);
console.log("original array is also modified", arr);


let arr11= [10,20,30,40];

const reversed = [...arr11].reverse();
console.log(reversed)  // without modifying original array

let arr22= [11, 22, 33, 44];
let arr33= new Array();
for(let i=arr22.length-1; i>=0; i--){
    arr33.push(arr22[i])
}

console.log(arr33)

function reverseArray(arr){
    let arr44= [];
    for(let  i=arr.length-1; i>=0; i--){
        arr44.push(arr[i]);
    }
    return arr44;
}

console.log(reverseArray([1,2,3,4,5,6,7]))