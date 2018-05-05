var MongoClient = require('mongodb').MongoClient;
 
exports.cacheCollection = MongoClient.connect('mongodb://127.0.0.1:27017/cache', function(err, db) {
        if(err)
            throw err;
        console.log("connected to the mongoDB !");
        return db.collection('cache');
});