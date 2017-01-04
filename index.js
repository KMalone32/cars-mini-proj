var express = require('express');
var bodyParser = require('body-parser');

var carCtrl = require('./controller/carCtrl.js');

var app = express();

app.use(bodyParser.json());

app.get('/cars', carCtrl.index);
app.get('/cars/:id', carCtrl.show);
app.post('/cars', carCtrl.create);
app.put('/cars/:id', carCtrl.update);
app.delete('/cars/:id', carCtrl.destroy);

var port = 3001;
app.listen(port, function() {
  console.log("listening to port", port);
});
