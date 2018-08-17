'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://scheduler-db:27017/scheduler-db', {
	useNewUrlParser: true
});
var UserSchema = require('./scheduler/app/models/user');
var User = mongoose.model('Users');
var db = mongoose.connection;
db.on('error', function(){
	console.log("Something went wrong");
	console.error.bind(console, "connection error");
	process.exit(1);
})
db.once('open', function(){
	console.log("connected to database");
	var new_user = new User({username: "username"});
	new_user.save(function(err, user){
		if(err) console.log("Error adding user");
		console.log(user);
	});
})

const port = 4000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require('./scheduler/app/routes')(app, {});
app.listen(port, () => {
	console.log('We are live on port ' + port);
});
