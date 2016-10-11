//External Deps
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//Internal Deps
var dbutil = require('./controllers/db');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/project'));

app.get('/api/posts', function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  //Search the model in DB and send it
  dbutil.findmodel(req, res);

});

app.post('/api/posts', function (req, res, next) {

  //Remove previous model 
  dbutil.removemodel();

  //Save new one
  //console.log("on server");
  //console.log(res);
  dbutil.savemodel(req, res, next);

});

app.get('/', function (req, res) {
  res.sendfile('index.html');
});



/* ************************ Config Over ********************** */



//Starting the server
var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('Server at : ' + app.get('port'));
});


//Init Socket IO
var io = require('socket.io').listen(server);
require('./controllers/sockets')(io);

