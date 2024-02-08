let arr= [1,2,3,4,4,2,5,6]


// using for loop
let newArr= []
for(let i=0; i<arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
}
console.log(newArr)

// using set
let arrRemove= [1,2,3,4,4,2,5,6];
let newArrRemove= [...new Set(arrRemove)]
console.log(newArrRemove);

// using forEach
let myArr= [1,2,3,3,2,5,6, 10];
let result= [];
myArr.forEach((item)=>{
    if(result.indexOf(item)===-1){
        result.push(item)
    }
});

console.log(result)