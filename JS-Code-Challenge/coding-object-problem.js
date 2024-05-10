// Don't miss these 5 Object problems if you are preparing for JavaScript interviews.

// 1. Object property summation
// 2. Object property filtering
// 3. Object property sorting
// 4. Object property renaming
// 5. Object Property aggregation
// 6. Object property frequency



//1.  Write a JavaScript program that takes an array of objects and returns an object containing the frequency of each property across all objects.

function getPropertyFrequency(arr){
    const frequency={}
    arr.forEach((obj)=>{
        for(const key in obj){
            if(frequency[key]){
                frequency[key]++
            }else{
                frequency[key]=1
            }
        }
    })
    return frequency;
}

const data= [
    {a: 1, b: 2},
    {b: 3, c: 4},
    {a: 5, b: 6}
]

// console.log(getPropertyFrequency(data))  // { a: 2, b: 3, c: 1 }

// 2. How do you compare two Objects in JavaScript, ensuring that identical order of keys ?

const obj1= {name: "Bittu", age: 24, Address: {city:"BLR", state: "Karnataka"}}
const obj2= {name: "Bittu", age: 24, Address: {city:"BLR", state: "Karnataka"}}
const obj3= {name: "Rahul", age: 25, Address: {city:"Ranchi", state: "Jharkhand"}}

// console.log(JSON.stringify(obj1)==JSON.stringify(obj2));

// 3. How to check that all keys in given object must have corresponding non-empty values (truthy values)

// This function will return false if any value is falsy (like null, undefined, 0, an empty string, etc.), and true otherwise.
function isAllValuesPresent(obj) {
    for (const key in obj) {
        if(!obj[key]){
            return false
        }
    }
    return true;
}

console.log(isAllValuesPresent({name: "Bittu", age: 24}));  // true
console.log(isAllValuesPresent({name: "Bittu", age:'' }));  // false


// 4. Group array of objects by property
const books = [
    { title: 'Book 1', author: 'Author A', genre: 'Fantasy' },
    { title: 'Book 2', author: 'Author B', genre: 'Science Fiction' },
    { title: 'Book 3', author: 'Author C', genre: 'Fantasy' },
    { title: 'Book 4', author: 'Author D', genre: 'Science Fiction' },
    { title: 'Book 5', author: 'Author E', genre: 'Mystery' }
  ];
  
  
 function groupBooksByGenre(books){
    const obj= {}
    books.forEach((book)=>{
        if(!obj[book.genre]){
            obj[book.genre]=[book];
        }
        else{
        obj[book.genre].push(book);
        }
    })
    return obj;
 }

 console.log(groupBooksByGenre(books))
    