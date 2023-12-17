// Prototype in JavaScript
// the function that is used with new keyword: is called constructor function

// prototype is used to shared method with all the instances created from constructor function. 

function Person(fname, lname){
   this.firstName= fname;
   this.lastName= lname;
}

const person2= new Person("bittu", "kumar");
const person3= new Person("vivek", "yadav");

Person.prototype.getFullName= function(){
    return this.firstName + " " + this.lastName;
}

console.log(person2.getFullName())