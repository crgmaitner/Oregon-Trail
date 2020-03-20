var fade_index = 0.0;
var fade_in = true;

document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Lsitener for audio loaded
    document.getElementById("audio_player").addEventListener("loadeddata", audioLoaded);
    
	// Add Event Listener for button clicks
    document.getElementById("button_1").addEventListener("click", goToTrail);
    document.getElementById("button_2").addEventListener("click", goToTrail);
    document.getElementById("button_3").addEventListener("click", goToTrail);
    document.getElementById("button_4").addEventListener("click", goToInfo);


    // Add Event Listener for menu_button click
    document.getElementById("menu_button").addEventListener("click", goToMenu);

    // Add Event Listener for keyup
    document.addEventListener("keyup", checkKeyPress);

    // Create timer that runs over 100ms (.100s)
    var timer = setInterval(fadeText, 100);
}

// This gets run when keyup
function checkKeyPress(e) {
    if (e.keyCode == 49) {
        // todo: choose banker
        goToTrail();
    }
    else if (e.keyCode == 50) {
        // todo: choose carpenter
        goToTrail();
    }
    else if (e.keyCode == 51) {
        // todo: choose farmer
        goToTrail();
    }
    else if (e.keyCode == 52) {
        // todo: go to learn more page
        goToInfo();
    }
    else if (e.keyCode == 32) {
        console.log("Space");
        goToMenu();
    }
}

function goToTrail() {
    saveJSON();
    window.location = "/trail";
}

function goToMenu() {
    saveJSON();
    window.location = "/mainmenu";
}

function goToInfo() {
    saveJSON();
    window.location = "/info";
}

function fadeText() {
    if (fade_in == true) {
        fade_index += 0.05;
        if (fade_index >= 1.0){
            fade_in = false;
        }
    }
    else {
        fade_index -= 0.05;
        if (fade_index <= 0.10){
            fade_in = true;
        }
    }

    document.getElementById("menu_button").style.opacity = fade_index;   
}