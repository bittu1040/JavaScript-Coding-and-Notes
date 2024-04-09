// Array polyfills 
// push, pop, shift, foreach, split, find


// 1. Implement a polyfill for the Array.prototype.push() and  Array.prototype.pop() method in JavaScript.

// The Array.prototype.push() method adds one or more elements to the end of an array and returns the new length of the array. 
// The Array.prototype.pop() method removes the last element from an array and returns that element. 
// This operation changes the length of the array.


Array.prototype.myPush= function(number){
    this[this.length]=number;
    return this.length;
}

console.log([1,2,3,4,5].myPush(80));   // 6

Array.prototype.myPop= function(){
    let lastEle= this[this.length-1];
    this.length=this.length-1;
    return lastEle;
}

console.log([1,2,3,4,5].myPop());  // 5