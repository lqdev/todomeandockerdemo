var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var config = require('./config');
var api = require('./api');

var PORT = process.env.PORT || 3000;

var app = express();

mongoose.connect(config.MONGODB_URI);

//Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.get('/',(req,res) => {
    res.render('index.html');
});

app.use('/api', api);

app.listen(PORT,(err) => {
    if(!err) {
        console.debug(`App listening on port ${PORT}`);
    }
});