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
}