let array1= [1,2,3,4,5,6];
let array2= [1,2,3,[4,5,[6]]];


// Array comparison by converting into strings

console.log(array1.toString());   // "1,2,3,4,5,6"
console.log(array2.toString());   // "1,2,3,4,5,6"

console.log(JSON.stringify(array1));  // "[1,2,3,4,5,6]"
console.log(JSON.stringify(array2));  // "[1,2,3,[4,5,[6]]]"

console.log(array1.toString() === array2.toString());  // true
console.log(JSON.stringify(array1)=== JSON.stringify(array2)); // false


// Array comparision by Lopping Through Their Values


let array10 = [11, 22, 33];
let array20 = [21, 22, 23];
let array30 = [11, 22, 33];

// every method : It returns true if function returns true for all elements and 
                 // return false if function return false for one element. 
function compareArrays(arr1, arr2){
  if(arr1.length !==arr2.length){
    return false;
  }
  return arr1.every((ele, index,arr)=>{
    return ele===arr2[index]
  })
}

console.log(compareArrays(array10, array30)) // true


// for loop
function compareArrays(arr1, arr2){
	if(arr1.length!==arr2.length){
  	return false;
  }
  else{
  	for(let i=0; i<arr1.length; i++){
    	if(arr1[i]!==arr2[i]){
      	return false;
      }
    }
    return true
  }
}

console.log(compareArrays(array10, array20))  // false