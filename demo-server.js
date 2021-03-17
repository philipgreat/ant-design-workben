var express = require('express')
 , async = require('async')
 , http = require('http');

var app = express();

app.set('port', process.env.PORT || 7002);

app.use(express.static(__dirname + '/public/images'));

app.use(express.bodyParser());

app.post('/Details/',function(request,response,next){

   var keyName1=request.body.key;
   console.log(keyName1);
} );


http.createServer(app).listen(app.get('port'), function(){
 console.log('Express server listening on port ' + app.get('port'));
});

