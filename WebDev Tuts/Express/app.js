// Importing express module and creating its app
const express = require("express");
const app = express();

// port
const port = 80;

// get request and respose
app.get("/", (req, res) =>{
    res.send("this is homepage of my first app with express")
});

app.get("/about", (req, res) =>{
    // status(200) is status code like status code 404 not found
    res.status(200).send("this is about section of my first app with express")
});

// post request and response
app.post("/about", (req, res) =>{
    res.send("this is about section of my first app with express")
});

// listening app at port
app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`)
});