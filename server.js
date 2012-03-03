var http = require('http');
var express = require('express');
var jade = require('jade');
var app = express.createServer();

app.set('view options',{layout: false});
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/jsrv/', function(req, res){
  var reddit = {host: 'www.reddit.com',
                port: 80,
                path: '/.json'};

  http.get(reddit, function(response) {
   var bodyArr = [];
   response.on('data', function (chunk) {
     bodyArr.push(chunk.toString());
   });
   response.on('end', function () {
     var jsonBody = JSON.parse(bodyArr.join(''))
     res.send(jsonBody.data.children);
   });
  });

});

app.get('/', function(req, res) {
  res.render('index.jade');
});


app.listen(3000);
