var util = require('util');
var duration = require('duration');
var hw, sleep, food, required;
var remhw, remsleep, remfood, remfree;
var totalhw, totalsleep, totalfood, totalrequired, totalfree;
var lastClock, activity;

module.exports = function(app, db) {
	app.get('/free', (req, res) => {
		clockOut();
		activity = 'free';
		res.end();
	});
	app.get('/remfree', (req, res) => {
		res.send('remaining free success');
	});
	app.get('/hw', (req, res) => {
		clockOut();
		activity = 'hw';
	});
	app.get('/sethw/:time', (req, res) => {
		hw = req.params.time;
		res.end('hw = ' + req.params.time);
	});
	app.get('/sleep', (req, res) => {
		clockOut();
		newDay();
		activity = 'sleep';
		res.end(activity);
	});
	app.get('/nap', (req, res) => {
		clockOut();
		activity = 'sleep';
		res.end(activity);
	});
	app.get('/food', (req, res) => {
		clockOut();
		activity = 'food';
		res.end(activity);
	});
	app.get('/setfood/:time', (req, res) => {
		food = req.params.time;
		res.end('food = ' + req.params.time);
	});
	app.get('/setrequired/:time', (req, res) => {
		required = req.params.time;
		res.end('required = ' + req.params.time)
	});
};

function clockOut(){
	if(activity == 'sleep')
		totalSleep += getDiff();
	if(activity == 'food')
		totalFood += getDiff();
	if(activity == 'hw')
		totalhw += getDiff();
	if(activity == 'required')
		totalrequired += getDiff();
	if(activity == 'free')
		totalfree += getDiff();
};

function getDiff() {
	var diff = new duration(lastClock, Date.now());
	lastClock = Date.now();
	return diff.hour * 60 + diff.minute;
};

function newDay() {
	return;
}