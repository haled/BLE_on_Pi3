var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
  // put end point code here
});

var port = 5011;
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening on ' + host + ' and ' + port);
});