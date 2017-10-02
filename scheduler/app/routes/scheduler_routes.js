var util = require('util');

module.exports = function(app, db) {
	app.get('/', (req, res) => {
		res.send('Success');
	});
};
