// Input: "cats AND*Dogs-are Awesome"
// Output: catsAndDogsAreAwesome

// Input: "My name is Bittu Kumar"
// Output: myNameIsBittuKumar


function convertToCamelCase(input) {
    let regexPattern = /[^a-zA-Z0-9]/g; 
    let words = input.split(regexPattern);
    
    for (let i = 0; i < words.length; i++) {
        if (i !== 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    
    return words.join("");
}

console.log(convertToCamelCase("cats AND*Dogs-are Awesome"))