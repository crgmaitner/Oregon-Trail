var sound_on = true;
var audio = new Audio('/music/menu_song.mp3');

document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
	// Add Event Lsitener for button clicks
    document.getElementById("button_1").addEventListener("click", goToTrail);
    document.getElementById("button_2").addEventListener("click", goToTrail);
    document.getElementById("button_3").addEventListener("click", goToTrail);

    // Add Event Lsitener for menu_button click
    document.getElementById("menu_button").addEventListener("click", goToMenu);

    // Add Event Lsitener for keyup
    document.addEventListener("keyup", checkKeyPress);

    // Start menu audio
    audio.play();
}

// Runs when keyup
function checkKeyPress(e) {
    if (e.keyCode == 49) {
        console.log("1");
        // todo: do something specific to this choice before starting
        goToTrail();
    }
    else if (e.keyCode == 50) {
        console.log("2");
        // todo: do something specific to this choice before starting
        goToTrail();
    }
    else if (e.keyCode == 51) {
        console.log("3");
        // todo: do something specific to this choice before starting
        goToTrail();
    }
    else if (e.keyCode == 52) {
        console.log("4");
        // todo: go to larn more page
    }
    else if (e.keyCode == 32) {
        console.log("Space");
        goToMenu();
    }
}

function goToTrail() {
    window.location = "/trail";
}

// Runs when space pressed or when button clicked
function goToMenu() {
    window.location = "/mainmenu";
}