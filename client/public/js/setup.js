var setup_xmlHttp = new XMLHttpRequest();
document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Lsitener for audio loaded
    document.getElementById('audio_player').addEventListener('loadeddata', audioLoaded);
    
	// Add Event Lsitener for button clicks
    document.getElementById('button_1').addEventListener('click', getNames);
    document.getElementById('button_2').addEventListener('click', getNames);
    document.getElementById('button_3').addEventListener('click', getNames);

    // Add Event Lsitener for menu_button click
    document.getElementsByClassName('menu_button')[0].addEventListener('click', goToMenu);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);

    // Create timer that runs over 75ms (.075s)
    var timer = setInterval(fadeText, 75);
}

// This gets run when keyup
function checkKeyPress(e) {
    if (e.keyCode == ONE) {
        // Choose banker
        setup_xmlHttp.open('PUT', '/api/setup/profession', true);
        setup_xmlHttp.setRequestHeader('Content-type', 'application/json');
        setup_xmlHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                getNames();
            }
        };
        setup_xmlHttp.send(JSON.stringify({'profession': 'Banker'}));
    }
    else if (e.keyCode == TWO) {
        // Choose carpenter
        setup_xmlHttp.open('PUT', '/api/setup/profession', true);
        setup_xmlHttp.setRequestHeader('Content-type', 'application/json');
        setup_xmlHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                getNames();
            }
        };
        setup_xmlHttp.send(JSON.stringify({'profession': 'Carpenter'}));
    }
    else if (e.keyCode == THREE) {
        // Choose farmer
        setup_xmlHttp.open('PUT', '/api/setup/profession', true);
        setup_xmlHttp.setRequestHeader('Content-type', 'application/json');
        setup_xmlHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                getNames();
            }
        };
        setup_xmlHttp.send(JSON.stringify({'profession': 'Farmer'}));
    }
    else if (e.keyCode == FOUR) {
        // todo: go to larn more page
    }
    else if (e.keyCode == SPACE) {
        goToMenu();
    }
}

function getNames() {
    goToTrail()
}