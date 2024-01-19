// debounce and throttle

// It helps to prevent unnecessary function calls

const searchInput = document.getElementById("searchInput");

function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(() => {
            func(...args);
        }, delay);
    }
}


const myFunction = function (event) {
  console.log(event.target.value);
  fetch(`https://api.github.com/users/${event.target.value}`)
    .then((response) => response.json())
    .then((data) => console.log("success", data));
};

searchInput.addEventListener("input", debounce(myFunction, 2000));
