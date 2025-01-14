
/*
📌 setInterval runs a function repeatedly at fixed time intervals
📌 Use clearInterval(intervalId) to stop it, avoiding infinite loops
📌 Asynchronous behavior: It runs independently of previous calls, which can lead to overlapping if tasks take longer than the interval.
*/


// print 1 to 10 in each 1 second using setInterval

function printNumbers(){
	let i=1;
	let intervalId= setInterval(()=>{
  	console.log(i);
    i++;
    if(i>10){
    	clearInterval(intervalId)
    }
  }, 1000)
}

printNumbers();




// print even numbers from an array at intervals of 2 seconds
let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

function printEven(arr) {
  let index = 0
  let intervalId = setInterval(() => {
    if (index >= arr.length) {
      clearInterval(intervalId)
    } else if (arr[index] % 2 === 0) {
      console.log(arr[index])
    }
    index++
  }, 2000)
}

printEven(arr);   // 12 14 16 18 20 22
