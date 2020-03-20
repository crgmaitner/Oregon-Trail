var fade_index = 0.0;
var fade_in = true;

document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Listener for keyup
    document.addEventListener("keyup", checkKeyPress);

    // Add Event Listener for menu_button click
    document.getElementById("menu_button").addEventListener("click", goToMenu);

    // Create timer that runs over 100ms (.100s)
    var timer = setInterval(fadeText, 100);
}

function checkKeyPress(e) {
    if (e.keyCode == 32) {
        goToMenu();
    }
}

function goToMenu() {
    window.location = "/mainmenu";
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