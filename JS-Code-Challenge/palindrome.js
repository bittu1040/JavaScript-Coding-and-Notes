// palindrome number

function palindrome(num){


   if(num.toString().split("").reverse().join("")== num){
    return true;
   }
   else {
    return false;
   }

}

console.log(palindrome(121));

