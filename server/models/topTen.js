class TopTen {
	playerName = '';
	playerScore = 0;
	dateEarned = '';

	constructor(playerName, playerScore, dateEarned) {
		this.playerName = playerName;
		this.playerScore = playerScore;
		this.dateEarned = dateEarned;
	}
};

top_ten = [
	new TopTen('Craig', 10, 'February 25, 2020'),
	new TopTen('Craig', 50, 'February 25, 2020'),
	new TopTen('Craig', 20, 'February 25, 2020'),
	new TopTen('Craig', 40, 'February 25, 2020'),
	new TopTen('Craig', 35, 'February 25, 2020'),
	new TopTen('Craig', 50, 'February 25, 2020'),
	new TopTen('Craig', 25, 'February 25, 2020'),
	new TopTen('Craig', 20, 'February 25, 2020'),
	new TopTen('Craig', 30, 'February 25, 2020'),
	new TopTen('Craig', 10, 'February 25, 2020')
];

exports.getTopTen = function() {
	return top_ten;
};