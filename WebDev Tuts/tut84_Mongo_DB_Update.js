// MONGO DB TUTORIAL: Updating data in Mongo DB database


// updateOne updates the first document having name: "Ps5" and sets its price to 49k
db.items.updateOne({name: "Ps5"}, {$set: {price: 49000}})

// updateOne updates the all the documents having name: "Ps5" and sets its price to 49k
db.items.updateMany({name: "Xbox Series S"}, {$set: {price: 25000, rating: 4}})