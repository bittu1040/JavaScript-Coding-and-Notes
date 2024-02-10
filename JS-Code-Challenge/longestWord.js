// find longest word in sentence

const string1= "Welcome to javascript guide";

// using sort function
function longestWord(str){
    const string2= str.split(" ")
    string2.sort((a,b)=>{
        return b.length- a.length
    })
    return string2[0]
}
console.log(longestWord(string1));


// using for loop

function longestWordusingForLoop(str){
    let string3= str.split(" ")
    let longestWord="";
    for( let i=0; i<string3.length; i++){
        if(string3[i].length> longestWord.length){
            longestWord= string3[i]
        }
    }
    return longestWord;
}

console.log(longestWordusingForLoop(string1));
