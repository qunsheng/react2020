var path = require("path");
var cors = require("cors");
var express = require("express");
const multer = require('multer');

var app = express();

// enable all cors for testing
app.use(cors());

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage }).single('file');

// Public Folder
app.use(express.static('./public'));

app.post('/upload', (req, res) => {
  console.log("================ upload!!!!!!!!!!");
  upload(req, res, (err) => {
    if(err){

      console.log("================== err: ", err)
    } else {
      if(req.file == undefined){
        console.log("================== err: ", "No File Selected!");
      } else {
        console.log("================== file uploaded! ", {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});




app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
