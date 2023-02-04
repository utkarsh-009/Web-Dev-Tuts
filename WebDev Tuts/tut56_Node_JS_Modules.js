// Node js module to read and write file: Use nodejs documentation for more modules

const fs = require("fs")
let text = fs.readFileSync("read.txt","utf-8") // reading file
text = text.replace("JS","JavaScript")

console.log("The content of the file is") // file content
console.log(text)

console.log("Creating a new file.... ")  
fs.writeFileSync("readme.txt", text); // writing file