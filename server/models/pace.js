class Pace {
	name = '';
	miles = 0;
	healthChange = 0;

	constructor(name, miles, healthChange) {
		this.name = name;
		this.miles = miles;
		this.healthChange = healthChange;
	}
}

var steady = new Pace('Steady', 20, 0);
var strenuous = new Pace('Strenuous', 30, -3);
var grueling = new Pace('Grueling', 35, -8);
var resting = new Pace('Resting', 0, 5);

exports.Steady = steady;
exports.Strenuous = strenuous;
exports.Grueling = grueling;
exports.Resting = resting;