// Guess the output:

// Let revise JS concept by guessing the example,

// Q-1
let newList= [1,2,3].push(4)
// console.log(newList.push(5));

// Q-2
const numbers= [1,2,3,4,5];
const [y]= numbers;

// console.log(y);

// Q-3
const duplicateKey= {name: "Bittu", age:26, name:"Rajeev"};
// console.log(duplicateKey);

// Q-4
function test(){
    return this.name;
}

var obj= {name: "Bittu"};
// console.log(test(), test.call(obj))

// Q-5
const a= {};
const b= {key: "b"};
const c= {key: "c"};
a[b]= 123;
a[c]= 456;


// console.log(a[b]);

// Object keys are automatically converted into strings
// a["[object,object]"]=123


// Q-6

(function(){
    var a1= b1= 5;

})();


//console.log(b1);  //5
//console.log(a1);  // Error


// Q-7
var fullName= "Bittu";
var obj= {
    fullName: "Rahul",
    prop: {
        fullName: "Suraj",
        getFullName: function(){
            return this.fullName;
        }
    }
};

// console.log(obj.prop.getFullName());  //  "Suraj"

const getName= obj.prop.getFullName;
// console.log(getName())   // Bittu

// Q-8
// How do you check if a key is available in an object in JavaScript ?

// Way 1  : Using 'in' operator- 
// It checks for property exists in an Object, including properties inherited from its prototype chain.
let Object1= {name: "Bittu", age: 24};
let Object2= Object.create(Object1);
Object2.city="BLR";

console.log("name" in Object1);  // true
console.log("name" in Object2);  // true

// Way 2: Using the hasOwnProperty() method
//It checks if an object has a property with the specified name. It does not check properties inherited from its prototype chain.

console.log(Object1.hasOwnProperty("name"));  // true
console.log(Object2.hasOwnProperty("name"));  // false