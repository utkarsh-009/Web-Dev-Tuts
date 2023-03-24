const express = require("express"); // Importing express module and creating its app
const app = express();
const fs = require("fs"); // files module
const path = require("path"); // path module to view directory
const port = 80; // port

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // express.static('foldername')
app.use(express.urlencoded()) // helps in bringing form data to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // set the template engine as pug
app.set('views', path.join(__dirname ,'views')); // Set the views directory

// ENDPOINTS
// GET
app.get('/',(req,res) => {
    const con = "This is the best PUG tutorial"
    const params = {'title': 'PUG Tutorial @CWH', 'content' : con}
    res.status(200).render('index.pug', params);
})
// POST 
app.post('/', (req, res)=>{
    fullname = req.body.fullname
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${fullname}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    console.log(req.body)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})

// START THE SERVER
app.listen(port, ()=>{ // listening app at port
    console.log(`This application started successfully on port ${port}`)
});