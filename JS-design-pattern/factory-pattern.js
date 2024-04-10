// factory design pattern


// To understand factory pattern, we need to understand factory function in JavaScript.
// Factory functions in JavaScript are simply functions that return objects without needing to use the new keyword.

// Example: 
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

let person1 = createPerson("John", 30);
console.log(person1);


// The Pizza Shop gives the perfect example to understand the Factory Design Pattern. Each pizza has its own ingredients and preparation process. 
// the factory function is like that magic factory. Instead of creating objects directly in your code, you ask the factory function to create them for you. The factory function knows how to create different types of objects based on what you need.
// This makes your code easier to manage because you don't have to deal with the details of creating each object yourself.
// If you ever need to change how an object is created, you only have to update the factory function instead of changing every place where the object is created. 
// This makes your code more reusable, easier to maintain, and more flexible.

// Class for Margherita Pizza
class MargheritaPizza {
    constructor() {
        this.type = "Margherita";
        this.crust = "Thin crust";
        this.cheese = "Mozzarella";
        this.toppings = ["Tomato", "Basil"];
    }
}

// Class for Pepperoni Pizza
class PepperoniPizza {
    constructor() {
        this.type = "Pepperoni";
        this.crust = "Thick crust";
        this.cheese = "Cheddar";
        this.toppings = ["Pepperoni", "Cheese", "Tomato sauce"];
    }
}

// Class for Veggie Supreme Pizza
class VeggieSupremePizza {
    constructor() {
        this.type = "Veggie Supreme";
        this.crust = "Regular crust";
        this.cheese = "Provolone";
        this.toppings = ["Mushrooms", "Bell peppers", "Onions", "Olives", "Tomatoes"];
    }
}


function createPizza(type){
    switch(type.toLowerCase()){
        case "margherita":
            return new MargheritaPizza();
        case "pepperoni":
            return new PepperoniPizza();
        case "veggie supreme":
            return new VeggieSupremePizza();
        default:
            throw new Error("Invalid pizza type specified.");
    }
}

const pizza1 = createPizza("Margherita");
const pizza2 = createPizza("PePperoni");

console.log(pizza1);
console.log(pizza2);
