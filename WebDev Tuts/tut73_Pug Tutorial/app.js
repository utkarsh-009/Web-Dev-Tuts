const express = require("express"); // Importing express module and creating its app
const app = express();
const path = require("path"); // path module to view directory
const port = 80; // port

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // express.static('foldername')


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // set the template engine as pug
app.set('views', path.join(__dirname ,'views')); // Set the views directory

// ENDPOINTS
app.get('/',(req,res) => {
    const con = "This is the best PUG tutorial"
    const params = {'title': 'PUG Tutorial @CWH', 'content' : con}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{ // listening app at port
    console.log(`This application started successfully on port ${port}`)
});