
require('dotenv').config()

var cors = require("cors");
var express = require("express");
var Cosmic = require('cosmicjs');

var cosmicImpl = require('./cosmicImpl');

const cosmicConfig = {
  slug: process.env.slug,
  read_key: process.env.read_key,
  write_key: process.env.write_key
};

cosmicImpl(cosmicConfig, process.env.user_slug);

var app = express();

// enable all cors for testing
app.use(cors());


app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
