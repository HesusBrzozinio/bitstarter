var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content;
  fs.readFile('./index.html', function(err, data){
    if(err) throw err;
    content = data;
  });
  response.send("x");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
