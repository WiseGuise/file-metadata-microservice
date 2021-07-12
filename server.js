var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require("multer")

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

/* User Story #1
You can submit a form that includes a file upload. */
app.post("")
/* User Story #2
The form file input field has the name attribute set to upfile. */

/* User Story #3
When you submit a file, you receive the file name, type, and size in bytes within the JSON response. */










const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

let multer = requir