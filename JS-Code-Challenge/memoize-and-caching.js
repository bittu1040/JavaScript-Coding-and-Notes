// memoize add function, implement cache in javascript


function add(num1, num2) {
    return num1 + num2;
}

function createSumCache() {
    const cache = {};
    return function (num1, num2) {
        const key = num1 + '+' + num2;
        console.log(cache)
        if (cache.hasOwnProperty(key)) {
            console.log("result from cache");
            return cache[key];
        }
        else {
            console.log("calculating sum ...");
            const sum = add(num1, num2);
            cache[key] = sum;
            return sum;
        }
    }
}

const sumCache= createSumCache();

console.log(sumCache(3, 4));  // calculating sum ... 7
console.log(sumCache(3, 4));  // result from cache   7
console.log(sumCache(5, 6));  // calculating sum ... 11
console.log(sumCache(5, 6));  // result from cache   11

