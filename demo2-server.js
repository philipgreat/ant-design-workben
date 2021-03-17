var express = require('express');
var app = express.createServer();

app.use(express.bodyParser());

app.post('/', function(req, res){
    console.dir(req.body);
    res.send("test");
}); 

app.listen(3000);

