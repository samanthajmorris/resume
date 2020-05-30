var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("comp2513");
  var myobj = { first_name: "Fred", last_name: "Flintstone", email: "jamie.symonds@gmail.com", birthdate: "2000-01-01" };
  dbo.collection("authors").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + " document(s) inserted");
	console.log("new document id: " + myobj._id)
    db.close();
  });
});