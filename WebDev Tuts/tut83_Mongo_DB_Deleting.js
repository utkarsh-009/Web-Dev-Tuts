// MONGO DB TUTORIAL: Deleting data from Mongo DB database

// deleteOne deletes the document matching the query
// NOTE: In case of multi-document, it deletes the first entry
db.items.deleteOne({price: 22000})

// deleteMany deletes all documents matching the query
db.items.deleteMany({price: 86000})