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



function getAllNames(characters) {
    return characters.map(char => char.name);
}

console.log(getAllNames(characters));