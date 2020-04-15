const gameData = require('../models/gameData');
const terrain = require('../models/terrain');
const weather = require('../models/weather');
const pace = require('../models/pace');

var game_data = gameData.newData();
game_data.currentPace = pace.Steady;
game_data.currentWeather = weather.getWeather();
game_data.currentTerrain = terrain.Mountains;

function getGameDataJSON() {
	if (game_data.currentWeather == weather.HeavyRain) {
		game_data.messages.push('There is heavy rain.');
	}
	else if (game_data.currentWeather == weather.Snow) {
		game_data.messages.push('There is snow.');
	}
	else if (game_data.currentWeather == weather.Blizzard) {
		game_data.messages.push('There is a blizzard.');
	}
	else if (game_data.currentWeather == weather.HeavyFog) {
		game_data.messages.push('There is heavy fog.');
	}

	var health_state = 'Good';
	if (game_data.groupHealth >= 80) {
		health_state = 'Good';
	}
	else if (game_data.groupHealth >= 50) {
		health_state = 'Fair';
	}
	else if (game_data.groupHealth >= 20) {
		health_state = 'Poor';
	}
	else {
		health_state = 'Very Poor';
	}

	var num_alive = 5;
	for (i=0; i<game_data.playerStatus.length; i++) {
		if (!game_data.playerStatus[i]) {
			num_alive--;
		}
	}

	if (game_data.daysOnTrail > 45) {
		game_data.messages.push('Day limit reached!');
		game_data.gameActive = false;
	}
	else if (num_alive <= 0) {
		game_data.messages.push('Everyone died!');
		game_data.gameActive = false;
	}
	else if (game_data.milesTraveled >= 500) {
		var additive = 45 - game_data.daysOnTrail;
		var health = Math.max(0, game_data.groupHealth);
		var score = health + additive;
		game_data.playerScore = score;
		game_data.isWinner = true;
		game_data.messages = [
			'You win!',
			'Score: ' + game_data.playerScore.toString()
		];
		game_data.gameActive = false;
	}
	
	game_data_JSON = {
		'daysOnTrail': game_data.daysOnTrail,
		'milesTraveled': game_data.milesTraveled,
		'playerNames': game_data.playerNames,
		'groupHealth': health_state,
		'playerStatus': num_alive,
		'currentPace': game_data.currentPace,
		'currentWeather': game_data.currentWeather,
		'currentTerrain': game_data.currentTerrain,
		'messages': game_data.messages,
		'gameActive': game_data.gameActive,
		'isWinner': game_data.isWinner,
		'playerScore': game_data.playerScore
	} 

	return game_data_JSON;
}

exports.getData = function() {
	// return game_data object
	return game_data
};

exports.resetGame = function(req, res) {
	// reset game
	game_data = gameData.newData();
	game_data.currentPace = pace.Steady;
	game_data.currentWeather = weather.getWeather();
	game_data.currentTerrain = terrain.Mountains;

	res.setHeader('Content-Type', 'text/plain');
	res.send('ok');
};

exports.getGameData = function(req, res) {
	// return json of the game data 
	game_data_JSON = getGameDataJSON();

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.send(game_data_JSON);
};

exports.changePace = function(req, res) {
	if (game_data.currentPace == pace.Resting) {
		game_data.currentPace = pace.Steady;
	}
	else if (game_data.currentPace == pace.Steady) {
		game_data.currentPace = pace.Strenuous;
	}
	else if (game_data.currentPace == pace.Strenuous) {
		game_data.currentPace = pace.Grueling;
	}
	else {
		game_data.currentPace = pace.Resting;
	}

	res.setHeader('Content-Type', 'text/plain');
	res.send(game_data.currentPace.name);
};

exports.updateGame = function(req, res) {
	// Reset message
	game_data.messages = [];

	// Update days on trail
	game_data.daysOnTrail += 1;

	// Update miles based on weather
	var movement = parseInt(game_data.currentPace.miles * game_data.currentWeather.mileChange)
	game_data.milesTraveled += movement;
	game_data.milesTraveled = Math.min(500, game_data.milesTraveled);

	// Check for deaths
	if (game_data.groupHealth < 50) {
		for (i=0; i<game_data.playerStatus.length; i++) {
			if (game_data.playerStatus[i] == true && Math.random() <= 0.03) {
				game_data.playerStatus[i] = false;
				game_data.messages.push(game_data.playerNames[i] + ' died.');
			}
		}
	}
	else if (game_data.groupHealth < 20) {
		for (i=0; i<game_data.playerStatus.length; i++) {
			if (game_data.playerStatus[i] == true && Math.random() <= 0.10) {
				game_data.playerStatus[i] = false;
				game_data.messages.push(game_data.playerNames[i] + ' died.');
			}
		}
	}

	// Update health
	game_data.groupHealth += game_data.currentPace.healthChange;
	game_data.groupHealth += game_data.currentWeather.healthChange;

	// Update weather
	game_data.currentWeather = weather.getWeather();

	// Update terrain
	if(game_data.milesTraveled >= 400) {
		if (game_data.currentTerrain != terrain.Desert) {
			game_data.milesTraveled = 400;
			game_data.currentTerrain = terrain.Desert;
			game_data.messages.push('You have reached the Desert.');
		}
	}
	else if(game_data.milesTraveled >= 300) {
		if (game_data.currentTerrain != terrain.Forest) {
			game_data.milesTraveled = 300;
			game_data.currentTerrain = terrain.Forest;
			game_data.messages.push('You have reached the Forest.');
		}
	}
	else if(game_data.milesTraveled >= 200) {
		if (game_data.currentTerrain != terrain.Plains) {
			game_data.milesTraveled = 200;
			game_data.currentTerrain = terrain.Plains;
			game_data.messages.push('You have reached the Plains.');
		}
	}
	else if(game_data.milesTraveled >= 100) {
		if (game_data.currentTerrain != terrain.Grasslands) {
			game_data.milesTraveled = 100;
			game_data.currentTerrain = terrain.Grasslands;
			game_data.messages.push('You have reached the Grasslands.');
		}
	}
	else {
		game_data.currentTerrain = terrain.Mountains;
	}

	game_data_JSON = getGameDataJSON();

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.send(game_data_JSON);
};