// 1. Implement a Counter.

// Before shorthand
const count = {}
const key= "example";
if(!count[key]){
    count[key]=1;
}
count[key]++;
console.log(count);