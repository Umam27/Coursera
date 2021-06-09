const MongoClient=require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
const dboper=require('./operations');

MongoClient.connect(url)
.then((client) => {

    assert.equal(err, null);
    console.log('Connected correctly to server ');
    

    const db=client.db(dbname);

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},"dishes")
        .then((result) => {
        console.log("Insert Document:\n", result.ops);
    dboper.findDocuments(db, "dishes")
        .then((docs) => {
        console.log("Found Documents:\n", docs);

    dboper.updateDocument(db, { name: "Vadonut" }, "dishes", { description: "Updated Test" })
        .then( (result) => {
        console.log("Updated Document:\n", result.result);
    dboper.findDocuments(db, "dishes", (docs) => {
        console.log("Found Updated Documents:\n", docs);
    db.dropCollection("dishes")
        .then((result) => {
        console.log("Dropped Collection: ", result);
            client.close();
                    });
                });
            });
        });
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));