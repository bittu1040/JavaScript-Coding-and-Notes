// sum of all natural number from 1 to n. 


function sumOfAllNaturalNumber(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum= sum+i;
    }
    return sum;
}

console.log(sumOfAllNaturalNumber(10))
