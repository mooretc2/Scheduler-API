'use strict';
var userController = require('../controllers/userController');

module.exports = function(app, db) {
	app.get('/users', userController.getUsers);
	app.get('/users/:username', userController.getUserByUsername);
	app.post('/', userController.newUser);
};