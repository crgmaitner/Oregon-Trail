var scores = [
    {
    	"name": "Craig",
    	"score": 10000,
    	"date": "February 25, 2020"
    },
    {
        "name": "Alice",
        "score": 5000,
        "date": "February 26, 2020"
    },
    {
        "name": "Bob",
        "score": 15000,
        "date": "February 27, 2020"
    },
    {
        "name": "Mike",
        "score": 12000,
        "date": "February 24, 2020"
    },
    {
        "name": "Tim",
        "score": 2000,
        "date": "February 23, 2020"
    },
    {
        "name": "Cathy",
        "score": 11000,
        "date": "February 23, 2020"
    },
    {
        "name": "Greg",
        "score": 1000,
        "date": "February 22, 2020"
    },
    {
        "name": "James",
        "score": 200,
        "date": "February 18, 2020"
    },
    {
        "name": "Julie",
        "score": 15000,
        "date": "February 15, 2020"
    },
    {
        "name": "Brenda",
        "score": 7500,
        "date": "February 17, 2020"
    }
];

scores.sort(sortByScore);

var fade_index = 0.0;
var fade_in = true;

document.addEventListener("DOMContentLoaded", onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Listener for audio loaded
    document.getElementById("audio_player").addEventListener("loadeddata", audioLoaded);
    
    // Add Event Listener for menu_button click
    document.getElementById("menu_button").addEventListener("click", goToMenu);

    // Add Event Listener for keyup
    document.addEventListener("keyup", checkKeyPress);
    
    // Create timer that runs over 100ms (.100s)
    var timer = setInterval(fadeText, 100);

    // Create table entries
    var table_entry = "<tr><th>Name</th><th>Score</th><th>Date</th></tr>";
    for (s in scores) {
        table_entry += "<tr>";
        table_entry += "<td>" + scores[s]["name"] + "</td>";
        table_entry += "<td>" + scores[s]["score"] + "</td>";
        table_entry += "<td>" + scores[s]["date"] + "</td>";
        table_entry += "</tr>";
    }

    // Add scores to table
    document.getElementById("top_ten_table").innerHTML = table_entry;
}

function checkKeyPress(e) {
    if (e.keyCode == 32) {
        console.log("Space");
        goToMenu();
    }
}

function goToMenu() {
    saveJSON();
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

// Comparison Function for sorting
function sortByScore(a, b) {
    if (a["score"] > b["score"]) {  
        return -1;  
    }
    else if (a["score"] < b["score"]) {  
        return 1;  
    }
    else {
        return 0;
    }
}