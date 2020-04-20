document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
async function onready() {
	// Add Event Lsitener for audio loaded
    audio_player.addEventListener('loadeddata', audioLoaded);

	let response = await fetch('/api/game/game');
	let stats = await response.json();

	// Add Event Lsitener for keyup
	document.addEventListener('keyup', checkKeyPress);

    updateValues(stats);

	// Create timer that runs over 75ms (.075s)
    var timer = setInterval(fadeText, 75);
}

async function updateValues(stats) {
	daysOnTrail.innerHTML = stats['daysOnTrail'];
	milesTraveled.innerHTML = stats['milesTraveled'];
	groupHealth.innerHTML = stats['groupHealth'];
	currentWeather.innerHTML = stats['currentWeather']['type'];
	currentPace.innerHTML = stats['currentPace']['name'];
	currentTerrain.innerHTML = stats['currentTerrain']['name'];
	playerStatus.innerHTML = stats['playerStatus'];

	trail_bg.src = stats['currentTerrain']['imageUrl'];
	wagon.style.right = parseInt(1.6 * parseInt(stats['milesTraveled'])).toString() + 'px';

	if (stats['messages'].length == 0) {
		message_box.style.visibility = 'hidden';
	}
	else {
		var messages = '';
		for (i=0; i<stats['messages'].length; i++) {
			messages += '<p>' + stats['messages'][i] + '</p>';
		}
		message_box.innerHTML = messages;
		message_box.style.visibility = 'initial';

		if (stats['gameActive'] == false) {
			document.removeEventListener('keyup', checkKeyPress);
			if (stats['isWinner'] == true) {
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
				
				let response = await fetch('/api/top_ten/submit', {
		            method: 'PUT',
		            credentials: 'same-origin',
		            headers: {'Content-Type': 'application/json'},
		            redirect: 'follow',
		            body: JSON.stringify(score_submission)
		        });
			}

			fade_text.innerHTML = 'Press SPACE BAR to return to Main Menu';
			document.addEventListener('keyup', checkKeyPressMenu);
		}
	}
}

async function checkKeyPress(e) {
    if (e.keyCode == SPACE) {
        // Change pace
        let response = await fetch('/api/game/pace');
        let pace = await response.json();
		currentPace.innerHTML = pace['pace'];
    }
    else if (e.keyCode == ENTER) {
    	// Travel
        let response = await fetch('/api/game/update');
        let stats = await response.json();
		updateValues(stats);
    }
}

function checkKeyPressMenu(e) {
    if (e.keyCode == SPACE) {
		goToMenu();
    }
}