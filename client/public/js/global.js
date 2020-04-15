var xmlHttp = new XMLHttpRequest();

const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const ENTER = 13;
const SPACE = 32;

// This gets run when any page with an audio player loads
var sound = undefined;
function audioLoaded() {
	xmlHttp.open('GET', '/api/sound', true);
	xmlHttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	sound = JSON.parse(this.responseText);
	    	if (sound['paused'] == false) {
	    		if (document.getElementById('sound_button') != null) {
		    		document.getElementById('sound_button').innerHTML = 'Turn sound off';
		    	}
				document.getElementById('audio_player').play();
			}
			else {
				if (document.getElementById('sound_button') != null) {
		    		document.getElementById('sound_button').innerHTML = 'Turn sound on';
		    	}
			}
			document.getElementById('audio_player').currentTime = sound['time'];
	    }
	};
	xmlHttp.send();
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

    document.getElementById('fade_text').style.opacity = fade_index;   
}

// These gets run before any page moves to another page
function goToMenu() {
    saveSoundState('/mainmenu');
}

function goToTopTen() {
    saveSoundState('/topten');
}

function goToSetup() {
    xmlHttp.open('Get', '/api/game/reset', true);
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            saveSoundState('/setup');
        }
    };
    xmlHttp.send();
}

function goToTrail() {
    saveSoundState('/trail');
}

function saveSoundState(where_to) {
	if (document.getElementById('audio_player') != null) {
		xmlHttp.open('PUT', '/api/sound', true);
		xmlHttp.setRequestHeader('Content-type','application/json');
		xmlHttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            window.location = where_to;
	        }
	    };
		sound['time'] = document.getElementById('audio_player').currentTime
		xmlHttp.send(JSON.stringify(sound));
	}
	else {
		window.location = where_to;
	}
}