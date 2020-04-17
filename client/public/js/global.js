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
}