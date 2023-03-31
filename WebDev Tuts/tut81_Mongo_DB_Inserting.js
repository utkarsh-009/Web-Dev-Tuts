// MONGO DB TUTORIAL: Inserting documents to collections

// To use database
use ekart

// To insert a document in collection 'items'
db.items.insertOne({name: "Asus TUF", price: 86000, rating: 4.4, qty: 100, sold: 90})

// To insert multiple document in collection 'items'
db.items.insertMany([
    {name: "Ps5", price: 54000, rating: 4.8, qty: 50, sold: 50},
    {name: "Xbox Series S", price: 30000, rating: 4.2, qty: 100, sold: 60}
])

// To find/show all documents in collection 'items'
db.find.items()

