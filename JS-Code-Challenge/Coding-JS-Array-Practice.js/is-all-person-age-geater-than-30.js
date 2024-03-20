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

function isAllPersonAgeGreaterThan30(arr) {
    return arr.every((data)=>{
        return data.age>30;
    })
}

console.log(isAllPersonAgeGreaterThan30(characters))