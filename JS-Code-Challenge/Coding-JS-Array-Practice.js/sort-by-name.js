let characters = [
    {
        "name": "Alice",
        "age": 25,
        "gender": "Female",
        "height_cm": 168,
        "city": "New York"
    },
    {
        "name": "Bob",
        "age": 30,
        "gender": "Male",
        "height_cm": 183,
        "city": "Los Angeles"
    },
    {
        "name": "Charlie",
        "age": 35,
        "gender": "Male",
        "height_cm": 178,
        "city": "Chicago"
    },
    {
        "name": "Diana",
        "age": 28,
        "gender": "Female",
        "height_cm": 162,
        "city": "Houston"
    },
    {
        "name": "Eva",
        "age": 22,
        "gender": "Female",
        "height_cm": 173,
        "city": "Miami"
    }
];

function sortByName(arr){
    return arr.sort((a,b)=>{
        return a.name.localeCompare(b.name)
    })
}

console.log(sortByName(characters))

// function sortByName(arr){
//     return arr.sort((a,b)=>{
//         const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//         const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//     })
// }


