'use strict';
var util = require('util');
var duration = require('duration');

//remove this when it inevitably moves to middleware
var mongoose = require('mongoose'),
	UserModel = require('../models/user'),
	User = mongoose.model('Users');

module.exports = function(app, db) {
	app.get('/', function(req, res){
		User.find({}, function(err, user){
			if(err) res.send(err);
			res.json(user);
		})
	})
	app.post('/', function(req, res){
		var new_user = new User(req.body);
		new_user.save(function(err, user){
			if(err)res.json(err);
			res.json(user);
		})
	})
};