// Promise is one of the way to handle asynchronous task in JavaScript:
// Promise in JavaScript is an object that reprsent eventual completion or failure of an asynchronous operation and resulting its final value.

// Basic example

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 2000);
//     setTimeout(() => {
//         reject("rejected")
//     }, 3000);
// });

// example 1
/*
const myPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
        resolve(randomNumber);
    } else {
        reject(new Error("Error: Number is less than or equal to 5"));
    }
});

myPromise
    .then((data) => {
        console.log("Resolve:", data);
    })
    .catch((error) => {
        console.log("Reject:", error.message);
    })
    .finally(() => {
        console.log("Finally block");
    });

*/



// example 2
// example of promise using fetch
/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log(response.headers.get("Content-Type")); // we check response.headers.get('Content-Type')= application/json
        let promise = response.json();
        console.log(promise instanceof Promise); // It return promise hence true
        return promise;
    })
    .then((data) => {
        console.log(data);
    });
*/



// example 3
/*
new Promise((resolve, reject) => {
    console.log("promise")
    try {
        throw new Error("Something is wrong!");
    }
    catch(e){
        console.log(e.message)
    }
}).catch((error) => console.log(error)); 
*/



// Handle multiple promises
// promise.race, promise.all, promise.any, promise.allSettled

//promise.any
// This method takes an array of promises as input and returns a single promise that
// It will resolve if any of the promises in an array are resolved with the resolved value. 
//If all the promises are rejected, promise will be rejected with the error “AggregateError: All promises were rejected”.

/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });

  Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Prints the value of the first resolved promise
  })
  .catch((error) => {
    console.error(error); // Handle error if all promises are rejected
  });
*/




// promise.all
// This method takes an array of promises as input and returns a single promise that
// resolves when all of the promises in the array have resolved, or rejects when any one of the promises rejects.

/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });

  Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

*/


// promise.race
// This method takes an array of promises as input and returns a single promise
// It will return the promise as soon as any of the promises is either resolve or reject.

/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 1 rejected'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });

  Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  */



// promise.allsettled
//This method is similar to Promise.all(), but it waits for all promises to settle (either resolve or reject), 
// regardless of their result (resolve or reject). 
// It returns an array of objects with the status of each promise.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 rejected'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
});

Promise.allSettled([promise1, promise2, promise3])
    .then((data) => {
        console.log(data)
    })
