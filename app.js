var express = require("express");
var app = express();
var path = require("path");

app.use('/', express.static(path.join(__dirname, './')));

app.listen(3000, function() {
    console.log('example app listening on port 3000  open http://localhost:3000/loader-example1 ');
});
