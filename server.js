var express = require('express');
var cors = require('cors');
require('dotenv').config()


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

var multer = require("multer")

app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => { 
  let resObject = {}
  
/* User Story #3 - When you submit a file, you receive the file name, 
type, and size in bytes within the JSON response
  resObject['name'] = req.file.originalname
  resObject['type'] = req.file.mimetype
  resObject['size'] = req.file.size + " bytes"
  // console.log(req.file)
  res.json(resObject)
})

