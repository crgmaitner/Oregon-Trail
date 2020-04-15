document.addEventListener('DOMContentLoaded', onready);

// Reset Sound
xmlHttp.open('GET', '/api/sound/reset', true);
xmlHttp.send();

// This gets runs when the webpage loads
function onready() {
    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);

    // Add Event Lsitener for menu_button click
    document.getElementsByClassName('menu_button')[0].addEventListener('click', goToMenu);

    // Create timer that runs every 100ms (.100s)
    var timer = setInterval(fadeText, 100);
}

function checkKeyPress(e) {
    if (e.keyCode == SPACE) {
        goToMenu();
    }
}