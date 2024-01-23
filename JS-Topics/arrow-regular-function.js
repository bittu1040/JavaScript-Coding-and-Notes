// this refers to the object that is currently calling the function in case of regular function
// arrow function: this refers to the lexical parent of the function

// console.log(this);

// Example 1:
/*
var age= 20;
var city="blr"
function displayAge(){
    console.log(this.age);
    console.log("city:", this.city);
    console.log(this)
}
displayAge();   
*/
// It is same as window.displayAge();
// here this refers to window because window is calling displayAge function

// example 2

/*
var age=20;
var person= {
    age: 25,
    city: "Blr", 
    displayAge: function(){
        console.log(this)
        console.log(this.age);
        console.log("city:", this.city);
    },
    nestedObject: {
        age: 40,
        city: "Pune",  
        displayAge: function(){
            console.log(this)
            console.log(this.age);
        }
    },
    arrowMethod: {
        age: 50,
        city: "Mumbai",  
        displayAge: () => {
            console.log(this)
            console.log(this.age);
        }
    }

}

person.displayAge();
person.nestedObject.displayAge();
person.arrowMethod.displayAge();

*/

// example 3

var person = {
  age: 28,
  greet1: function () {
    console.log("greet 1", this);
    console.log("greet 1", this.age);
    function greet2() {
      console.log("greet 2", this);
      console.log("greet 2", this.age);
    }
    const greet3 = () => {
      console.log("greet 3", this);
      console.log("greet 3", this.age);
    };
    greet2();
    greet3();
  },
};

let person1 = {
  age: 50,
};

// person.greet1.call(person1);
person.greet1();

const greet4 = () => {
  console.log(this);
  console.log(this.age);
};

// greet4();

// example 4
const person2 = {
  name11: "Bittu",
  sayhello: function () {
    const innerNormal = () => {
      console.log(this.name11);
    };
    innerNormal();
  },
};
person2.sayhello();
