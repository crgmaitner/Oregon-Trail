<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', onready);

// Reset Sound
let response = fetch('/api/sound/reset');

// This gets runs when the webpage loads
function onready() {
    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);

    // Add Event Lsitener for menu_button click
    fade_text.addEventListener('click', goToMenu);

    // Create timer that runs every 75ms (.075s)
    var timer = setInterval(fadeText, 75);
}

function checkKeyPress(e) {
    if (e.keyCode == SPACE) {
        goToMenu();
    }
=======
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
>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
}