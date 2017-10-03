var util = require('util');
var duration = require('duration');
var hw, sleep, food, required;
var remhw, remsleep, remfood, remfree;
var totalhw, totalsleep, totalfood, totalrequired, totalfree;
var lastClock, activity;

module.exports = function(app, db) {
	app.get('/free', (req, res) => {
		clockOut();
		res.end();
	});
	app.get('/remfree', (req, res) => {
		res.send('remaining free success');
	});
	app.get('/hw', (req, res) => {
		res.send('hw success');
	});
	app.get('/sethw/:time', (req, res) => {
		hw = req.params.time;
		res.end();
	});
	app.get('/sleep', (req, res) => {
		clockOut();
		newDay();
		res.send('sleep success');
	});
	app.get('/nap', (req, res) => {
		clockOut();
		res.end();
	});
	app.get('/food', (req, res) => {
		clockOut();
		res.end();
	});
	app.get('/setfood/:time', (req, res) => {
		food = req.params.time;
		res.end();
	});
	app.get('/setrequired/:time', (req, res) => {
		required = req.params.time;
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