var MongoClient = require('mongodb').MongoClient;
 
exports.cacheCollection = async () => {
    await MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
        if(err)
            throw err;
        var db = client.db('cache');
        console.log("connected to the mongoDB !");
        return db.collection('cache');
    });
};