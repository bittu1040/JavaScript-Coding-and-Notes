// hello  --> oellh

function swapFirstAndLast(str){
    let arr= str.split("");
    let temp= arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length-1]= temp;

    return arr.join("")

}

console.log(swapFirstAndLast("hello"))