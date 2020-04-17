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
}