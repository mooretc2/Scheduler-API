var util = require('util');

module.exports = function(app, db) {
	app.get('/free', (req, res) => {
		res.send('Success');
	});
	app.get('/hw', (req, res) => {
		res.send('hw success');
	});
	app.get('/sleep', (req, res) => {
		res.send('sleep success');
	});
	app.get('/food', (req, res) => {
		res.send('food success');
	});
};
