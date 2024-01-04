// hello  --> oellh

function swapFirstAndLast(str){
    let arr= str.split("");
    let temp= arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length-1]= temp;

    return arr.join("")

}

console.log(swapFirstAndLast("hello"))


function swap(str){
    if(str.length<2){
        return str;
    }
    return str.charAt(str.length-1) + str.substring(1, str.length-1) +  str.charAt(0);
}

console.log(swap("Bittu"))
console.log(swap("B"))


