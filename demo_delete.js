var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("comp2513");
  var myquery = { last_name: 'Flintstone' };
  dbo.collection("authors").deleteOne(myquery, function(err, res) {
    if (err) throw err;
	console.log(res.deletedCount + " document(s) deleted");
    db.close();
  });
});