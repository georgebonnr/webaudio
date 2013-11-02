var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
server.listen(8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});