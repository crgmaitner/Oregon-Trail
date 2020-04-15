const topTen = require('../models/topTen');

top_ten = topTen.getTopTen();

exports.addScore = function(req, res) {
	var score = {
		'playerName': req.body.playerName,
		'playerScore': parseInt(req.body.playerScore),
		'dateEarned': req.body.dateEarned
	};
	top_ten.push(score);

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(score);
};

exports.getTopTen = function(req, res) {
	return_array = [];

	for (t in top_ten) {
		return_array.push({
			'playerName': top_ten[t].playerName,
			'playerScore': top_ten[t].playerScore,
			'dateEarned': top_ten[t].dateEarned,
		})
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(return_array);
};