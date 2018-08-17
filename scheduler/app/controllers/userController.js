var mongoose = require('mongoose'),
	UserModel = require('../models/user'),
	User = mongoose.model('Users');

exports.getUsers = function(req, res){
	User.find({}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	})
};
exports.getUserByUsername = function(req, res){
	User.findOne({'username': req.params.username}, function(err, user){
		if(err)res.json(err);
		res.json(user);
	})
};
exports.newUser =  function(req, res){
	var new_user = new User(req.body);
	new_user.save(function(err, user){
		if(err)res.json(err);
		res.json(user);
	})
};
