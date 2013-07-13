\var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content=new Buffer();
  fs.readSync('index.html', content, 0, 100, null, function(err, bytesRead, content){
    if(err) throw err;

  });
  response.send(bontent.toString('utf8', 0, content.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
