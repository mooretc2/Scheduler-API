'use strict';
var mongoose = require('mongoose');

//First pass at a viable db schema, will use after testing server
/*
var UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	day: [{
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
		id: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	}]
});
*/
var UserSchema = new mongoose.Schema({
	contents: String
});

module.exports = mongoose.model('Users', UserSchema);
