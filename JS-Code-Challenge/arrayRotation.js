

// input : [1,2,3,4,5], number of rotation: 3
//  step 1: [5,1,2,3,4]
// step 2: [4,5,1,2,3]
// step 3: [3,4,5,1,2]


function arrayRotation(arr, numberOfRotation){
    for(let i=0; i<numberOfRotation; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}

console.log(arrayRotation([1,2,3,4,5], 3))