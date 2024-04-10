// module pattern

// The Module Pattern in JavaScript is a way to encapsulate code into independent, reusable modules. 
// It allows you to organize your code, keep variables and functions private, and expose only the necessary functionality to the outside world.



// using IIFE
var Calc= (function(){
    // private functions and variables
    var result= 0;
    function add(a,b){
        return a+b;
    }
    function substract(a,b){
        return a-b;
    }

    // public functions
    return {
        add: function(a,b){
            result= add(a,b);
        },
        substract: function(a,b){
            result= substract(a,b);
        },
        getResult: function(){
            return result;
        }
    }
})();

Calc.add(4,5);
console.log(Calc.getResult()); // 9



// Without using IIFE
var Calculator= {
    result: 0,
    add: function(a,b){
        this.result= a+b;
    },
    substract: function(a,b){
        this.result= a-b;
    },
    getResult: function(){
        return this.result;
    }
}

Calculator.add(1,2);
console.log(Calculator.getResult());  // 3
