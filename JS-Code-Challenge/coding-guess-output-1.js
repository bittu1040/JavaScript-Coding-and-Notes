// Guess the output:

// Let revise JS concept by guessing the example,

// Q-1
let newList= [1,2,3].push(4)
// console.log(newList.push(5));

// Q-2
const numbers= [1,2,3,4,5];
const [y]= numbers;

console.log(y);

// Q-3
const duplicateKey= {name: "Bittu", age:26, name:"Rajeev"};
console.log(duplicateKey);

// Q-4
function test(){
    return this.name;
}

var obj= {name: "Bittu"};
console.log(test(), test.call(obj))

// Q-5
const a= {};
const b= {key: "b"};
const c= {key: "c"};
a[b]= 123;
a[c]= 456;


console.log(a[b]);

// Object keys are automatically converted into strings
// a["[object,object]"]=123

