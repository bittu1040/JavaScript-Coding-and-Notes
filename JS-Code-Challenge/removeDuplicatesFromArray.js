let arr= [1,2,3,4,4,2,5,6]

let newArr= []

for(let i=0; i<arr.length-1; i++){
    for(let j=1; j<arr.length;j++){
        if(arr[i]==arr[j]){
            newArr.push(arr[i])
        }
    }
}

console.log(newArr)

let arrRemove= [1,2,3,4,4,2,5,6];

let newArrRemove= [...new Set(arrRemove)]
console.log(newArrRemove)