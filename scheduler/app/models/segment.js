'use strict';
var mongoose = require('mongoose');

var SegmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});