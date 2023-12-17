/*
The JavaScript this keyword which is used in a function, refers to the object it belongs to.
It makes function reusable by letting you decide the object value.
This value is determined entirely ny how a function is called.

*/


let person = {
    name: "bittu",
    sayMyName: function(){
        console.log(this.name)
    }
}

person.sayMyName(); // here this refers to person so person.name = bittu


// If we want to change reference object for this , we need to use call and provide object reference. 
let person1= {name: "Vivek"}

person.sayMyName.call(person1);
