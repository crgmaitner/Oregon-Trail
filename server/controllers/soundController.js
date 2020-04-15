const sound = require('../models/sound');

var current_sound = sound.Sound();

exports.getSound = function(req, res) {
	return_JSON = {
		'paused': current_sound.paused,
		'time': current_sound.time
	};

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(return_JSON);
};

exports.setSound = function(req, res) {
	current_sound.paused = req.body.paused;
	current_sound.time = req.body.time;
	return_JSON = {
		'paused': current_sound.paused,
		'time': current_sound.time
	};

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(return_JSON);
};

exports.resetSound = function(req, res) {
	current_sound = sound.Sound();
	return_JSON = {
		'paused': current_sound.paused,
		'time': current_sound.time
	};

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(return_JSON);
};