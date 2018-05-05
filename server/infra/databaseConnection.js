var MongoClient = require('mongodb').MongoClient;
 
exports.cacheCollection = async function () {
    return new Promise( function (resolve, reject) { 
            MongoClient.connect('mongodb://127.0.0.1:27017', async function(err, client) {
            if(err)
                throw err;
            var db = await client.db('cache');
            console.log("connected to the mongoDB !");
            const conn = await db.collection('cache');
            resolve(conn);
        });
    });
};