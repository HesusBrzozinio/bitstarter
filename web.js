\var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffLength = 64*1024;
  var buff = new Buffer(buffLength);
  var fdr = fs.openSync('index.html');
  var bytesRead = 1;
  var pos = 0;

  while(bytesRead > 0){
   bytesRead = fs.readSync(fdr, buff, 0, buffLength, pos);
   pos += bytesRead;
  }

  fs.closeSync(fdr);
  
  response.send(buff.toString('utf8', 0, buff.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
