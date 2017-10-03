var util = require('util');
var duration = require('duration');
var hw, sleep, food, required;
var remhw, remsleep, remfood;
var totalhw, totalsleep, totalfood, totalrequired, totalfree;
var lastClock, activity;

module.exports = function(app, db) {
	app.get('/free', (req, res) => {
		res.send('Success');
	});
	app.get('/remfree', (req, res) => {
		res.send('remaining free success');
	});
	app.get('/hw', (req, res) => {
		res.send('hw success');
	});
	app.get('/sethw/:time', (req, res) => {
		clockOut();
		res.send('set hw success ' + req.params.time);
	});
	app.get('/sleep', (req, res) => {
		res.send('sleep success');
	});
	app.get('/food', (req, res) => {
		res.send('food success');
	});
	app.get('/setfood/:time', (req, res) => {
		res.send('set food success ' + req.params.time);
	});
	app.get('/setrequired/:time', (req, res) => {
		res.send('set required success ' + req.params.time);
	});
};

function clockOut(){
	if(activity == 'sleep'){
		totalSleep += getDiff();
		if(Date.now().hour >= 22 || Date.now().hour <= 10){
			newDay();
		}
	}
	if(activity == 'food')
		totalFood += getDiff();
	if(activity == 'hw')
		return hw;
	if(activity == 'required')
		return required;
};

function getDiff() {
	var diff = new duration(lastClock, Date.now());
	lastClock = Date.now();
	return diff.hour * 60 + diff.minute;
};

function newDay() {
	return;
}