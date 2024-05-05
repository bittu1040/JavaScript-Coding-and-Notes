// INPUT

const input = [
    { key: "sample 1", data: "Data1" },
    { key: "sample 1", data: "Data1" },
    { key: "sample 2", data: "Data2" },
    { key: "sample 1", data: "Data1" },
    { key: "sample 3", data: "Data1" },
    { key: "sample 4", data: "Data1" }
];

// OUTPUT   
/*
  {  
    "sample 1": [  { "key": "sample 1", "data": "Data1" },
                    { "key": "sample 1", "data": "Data1" },
                    { "key": "sample 1", "data": "Data1" } 
                ],
    "sample 2": [ { "key": "sample 2", "data": "Data2" } ],
    "sample 3": [ { "key": "sample 3", "data": "Data1" } ],
    "sample 4": [ { "key": "sample 4", "data": "Data1" } ]
  }

*/

// way 1: using forEach
function groupByKey(arr) {
    let result = {};
    arr.forEach(element => {
        if (result[element.key]) {
            result[element.key].push(element);
        } else {
            result[element.key] = [element];
        }
    });

    return result
}

console.log(groupByKey(input))


// way 2: using for-of

function groupItems1(arr) {
    let result = {};
    for (let item of arr) {
        if (result[item.key]) {
            result[item.key].push(item);
        } else {
            result[item.key] = [item];
        }
    }
    return result
}

console.log(groupItems1(input));


// way 3 : using reduce method
function groupItems2(arr) {
    return arr.reduce((result, item) => {
        if (result[item.key]) {
            result[item.key].push(item);
        }
        else {
            result[item.key] = [item];
        }
        return result
    }, {})
}

console.log(groupItems2(input));
