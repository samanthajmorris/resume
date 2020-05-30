var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("comp2513");
  var myquery = { last_name: "Flintstone" };
  var newvalues = { $set: { email: "flints@gmail.com" } };
  dbo.collection("authors").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
	console.log(res.modifiedCount + " document(s) updated");
    db.close();
  });
});