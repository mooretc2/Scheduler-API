'use strict';
var userController = require('../controllers/userController');

module.exports = function(app, db) {
	app.get('/users', userController.getUsers);
	app.get('/users/:username', userController.getUserByUsername);
	app.post('/', (req, res) => {
		userController.newUser(req.body)
			.then(response => res.json(response))
			.catch(err => res.json(err));
	});
};