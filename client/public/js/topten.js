document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Lsitener for audio loaded
    audio_player.addEventListener('loadeddata', audioLoaded);
    
    // Add Event Lsitener for menu_button click
    fade_text.addEventListener('click', goToMenu);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);
    
    // Create timer that runs over 100ms (.100s)
    var timer = setInterval(fadeText, 100);

    fillTable();
}

async function fillTable() {
    let response = await fetch('/api/top_ten');
    let scores = await response.json();

    scores.sort(sortByScore);

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
    top_ten_table.innerHTML = table_entry;
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