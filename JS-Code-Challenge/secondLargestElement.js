

function secondLargestNumber(arr){
    let sortedArray= arr.sort((a,b)=>{
        return b-a;
    });

    let uniqueelement=[...new Set(sortedArray)]

    return uniqueelement[1];
}


console.log(secondLargestNumber([10, 5,2,13]))