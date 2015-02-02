/* jshint node: true, strict: false	*/

var express = require('express');
var SSE = require('express-sse');
var app = express();

var sse = new SSE();

app.use(express.static(__dirname));



app.get('/stream', sse.init);


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

setInterval(function() {
    sse.send('Some data sent from the server. cool, huh ?');
}, 1000);


app.listen(3000, function() {
    console.log('Server started');
});