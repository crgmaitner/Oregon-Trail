<<<<<<< HEAD
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
=======
document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Listener for audio loaded
    document.getElementById("audio_player").addEventListener("loadeddata", audioLoaded);

	// Add Event Listener for button clicks
    document.getElementById("button_1").addEventListener("click", goToSetup);
    document.getElementById("button_2").addEventListener("click", goToInfo);
    document.getElementById("button_3").addEventListener("click", goToTopTen);
    document.getElementById("button_4").addEventListener("click", adjustSound);

    // Add Event Listener for keyup
    document.addEventListener("keyup", checkKeyPress);

    // Adjust sound button based on whether audio is playing or not
    if (json["playing"] == true) {
        document.getElementById("sound_button").innerHTML = "Turn sound off";
    }
    else {
        document.getElementById("sound_button").innerHTML = "Turn sound on";
    }
}

/*These functions control the main menu. Pressing a certain number key will
take you to the corresponding page.*/
function checkKeyPress(e) {
    if (e.keyCode == 49) {
        goToSetup();
    }
    else if (e.keyCode == 50) {
        goToInfo()
    }
    else if (e.keyCode == 51) {
        goToTopTen();
    }
    else if (e.keyCode == 52) {
>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
        adjustSound();
    }
}

<<<<<<< HEAD
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
=======
function goToSetup() {
    saveJSON();
	window.location = "/setup";
}

function goToInfo() {
    saveJSON();
	window.location = "/info";
}

function goToTopTen() {
    saveJSON();
	window.location = "/topten";
}
//This function adjusts audio output depending on which option is chosen.
function adjustSound() {
    if (json["playing"] == true) {
        document.getElementById("sound_button").innerHTML = "Turn sound on";
        document.getElementById("audio_player").pause();
    }
    else {
        document.getElementById("sound_button").innerHTML = "Turn sound off";
        document.getElementById("audio_player").play();
        document.getElementById("audio_player").currentTime = json["time"];
    }
    updateJSON();
>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
}