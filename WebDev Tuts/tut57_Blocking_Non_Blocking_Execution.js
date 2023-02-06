// Synchronous or blocking (waits until the function completes its execution)
// - line by line execution

// Asynchronous or non-blocking (does not wait until function completes executes)
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
