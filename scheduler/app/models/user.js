'use strict';
var mongoose = require('mongoose');
var Segment = require('./segment');

//First pass at a viable db schema, will use after testing server
/*
var UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	days: [{
		date: {
			type: Date,
			default: Date.now
		},
		segments: [{
			id: {
				type: Number,
				timestamps: {
					createdAt: "start",
					updatedAt: "end"
				}
			}
		}]
	}],
	segments: [{
		name: {
			type: String,
			required: true
		}
	}]
});
*/
var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	segments: [Segment]
});

module.exports = mongoose.model('Users', UserSchema);
