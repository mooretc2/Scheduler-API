var util = require('util');

module.exports = function(app, db) {
	app.get('/free', (req, res) => {
		res.send('Success');
	});
	app.get('/hw', (req, res) => {
		res.send('hw success');
	});
	app.get('/sethw/:time', (req, res) => {
		res.send('set hw success ' + req.params.time);
	});
	app.get('/sleep', (req, res) => {
		res.send('sleep success');
	});
	app.get('/food', (req, res) => {
		res.send('food success');
	});
	app.get('/setrequired/:time', (req, res) => {
		res.send('set required success ' + req.params.time);
	});
};
