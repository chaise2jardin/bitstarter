var express = require('express');

var app = express.createServer(express.logger());
var buf = new Buffer(256);
var len;

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  len=buf.write(data);
});

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
