class GameData {
	playerNames = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];
	playerStatus = [true, true, true, true, true];
	playerProfession = undefined;
	playerMoney = 0;
	startMonth = 0;
	milesTraveled = 0;
	groupHealth = 100;
	currentPace = undefined;
	daysOnTrail = 0;
	currentWeather = undefined;
	currentTerrain = undefined;
	messages = ['From Independence it is 500 miles to Oregon.'];
	gameActive = true;
	isWinner = false;
	playerScore = 0;
};

exports.newData = function() {
	return new GameData();
};