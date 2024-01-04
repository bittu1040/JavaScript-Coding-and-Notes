
// console.time("fizzbuzz");

// for(let i=0; i<50; i++){
//     if(i%3===15){
//         console.log("FizzBuzz");
//     }
//     if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// console.timeEnd("fizzbuzz");

for(let j=0; j<50; j++){
    console.log((j%3 ? "" : "Fizz") + (j%5 ? "" : "Buzz") || j) 
}
