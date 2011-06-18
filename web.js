var express = require('express');

var app = express.createServer();

app.get('/', function(req, res) {
    res.send('HerokuでNode.jsとExpressを使ってHello world!');
});

var port = process.env.PORT || 3000;
app.listen(port);

