var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


app.get('/message.txt', function (req, res) {
   res.sendFile( __dirname + "/" + "message.txt" );
})

var server = app.listen(8081,'0.0.0.0', function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})