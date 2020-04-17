var gameController = require('./gameController');

var prof_screen = '<img id="border_image" src="/images/border.png">';
prof_screen += '<div id="setup_options">';
prof_screen += '<p class="oregon_text">Many kinds of people made the trip to Oregon.</p>';
prof_screen += '<p class="oregon_text">You may:</p>';
prof_screen += '<table>';
prof_screen += '<tr class="normal_button" id="button_1">';
prof_screen += '<td>&nbsp;&nbsp;1.&nbsp;</td>';
prof_screen += '<td>Be a banker from Boston</td>';
prof_screen += '</tr>';
prof_screen += '<tr class="normal_button" id="button_2">';
prof_screen += '<td>&nbsp;&nbsp;2.&nbsp;</td>';
prof_screen += '<td>Be a carpenter from Ohio</td>';
prof_screen += '</tr>';
prof_screen += '<tr class="normal_button" id="button_3">';
prof_screen += '<td>&nbsp;&nbsp;3.&nbsp;</td>';
prof_screen += '<td>Be a farmer from Illinois</td>';
prof_screen += '</tr>';
prof_screen += '<tr class="normal_button" id="button_4">';
prof_screen += '<td>&nbsp;&nbsp;4.&nbsp;</td>';
prof_screen += '<td>What\'s the difference?</td>';
prof_screen += '</tr>';
prof_screen += '</table>';
prof_screen += '</div>';
prof_screen += '<img id="border_image" src="/images/border.png">';
prof_screen += '<div id="bottom_text">';
prof_screen += '<p class="menu_button" id="fade_text">Press SPACE BAR to return to Main Menu</p>';
prof_screen += '</div>';

var name_screen = '<img id="players_image" src="/images/players.png">';
name_screen += '<div id="name_options">';
name_screen += '<form action="javascript:void(0);" onsubmit="putName(this)">';
name_screen += '<p class="oregon_text">What is the first name of the wagon leader?';
name_screen += '<input type="text" id="name_0">';
name_screen += '</p>';
name_screen += '</form>';
name_screen += '</div>';

var names_screen = '<img id="players_image" src="/images/players.png">';
names_screen += '<div id="names_options">';
names_screen += '<p class="oregon_text">What are the first names of the four other members in your party?</p>';
names_screen += '<form action="javascript:void(0);" onsubmit="putNames(this)">';
names_screen += '<p class="oregon_text">1. <input type="text" id="name_1"></p>';
names_screen += '<p class="oregon_text">2. <input type="text" id="name_2"></p>';
names_screen += '<p class="oregon_text">3. <input type="text" id="name_3"></p>';
names_screen += '<p class="oregon_text">4. <input type="text" id="name_4"></p>';
names_screen += '<p class="oregon_text">5. <input type="text" id="name_5"></p>';
names_screen += '<input type="submit">';
names_screen += '</form>';
names_screen += '</div>';
names_screen += '<div>';
names_screen += '<p class="menu_button" id="fade_text">(Enter names or press ENTER)</p>';
names_screen += '</div>';

var month_screen = '<img id="border_image" src="/images/border.png">';
month_screen += '<div id="month_options">';
month_screen += '<p class="oregon_text">It is 1848 and you begin your journey in Independence, Missouri. When would you like leave?</p>';
month_screen += '<table>';
month_screen += '<tr class="normal_button" id="button_1">';
month_screen += '<td>&nbsp;&nbsp;1.&nbsp;</td>';
month_screen += '<td>March</td>';
month_screen += '</tr>';
month_screen += '<tr class="normal_button" id="button_2">';
month_screen += '<td>&nbsp;&nbsp;2.&nbsp;</td>';
month_screen += '<td>April</td>';
month_screen += '</tr>';
month_screen += '<tr class="normal_button" id="button_3">';
month_screen += '<td>&nbsp;&nbsp;3.&nbsp;</td>';
month_screen += '<td>May</td>';
month_screen += '</tr>';
month_screen += '<tr class="normal_button" id="button_4">';
month_screen += '<td>&nbsp;&nbsp;4.&nbsp;</td>';
month_screen += '<td>June</td>';
month_screen += '</tr>';
month_screen += '<tr class="normal_button" id="button_5">';
month_screen += '<td>&nbsp;&nbsp;5.&nbsp;</td>';
month_screen += '<td>July</td>';
month_screen += '</tr>';
month_screen += '<tr class="normal_button" id="button_6">';
month_screen += '<td>&nbsp;&nbsp;6.&nbsp;</td>';
month_screen += '<td>Ask for advice</td>';
month_screen += '</tr>';
month_screen += '</table>';
month_screen += '</div>';
month_screen += '<img id="border_image" src="/images/border.png">';
month_screen += '<div id="bottom_text">';
month_screen += '<p class="menu_button"></p>';
month_screen += '</div>';

var summary_screen = '<div id="summary_options">';
summary_screen += '<img src="/images/store_owner.png">';
summary_screen += '<p class="oregon_text">Well then, looks like you\'re ready to start. You\'ve got a long and difficult journey ahead of you. Good luck!</p>';
summary_screen += '</div>';
summary_screen += '<div id="bottom_text">';
summary_screen += '<p class="menu_button" id="fade_text">Press SPACE BAR to begin.</p>';
summary_screen += '</div>';

var screens = [
	prof_screen,
	name_screen,
	names_screen,
	month_screen,
	summary_screen
];

exports.getScreen = function(req, res) {
	var index = req.params.id;

	res.setHeader('Content-Type', 'text/html');
	res.send(screens[index]);
};

exports.saveProfession = function(req, res) {
	var profession = req.body.profession;

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

exports.SaveAllPlayerNames = function(req, res) {
	console.log(req.body);
	var player_names = req.body;
	var index = req.params.id;

	gameController.getData().playerNames[0] = player_names[0];
	gameController.getData().playerNames[1] = player_names[1];
	gameController.getData().playerNames[2] = player_names[2];
	gameController.getData().playerNames[3] = player_names[3];
	gameController.getData().playerNames[4] = player_names[4];

	res.setHeader('Content-Type', 'text/plain');
	res.send(gameController.getData().playerNames);
};

exports.saveStartMonth = function(req, res) {
	var start_month = req.body.start_month;

	gameController.getData().startMonth = start_month;

	res.setHeader('Content-Type', 'text/plain');
	res.send(gameController.getData().startMonth);
};