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
    // Add Event Lsitener for keyup
    document.addEventListener("keyup", checkKeyPress);

    // Add Event Lsitener for menu_button click
    document.getElementById("menu_button").addEventListener("click", goToMenu);

    // Create timer that runs over 50ms (.05s)
    var timer = setInterval(fadeText, 75);

    // Create table entries
    var table_entry = "<tr><th>Name</th><th>Score</th><th>Date</th></tr>";
    for (s in scores) {
        table_entry += "<tr>";
        table_entry += "<td>" + scores[s]["name"] + "</td>";
        table_entry += "<td>" + scores[s]["score"] + "</td>";
        table_entry += "<td>" + scores[s]["date"] + "</td>";
        table_entry += "</tr>";
    }

    // Add score to table
    document.getElementById("top_ten_table").innerHTML = table_entry;
}

// Runs when keyup
function checkKeyPress(e) {
    if (e.keyCode == 32) {
        console.log("Space");
        goToMenu();
    }
}

// Runs when space pressed or when button clicked
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

// Comparison Function  
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