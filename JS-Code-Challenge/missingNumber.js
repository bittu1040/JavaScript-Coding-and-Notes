

function missing(arr){
    let missingArray=[];
    let min= Math.min(...arr);
    let max= Math.max(...arr);

    for(let i=min; i<=max; i++){
        if(!arr.includes(i)){
            missingArray.push(i);
        }

    }
    return missingArray;
}

console.log(missing([1,2,3,6]))
console.log(missing([-1,2,3,6]))
console.log(missing([1,2]))