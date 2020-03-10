var path = require("path");
var cors = require("cors");
var express = require("express");

var data_dir = path.join(__dirname, "./data");
var app = express();

// enable all cors for testing
app.use(cors());

// serving the static files from data directory
app.use("/api/data", express.static(data_dir));

app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
