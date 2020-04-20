<<<<<<< HEAD
const ENTER = 13;
const SPACE = 32;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;

var sound = {};

// This gets run when any page with an audio player loads
async function audioLoaded() {
	let response = await fetch('/api/sound');
	sound = await response.json();
	
	if (sound['paused'] == false) {
		if (document.getElementById('sound_button') != null) {
    		sound_button.innerHTML = 'Turn sound off';
    	}
		audio_player.play();
	}
	else {
		if (document.getElementById('sound_button') != null) {
    		sound_button.innerHTML = 'Turn sound on';
    	}
	}

	audio_player.currentTime = sound['time'];
}

// This is run by menu_button to fade in/out
var fade_index = 0.0;
var fade_in = true;
function fadeText() {
    if (fade_in == true) {
        fade_index += 0.05;
        if (fade_index >= 1.0){
        	fade_index = 1.0;
            fade_in = false;
        }
    }
    else {
        fade_index -= 0.05;
        if (fade_index <= 0.10){
        	fade_index = 0.10;
            fade_in = true;
        }
    }

    fade_text.style.opacity = fade_index;   
}

// These gets run before any page moves to another page
function goToMenu() {
    saveSoundState('/mainmenu');
}

function goToInfo() {
	saveSoundState('/info');
}

function goToTopTen() {
    saveSoundState('/topten');
}

async function goToSetup() {
	let response = await fetch('/api/game/reset');
    saveSoundState('/setup');
}

function goToTrail() {
    saveSoundState('/trail');
}

async function saveSoundState(where_to) {
	if (document.getElementById('audio_player') != null) {
		sound['time'] = audio_player.currentTime
		let response = await fetch('/api/sound', {
			method: 'PUT',
			credentials: 'same-origin',
			headers: {'Content-Type': 'application/json'},
			redirect: 'follow',
			body: JSON.stringify(sound)
		});
		window.location = where_to;
	}
	else {
		window.location = where_to;
	}
=======
var json = null;
loadJSON();

// This gets run by global.js when any page loads
function loadJSON() {
	if (sessionStorage.getItem('oregon_music_state') == null) {
		json = {
			"playing": true,
			"time": 0
		}
	}
	else {
		json = JSON.parse(sessionStorage.getItem('oregon_music_state'));
	}
	console.log(json);
}

// This gets run when any page with an audio player loads
function audioLoaded() {
	if (json["playing"] == true) {
		document.getElementById("audio_player").play();
	    document.getElementById("audio_player").currentTime = json["time"];
	}
}

// This gets run before any page moves to another page
function saveJSON() {
	if (json["playing"] == true) {
		json["time"] = document.getElementById("audio_player").currentTime;
		sessionStorage.setItem('oregon_music_state', JSON.stringify(json));
	}
}

// This gets run before any page moves to another page
function updateJSON() {
	if (json["playing"] == true) {
		json["playing"] = false;
		json["time"] = document.getElementById("audio_player").currentTime;
	}
	else {
		json["playing"] = true;
	}
	
	sessionStorage.setItem('oregon_music_state', JSON.stringify(json));
>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
}