class Weather {
	id = 0;
	type = '';
	healthChange = 0;
	mileChange = 0.0;
	probability = 0.0;

	constructor(id, type, healthChange, mileChange, probability) {
		this.id = id;
		this.type = type;
		this.healthChange = healthChange;
		this.mileChange = mileChange;
		this.probability = probability;
	}
}

weathers = [
	new Weather(0, 'Very Hot', -8, 0.7, 0.1),
	new Weather(1, 'Hot', -3, 0.9, 0.1),
	new Weather(2, 'Warm', 1, 1.0, 0.2),
	new Weather(3, 'Cool', 1, 0.95, 0.1),
	new Weather(4, 'Cold', -5, 0.8, 0.1),
	new Weather(5, 'Very Cold', -12, 0.7, 0.1),
	new Weather(6, 'Rain', -4, 0.6, 0.1),
	new Weather(7, 'Heavy Rain', -8, 0.4, 0.05),
	new Weather(8, 'Snow', -15, 0.3, 0.05),
	new Weather(9, 'Blizzard', -30, 0.1, 0.05),
	new Weather(10, 'Heavy Fog', -3, 0.5, 0.05)
]

exports.VeryHot = weathers[0];
exports.Hot = weathers[1];
exports.Warm = weathers[2];
exports.Cool = weathers[3];
exports.Cold = weathers[4];
exports.VeryCold = weathers[5];
exports.Rain = weathers[6];
exports.HeavyRain = weathers[7];
exports.Snow = weathers[8];
exports.Blizzard = weathers[9];
exports.HeavyFog = weathers[10];

exports.getWeather = function() {
	var best_random = 0.0;
	var best_weather = weathers[0]
	for (i=0; i<11; i++) {
		var random = Math.random() * weathers[i].probability;
		if (random > best_random) {
			best_random = random;
			best_weather = weathers[i];
		}
	}
	
	return best_weather;
}