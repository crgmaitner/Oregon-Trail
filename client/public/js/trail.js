var trail_xmlHttp = new XMLHttpRequest();
document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
function onready() {
	// Add Event Lsitener for audio loaded
    document.getElementById('audio_player').addEventListener('loadeddata', audioLoaded);

	trail_xmlHttp.open('GET', '/api/game/game', true);
	trail_xmlHttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	// Add Event Lsitener for keyup
    		document.addEventListener('keyup', checkKeyPress);

	        updateValues(JSON.parse(this.responseText));
	    }
	};
	trail_xmlHttp.send();

	// Create timer that runs over 75ms (.075s)
    var timer = setInterval(fadeText, 75);
}

function updateValues(stats) {
	document.getElementById('daysOnTrail').innerHTML = stats['daysOnTrail'];
	document.getElementById('milesTraveled').innerHTML = stats['milesTraveled'];
	document.getElementById('groupHealth').innerHTML = stats['groupHealth'];
	document.getElementById('currentWeather').innerHTML = stats['currentWeather']['type'];
	document.getElementById('currentPace').innerHTML = stats['currentPace']['name'];
	document.getElementById('currentTerrain').innerHTML = stats['currentTerrain']['name'];
	document.getElementById('playerStatus').innerHTML = stats['playerStatus'];

	document.getElementById('trail_bg').src = stats['currentTerrain']['imageUrl'];
	document.getElementById('wagon').style.right = parseInt(1.6 * parseInt(stats['milesTraveled'])).toString() + 'px';

	if (stats['messages'].length == 0) {
		document.getElementById('message_box').style.visibility = 'hidden';
	}
	else {
		var messages = '';
		for (i=0; i<stats['messages'].length; i++) {
			messages += '<p>' + stats['messages'][i] + '</p>';
		}
		document.getElementById('message_box').innerHTML = messages;
		document.getElementById('message_box').style.visibility = 'initial';

		if (stats['gameActive'] == false) {
			document.removeEventListener('keyup', checkKeyPress);
			console.log(stats['isWinner']);
			if (stats['isWinner'] == true) {
				trail_xmlHttp.open('PUT', '/api/top_ten/submit', true);
				trail_xmlHttp.setRequestHeader('Content-type','application/json');
				trail_xmlHttp.onreadystatechange = function() {
				    if (this.readyState == 4 && this.status == 200) {
						document.getElementsByClassName('moves_text')[0].innerHTML = 'Press SPACE BAR to return to Main Menu';
						document.addEventListener('keyup', checkKeyPressMenu);
				    }
				};
				var d = new Date();
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var hours = d.getHours()
				var am_pm = 'am';
				if (hours == 0) {
					hours = 12;
				}
				else if (hours > 12) {
					hours -= 12;
					am_pm = 'pm';
				}
				var minutes = d.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				var date = months[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear() + ' ' + hours + ':' + minutes + am_pm;
				var score_submission = {
					'playerName': stats['playerNames'][0],
					'playerScore': parseInt(stats['playerScore']),
					'dateEarned': date
				}
				trail_xmlHttp.send(JSON.stringify(score_submission));
			}
			else {
				document.getElementsByClassName('moves_text')[0].innerHTML = 'Press SPACE BAR to return to Main Menu';
				document.addEventListener('keyup', checkKeyPressMenu);
			}
		}
	}
}

function checkKeyPress(e) {
    if (e.keyCode == SPACE) {
        // Change pace
        trail_xmlHttp.open('GET', '/api/game/pace', true);
		trail_xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        document.getElementById('currentPace').innerHTML = this.responseText;
		    }
		};
		trail_xmlHttp.send();
    }
    else if (e.keyCode == ENTER) {
    	// Travel
        trail_xmlHttp.open('GET', '/api/game/update', true);
		trail_xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var stats = JSON.parse(this.responseText);
		        updateValues(stats);
		    }
		};
		trail_xmlHttp.send();
    }
}

function checkKeyPressMenu(e) {
    if (e.keyCode == SPACE) {
		goToMenu();
    }
}