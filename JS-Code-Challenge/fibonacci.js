
// 0,1,1,2,3,5,8

function fibonacci(num) {

    let res = [0,1];

    for(let i=2;i<=num;i++){
     let tempNum= res[i-1]+ res[i-2]
        res.push(tempNum)
    }

    return res

}


console.log(fibonacci(10))