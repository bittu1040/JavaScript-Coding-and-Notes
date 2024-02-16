// palindrome number

function palindrome(num) {


   if (num.toString().split("").reverse().join("") == num) {
      return true;
   }
   else {
      return false;
   }

}

console.log(palindrome(121));


function PalindromeNumberOrString(input) {
   if (input.toString().split("").reverse().join("") == input) {
      return true;
   }
   else {
      return false;
   }
}

console.log(PalindromeNumberOrString("malayalam"));
console.log(PalindromeNumberOrString(121));

