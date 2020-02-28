var sound_on = true;
var audio = new Audio('/music/menu_song.mp3');

document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
	// Add Event Lsitener for button clicks
    document.getElementById("button_1").addEventListener("click", goToSetup);
    document.getElementById("button_3").addEventListener("click", goToTopTen);
    document.getElementById("button_4").addEventListener("click", adjustSound);

    // Add Event Lsitener for keyup
    document.addEventListener("keyup", checkKeyPress);

    // Start menu audio
    audio.play();
}

// Runs when keyup triggers.
function checkKeyPress(e) {
    if (e.keyCode == 49) {
        console.log("1");
        goToSetup();
    }
    else if (e.keyCode == 50) {
        console.log("2");
        // todo: go to page to learn about the trail
    }
    else if (e.keyCode == 51) {
        console.log("3");
        goToTopTen();
    }
    else if (e.keyCode == 52) {
        console.log("4");
        adjustSound();
    }
}

function goToSetup() {
	window.location = "/setup";
}

function goToTopTen() {
	window.location = "/topten";
}

function adjustSound() {
    if (sound_on == true) {
        sound_on = false;
        document.getElementById("button_4").innerHTML = "4. Turn Sound On";
        audio.pause();
    }
    else {
        sound_on = true;
        document.getElementById("button_4").innerHTML = "4. Turn Sound Off";
        audio.play();
    }
}