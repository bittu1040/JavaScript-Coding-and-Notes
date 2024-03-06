// 1.  write a function that can give you unique character  string from string

// input: 'hello'
// output: 'helo'

// way 1
function uniquechar(str){
    let str1=str.split("")
    return [... new Set(str1)].join("")
}

// console.log(uniquechar('hello'))

// way 2 

function uniquechar1(str){
   let str1= str.split("").filter((data, index, arr)=>{
    return arr.indexOf(data)===index;
   })
   return str1.join("")
}

// console.log(uniquechar1('hello'))

// way 3 
function uniquechar2(str){
    let data=[];
    for(let i=0; i<str.length; i++){
        if(!data.includes(str[i])){
            data.push(str[i])
        }
    }
    return data.join("");
 }
 
//  console.log(uniquechar2('hellobittu'))



// 2. write a function that takes an array of integers and return maximum product that can be obtained by multiplying any three from that array.

// input=[1,2,3,4,5];
// output: 5*4*3= 60

function ProductOfThree(arr){
    return arr;
}

console.log(ProductOfThree([1,2,3,4,5]))


