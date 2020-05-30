const Express = require("express");
const cors = require('cors');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const DATABASE_NAME = "project";

var app = Express();

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;


app.listen(5000, () => {
	MongoClient.connect("mongodb://comp3753db:uEdrTwqxq6ml6G4wqmlW6vUrvK0RdhGg24vC4rSa6waSTT0sMumsfC8lb7LjAvLb6ef0LxllJAr4bSylp3rxTQ==@comp3753db.documents.azure.com:10255/?ssl=true", function (error, client) {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("students");
        console.log("Connected to `" + DATABASE_NAME + "`!");
	});
});

app.post("/students", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

 app.get("/students", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/students/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});