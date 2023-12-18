class Person {
    constructor(fname, lname){
        this.firstName= fname;
        this.lastName= lname;
    }

    getFullName(){
        return this.firstName+ " " + this.lastName
    }
}


class CompleteDetails extends Person {
    constructor(age, city, fname, lname){
        super(fname, lname)
        this.age= age;
        this.city= city;
    }

    getCompleteDetails(){
        return this.firstName+  " " + this.lastName + " " + this.city + " " + this.age
    }
}

const completeDetails= new CompleteDetails(12, "blr", "bittu", "kumar")

console.log(completeDetails.getCompleteDetails())