document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
	// Add Event Listener for audio loaded
    document.getElementById("audio_player").addEventListener("loadeddata", audioLoaded);
}