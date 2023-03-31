// MONGO DB TUTORIAL: Searching and Quering data from Mongo DB database

// to view all collections in database
show collections

// returns all the documents having rating 4.8
db.items.find({rating: 4.8})

// returns all the documents having rating greater than or equal to 4.4
db.items.find({rating: {$gte: 4.4}})

// returns all the documents having rating greater than 4.4
db.items.find({rating: {$gt: 4.4}})

// returns all the documents having rating less than 4.4
db.items.find({rating: {$lt: 4.4}})

// AND operator / Multiple field search
// returns all the documents having rating greater than 4 and price greater than 50K
db.items.find({rating: {$gt: 4}, price: {$gt: 50000}})

// OR operator / Multiple field search (p1,p2 are properties): db.items.find({$or: [{p1}, {p2}]})  
// returns every document having rating greater than 4 or price greater than 50K
db.items.find(
    {
        $or: 
        [
            {rating: {$gt: 4}}, 
            {price: {$gt: 50000}}
        ]
    }        
)


