const schedRoutes = require('./scheduler_routes');

module.exports = function(app, db) {
	schedRoutes(app, db);
	//other future routes go here
};
