var express = require('express');
var app = express();
var port = 3030;

var path = require('path');

app.get('/', function(req, res){
    res.send('<a href="/hello">Hello Page</a>');
});

app.get('/hello', function(req, res){
    res.send('Hello AA17');
});

app.get('/comsi', function(req, res){
    res.send('Hello Comsi!');
});

app.get('/aa17', function(req, res){
    res.send('Hello AA17, Comsi! My first express server!!!');
});

app.get('/naver', function(req, res){
    res.send('<a href = "http://www.naver.com">Go to naver</a>');
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(port, function(){
    console.log('Listening on port %d', server.address().port);
});