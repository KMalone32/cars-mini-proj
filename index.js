var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config.json');

var carCtrl = require('./controller/carCtrl.js');
var cartCtrl = require('./controller/cartCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.get('/cars', carCtrl.index);
app.get('/cars/:id', carCtrl.show);
app.post('/cars', carCtrl.create);
app.put('/cars/:id', carCtrl.update);
app.delete('/cars/:id', carCtrl.destroy);

app.get('/cart', cartCtrl.index);
app.post('/cart', cartCtrl.create);

var port = config.port;
app.listen(port, function() {
  console.log("listening to port", port);
});
