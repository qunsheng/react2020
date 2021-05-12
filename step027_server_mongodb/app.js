
require('dotenv').config();
var cors = require("cors");
var express = require("express");

/**
 * Mongodb connect options
 */
 const CONNECT_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}`;

// Database Name
const dbName = process.env.DB_NAME;
const client = new MongoClient(url, CONNECT_OPTIONS);
// Use connect method to connect to the server
client.connect(function(err) {
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // Get the documents collection
  const collection = db.collection(process.env.COLLECTION_NAME);

  console.log("collection: ", collection);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
      console.log('Found the following records');
      console.log("docs: ", docs);
  });

  client.close();
});

var app = express();

// enable all cors for testing
app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
