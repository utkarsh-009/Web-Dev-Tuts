// Importing express module and creating its app
const express = require("express");
const app = express();

// path module to view directory
const path = require("path");

// port
const port = 80;

// serving static file
app.use('/static', express.static('static')) // express.static('foldername')

// set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname ,'views'));

// Our Pug Demo Endpoint
app.get("/demo", (req,res)=> {
    res.status(200).render('demo', { title: 'Hey Hello!', message: 'Hello there! This is Pug Template Engine Tutorial' })
})

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