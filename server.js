'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cfg = require('./config');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(cfg.db.protocol+cfg.db.uri+cfg.db.database, {useNewUrlParser: true}, function(error){
	console.log("DB connection error: " + error);
	process.exit(1);
});
var UserSchema = require('./scheduler/app/models/user');
var User = mongoose.model('Users');
var db = mongoose.connection;
db.on('error', function(error){
	console.log("DB error: " + error);
	process.exit(1);
});
db.once('open', function(){
	console.log("connected to database");
});

const port = 4000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require('./scheduler/app/routes')(app, {});
app.listen(port, () => {
	console.log('We are live on port ' + port);
});
