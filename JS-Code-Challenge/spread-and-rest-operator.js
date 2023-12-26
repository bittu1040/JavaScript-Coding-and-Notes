// spread operator

/*
const number= [3,5,6,10,23];

console.log(Math.max(...number));

let person= {name:"bittu", age: 30};
let p1= {...person}

console.log(p1.name)

*/

// rest parameters
// it is used in function parameters


function avgCalculate(...nums) {
    let total = 0;
    let count = 0;
    for (let num of nums) {
        if (Array.isArray(num)) {
            for (let n of num) {
                total = total + n;
                count++;
            }
        }
        else {
            total = total + num;
            count++;
        }
    }
    return total / count;
}

console.log("Average",avgCalculate(1, 2, [3, 4], 5));
