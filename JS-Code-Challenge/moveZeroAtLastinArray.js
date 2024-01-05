// input : [0,1,0,3,12]
// output: [1,3,12,0,0]

function transformArray(arr){
    let result=[];

    for(let i=0; i<arr.length; i++){
        if(!arr[i]==0){
            result.push(arr[i]);
        }
    }

    let zeroLength = arr.length - result.length;
    for(let j=0;j<zeroLength;j++){
        result.push(0)
    }

    return result;
}


console.log(transformArray([0,1,0,3,12]));
console.log(transformArray([0,1,0,3,12]));
