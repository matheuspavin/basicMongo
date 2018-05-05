dbConnection = require('./databaseConnection');


const cacheCollection = dbConnection.cacheCollection;
console.log(cacheCollection)

const insert = cacheCollection.insert({name: "testCache", description: "testing the insert of the cache"}, function(err, result) {
    if(err)
        throw err;
 
    console.log("entry saved");
});

const cursor = cacheCollection.find();
cursor.each(function(err, doc) {
    if(err)
        throw err;
    if(doc==null)
        return;
 
    console.log("document find:");
    console.log(doc.name);
    console.log(doc.company.employed);
});

module.exports = {
    db,
    insert,
    cursor
}