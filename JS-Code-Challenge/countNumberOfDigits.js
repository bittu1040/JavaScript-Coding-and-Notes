// count the number of digits of a number
// 23432: 5


function countNumberOfDigits(n){

    num= Math.abs(n)
    let count= 0;

    do {
        count++;
        num= Math.floor(num / 10);
    } while (num>0);

    return count;




    // return n.toString().split("").length;
}

console.log(countNumberOfDigits(23452))