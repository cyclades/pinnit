var http = require('http');
var express = require('express');
var jade = require('jade');
var sass = require('sass');
var app = express.createServer();

app.set('view options',{layout: false});
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/jsrv/', function(req, res){
  var reddit = {host: 'www.reddit.com',
                port: 80,
                path: '/r/EarthPorn/.json'};

  http.get(reddit, function(response) {
   var bodyArr = [];
   response.on('data', function (chunk) {
     bodyArr.push(chunk.toString());
   });
   response.on('end', function () {
     var jsonBody = JSON.parse(bodyArr.join(''))
     jsonBody = jsonBody.data.children;
     res.send(jsonBody);
   });
  });

});

app.get('/', function(req, res) {
  res.render('index.jade');
});


app.listen(3000);
