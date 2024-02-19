// Copy text in JavaScript

// writeText method is used to copy clipboard content and it return Promise if resolve then text is copied otherwise It rejects. 
// A Promise that is resolved once the clipboard's contents have been updated.
// The clipboard contents are only accessible to the user and can be pasted outside due to security reason. 
// This means copied data can't be useful in your program. You can't print this in your console. 


let content = document.getElementById("content").textContent;
let copyButton = document.getElementById("copy_content");

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(content)
        .then((data) => {
            console.log(data)
            console.log("Text copied to clipboard successfully.");
        })
        .catch(err => {
            console.error("Unable to copy text to clipboard:", err);
        });
});