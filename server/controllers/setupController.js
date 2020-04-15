var gameController = require('./gameController');

exports.getProfession = function(req, res) {
	var profession = gameController.getData().playerProfession;

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send({'profession': profession});
};

exports.saveProfession = function(req, res) {
	var profession = req.body.profession;
	console.log(profession);

	if (profession == 'Banker') {
		gameController.getData().playerProfession = profession;
		gameController.getData().playerMoney = 1600;
	}
	else if (profession == 'Carpenter') {
		gameController.getData().playerProfession = profession;
		gameController.getData().playerMoney = 800;
	}
	else if (profession == 'Farmer') {
		gameController.getData().playerProfession = profession;
		gameController.getData().playerMoney = 400;
	}
	else {
		res.status(400);
	}

	res.setHeader('Content-Type', 'text/plain');
	res.send(gameController.getData().playerProfession);
};

exports.getPlayerName = function(req, res) {
	var index = req.params.id;
	var player_name = gameController.getData().playerNames[index]

	res.setHeader('Content-Type', 'text/plain');
	res.send(player_name);
};

exports.getAllPlayerNames = function(req, res) {
	var player_names = gameController.getData().playerNames

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(player_names);
};

exports.savePlayerName = function(req, res) {
	console.log(req.params);
	console.log(req.body);
	var player_name = req.body.name;
	var index = req.params.id;

	gameController.getData().playerNames[index] = player_name;

	res.setHeader('Content-Type', 'text/plain');
	res.send(gameController.getData().playerNames[index]);
};

exports.getStartMonth = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(gameController.getData().startMonth)
};

exports.saveStartMonth = function(req, res) {
	var start_month = req.body.start_month;

	gameController.getData().startMonth = start_month;

	res.setHeader('Content-Type', 'text/plain');
	res.send(gameController.getData().startMonth);
};