/* 
Arrow function 
* It is consize way of writing a function.
 */
 
function Sum(a,b){
    return a+b;
}

console.log(Sum(3,4));

let SumArrowFunction= (a,b)=>a+b;

console.log(SumArrowFunction(3,5))



/*  
     Destructuring 
            * It is one of the feature which allow us to extract value from object and 
     array into a variable in a more consize way
*/

// Array destructuring
let numbers= [10,20,30,40,50];

let [first, second, , , third ]= numbers;
console.log(first);
console.log(second);
console.log(third);


const [a, b, c ] = [5, 40];

console.log(a); 
console.log(b); 
console.log(c);


// default value
const [d, e, f= 666 ] = [100, 200];

console.log(d); 
console.log(e); 
console.log(f);

//  Object destructuring

let object = {name:"Bittu", city: "BLR", age: 20};

let {name, city, age}= object;

console.log(name);
console.log(city);
console.log(age); 


/*
Rest/Spread operator 
Both are used with ... 

Spread operator:
spread operator help to expand elements out from array or object
It converts array into list of items (it means it copy the array element)


Rest operator:
rest operator helps to gather all remaining arguments into an array. 
It is always written in last argument where ever it is used.
*/

// rest - bache hue element ko array me convert kr dega  
// spread- array ke sare element ko list of element me convert kr dega -- spread kr dega 


// spread operator:

let arr1= [1,2,3];
let arr2= [...arr1, 4,5]
console.log(arr2);
console.log(Math.min(...arr2))

let obj1= {name: "bittu", age: 20};
let obj2= {...obj1, city: "blr"};
console.log("spread operator", obj2)


// rest operator

const [first1, ...last]= [1,2,3,4]

console.log(first1);
console.log(last);


const {first2, ...last2}= {first2:1, b:2, c:3};
console.log(first2);
console.log(last2)


function rest(para1, para2, ...para3){
    console.log(para1); 	
 console.log(para2); 	
 console.log(para3);  
}

rest(1,2,3,4);

function SumOfNumbers(...inp){
    console.log(inp)   // [1,2,3,4,5]
    let sum=0;
    for(let i=0; i<inp.length; i++){
     sum= sum+inp[i];
 }
    return sum;
}

console.log(SumOfNumbers(1,2,3,4,5));


/* 
    Template literals:
 I
*/





