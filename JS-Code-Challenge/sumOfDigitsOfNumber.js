

// sum of digits of number
// 1234: 1+2+3+4
// 4984: 4+9+8+4



function sumOfDigitsOfNumber(n){
    let sum=0;
    let reminder;

    while(n>0){
        reminder= n%10;
        sum= sum+ reminder;
        n= Math.floor(n/10);

    }

    return sum;


}

console.log(sumOfDigitsOfNumber(1234))