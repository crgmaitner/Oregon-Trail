//scores.sort(sortByScore);
var top_ten_xmlHttp = new XMLHttpRequest();
document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Lsitener for audio loaded
    document.getElementById('audio_player').addEventListener('loadeddata', audioLoaded);
    
    // Add Event Lsitener for menu_button click
    document.getElementsByClassName('menu_button')[0].addEventListener('click', goToMenu);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);
    
    // Create timer that runs over 75ms (.075s)
    var timer = setInterval(fadeText, 75);

    console.log('Hi');
    top_ten_xmlHttp.open('GET', '/api/top_ten', true);
    top_ten_xmlHttp.onreadystatechange = function() {
        console.log('Hi');
        if (this.readyState == 4 && this.status == 200) {
            // Get scores JSON
            var scores = JSON.parse(this.responseText);
            scores.sort(sortByScore);
            console.log(scores);
            // Create table entries
            var table_entry = '<tr><th>Name</th><th>Score</th><th>Date</th></tr>';
            for (i=0; i<10; i++) {
                table_entry += '<tr>';
                table_entry += '<td>' + scores[i]['playerName'] + '</td>';
                table_entry += '<td>' + scores[i]['playerScore'] + '</td>';
                table_entry += '<td>' + scores[i]['dateEarned'] + '</td>';
                table_entry += '</tr>';
            }

            // Add score to table
            document.getElementById('top_ten_table').innerHTML = table_entry;
        }
    };
    top_ten_xmlHttp.send();
}

function checkKeyPress(e) {
    if (e.keyCode == SPACE) {
        console.log('Space');
        goToMenu();
    }
}

// Comparison Function for sorting
function sortByScore(a, b) {
    if (a['playerScore'] > b['playerScore']) {  
        return -1;  
    }
    else if (a['playerScore'] < b['playerScore']) {  
        return 1;  
    }
    else {
        return 0;
    }
}