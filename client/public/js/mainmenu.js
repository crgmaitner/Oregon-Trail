document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Lsitener for audio loaded
    audio_player.addEventListener('loadeddata', audioLoaded);

	// Add Event Lsitener for button clicks
    button_1.addEventListener('click', goToSetup);
    button_2.addEventListener('click', goToInfo);
    button_3.addEventListener('click', goToTopTen);
    button_4.addEventListener('click', adjustSound);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);
}

function checkKeyPress(e) {
    if (e.keyCode == ONE) {
        goToSetup();
    }
    else if (e.keyCode == TWO) {
        goToInfo();
    }
    else if (e.keyCode == THREE) {
        goToTopTen();
    }
    else if (e.keyCode == FOUR) {
        adjustSound();
    }
}

// This function runs when you press 2
function getInfo() {
    menu_button.innerHTML = 'Press SPACE BAR to continue';
}

function adjustSound() {
    if (document.getElementById('audio_player').paused == false) {
        document.getElementById('sound_button').innerHTML = 'Turn sound on';
        document.getElementById('audio_player').pause();
        sound['time'] = document.getElementById('audio_player').currentTime;
        sound['paused'] = true;
    }
    else{
        document.getElementById('sound_button').innerHTML = 'Turn sound off';
        document.getElementById('audio_player').play();
        document.getElementById('audio_player').currentTime = sound['time'];
        sound['paused'] = false;
    }
}