class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return this.name + " " + this.age;
    }

}

let person1 = new Person("bittu", 27);
console.log(person1)


function Car(name, color){
    this.name= name;
    this.color= color;

}

Car.prototype.getDetails= function(){
    return this.name;
}

let car1= new Car("maruti", "red");
console.log(car1);

function getDetails1(){
    return "some thing"
}

function State(name, country){
    this.name= name;
    this.country= country;
}

let karnataka= new State("KA", "india");
console.log(karnataka);

// inheritance 
// object1 --- all property-- accesible in obj2
// constrctor function -  all property -- i want in constructor function 2
// class 1 propety --- to another class 

let obj1= {name:"bittu", age: 27}
let obj2= {city: "BLR"}

// way 1
//obj2.__proto__= obj1

// way 2
// let obj2= Object.create(obj1, {city: {value: "blr", }, prop1: {value: "prppp"}})

console.log(obj2);


// constructor function inheritance
function Parent(name, age, house){
    this.name= name;
    this.age= age;
    this.house= house
}

Parent.prototype.getDetails= function(){
    return this.name+" " + this.age;
}

let parent1= new Parent("bittu", 27)

function Child(name, age,  schoolname){
    Parent.call(this, name, age)
    this.schoolname= schoolname;
}


Child.prototype= Object.create(Parent.prototype)


Child.prototype.getSchoolDetails= function(){
    return this.name+ " " + this.schoolname;
}

let child1= new Child("ravi", 12, "avm")

console.log(child1.getDetails())
console.log(child1.getSchoolDetails())
console.log(parent1.getDetails())

console.log(child1)














