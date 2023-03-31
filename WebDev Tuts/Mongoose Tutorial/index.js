
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {await mongoose.connect('mongodb://127.0.0.1:27017/ekart');}

/*
// To check if mongoose is connected to db
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log("We are connected");
})
*/

// Defining a Schema
const kittySchema = new mongoose.Schema({
    name: String
});

// functionality added to documents
kittySchema.methods.speak = function speak() {
    const greeting = 'Meow name is ' + this.name
    console.log(greeting);
};

// compiling our schema (name and method property) into a Model.
const Kitten = mongoose.model('kittys', kittySchema);

// Creating documents using above Kitten schema
var fluffy = new Kitten({ name: 'fluffy' });
console.log(fluffy.name);
fluffy.speak(); // "Meow name is fluffy"

// Saving the document in db
fluffy.save(); 
