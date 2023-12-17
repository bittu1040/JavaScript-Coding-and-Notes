function Person(fname, lname ){
    this.firstName= fname;
    this.lastName= lname;
}

Person.prototype.getFullName= function(){
    return this.firstName+ " " + this.lastName;
}

function SuperHero(){
    this.isSuperHero= true;
}

SuperHero.prototype.fightCrime= function(){
    console.log("fighting crime");
}

const batman= new SuperHero();

batman.fightCrime();