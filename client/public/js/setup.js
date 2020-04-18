document.addEventListener('DOMContentLoaded', onready);

// This function runs when the webpage loads
function onready() {
    // Add Event Lsitener for audio loaded
    audio_player.addEventListener('loadeddata', audioLoaded);

    getProfession();
}

var timer = undefined;
async function getProfession() {
	let response = await fetch('/api/setup/screen/0');
    let html = await response.text();

    main_screen.innerHTML = html;

    // Add Event Lsitener for button clicks
    button_1.addEventListener('click', function() {
        putProfession('Banker');
    });
    button_2.addEventListener('click', function() {
        putProfession('Carpenter');
    });
    button_3.addEventListener('click', function() {
        putProfession('Farmer');
    });
    button_3.addEventListener('click', function() {
        getAboutProfession();
    });

    // Add Event Lsitener for menu_button click
    fade_text.addEventListener('click', goToMenu);

    // Create timer that runs over 75ms (.075s)
    timer = setInterval(fadeText, 75);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPress);
}

async function putProfession(profession) {
    let response = await fetch('/api/setup/profession', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        body: JSON.stringify({'profession': profession})
    });
    getName();
}

// This gets run when keyup
async function checkKeyPress(e) {
    if (e.keyCode == ONE) {
        putProfession('Banker');
    }
    else if (e.keyCode == TWO) {
        putProfession('Carpenter');
    }
    else if (e.keyCode == THREE) {
        putProfession('Farmer');
    }
    else if (e.keyCode == FOUR) {
        getAboutProfession();
    }
    else if (e.keyCode == SPACE) {
        goToMenu();
    }
}

async function getAboutProfession() {
    // Clear timer
    clearInterval(timer);

    // Remove Event Lsitener for keyup
    document.removeEventListener('keyup', checkKeyPress);

    let response = await fetch('/api/setup/screen/1');
    let html = await response.text();

    main_screen.innerHTML = html;

    // Add Event Lsitener for menu_button click
    fade_text.addEventListener('click', getProfession);

    // Create timer that runs over 75ms (.075s)
    timer = setInterval(fadeText, 75);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPressAboutProfession);
}

// This gets run when keyup
async function checkKeyPressAboutProfession(e) {
    if (e.keyCode == SPACE) {
        // Clear timer
        clearInterval(timer);

        // Remove Event Lsitener for keyup
        document.removeEventListener('keyup', checkKeyPressAboutProfession);

        getProfession();
    }
}

async function getName() {
    // Clear timer
    clearInterval(timer);

    // Remove Event Lsitener for keyup
    document.removeEventListener('keyup', checkKeyPress);

    let response = await fetch('/api/setup/screen/2');
    let html = await response.text();

    main_screen.innerHTML = html;
    main_screen.classList.add('name_screen');
    name_0.focus();
}

var names = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5']
function putName(form) {
    getNames(form[0].value);
}

async function getNames(leader_name) {
    let response = await fetch('/api/setup/screen/3');
    let html = await response.text();

    main_screen.innerHTML = html;

    main_screen.classList.remove('name_screen');
    main_screen.classList.add('names_screen');

    name_1.value = leader_name;
    name_1.readOnly = true;
    name_2.focus();
}

async function putNames(form) {
    if (form[0].value == '') {
        names[0] = 'Craig';
    }
    else {
        names[0] = form[0].value;
    }

    if (form[1].value == '') {
        names[1] = 'Pete';
    }
    else {
        names[1] = form[1].value;
    }
    
    if (form[2].value == '') {
        names[2] = 'Todd';
    }
    else {
        names[2] = form[2].value;
    }

    if (form[3].value == '') {
        names[3] = 'Will';
    }
    else {
        names[3] = form[3].value;
    }

    if (form[4].value == '') {
        names[4] = 'Mike';
    }
    else {
        names[4] = form[4].value;
    }

    // Enter player name
    let response = await fetch('/api/setup/player', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        body: JSON.stringify(names)
    });

    getMonth();
}

async function getMonth() {
    let response = await fetch('/api/setup/screen/4');
    let html = await response.text();

    main_screen.innerHTML = html;
    main_screen.classList.remove('names_screen');

    button_1.addEventListener('click', function() {
        putMonth('March');
    });
    button_2.addEventListener('click', function() {
        putMonth('April');
    });
    button_3.addEventListener('click', function() {
        putMonth('May');
    });
    button_4.addEventListener('click', function() {
        putMonth('June');
    });
    button_5.addEventListener('click', function() {
        putMonth('July');
    });
    button_6.addEventListener('click', getAboutMonth);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPressMonth);
}

async function putMonth(month) {
    // Clear timer
    clearInterval(timer);
    
    let response = await fetch('/api/setup/start_month', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        body: JSON.stringify({'start_month': month})
    });
    getSummary();
}

async function checkKeyPressMonth(e) {
    if (e.keyCode == ONE) {
        putMonth('March');
    }
    else if (e.keyCode == TWO) {
        putMonth('April');
    }
    else if (e.keyCode == THREE) {
        putMonth('May');
    }
    else if (e.keyCode == FOUR) {
        putMonth('June');
    }
    else if (e.keyCode == FIVE) {
        putMonth('July');
    }
    else if (e.keyCode == SIX) {
        getAboutMonth();
    }
}

async function getAboutMonth() {
    // Remove Event Lsitener for keyup
    document.removeEventListener('keyup', checkKeyPressMonth);

    let response = await fetch('/api/setup/screen/5');
    let html = await response.text();

    main_screen.innerHTML = html;

    // Add Event Lsitener for menu_button click
    fade_text.addEventListener('click', getMonth);

    // Create timer that runs over 75ms (.075s)
    timer = setInterval(fadeText, 75);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPressAboutMonth);
}

// This gets run when keyup
async function checkKeyPressAboutMonth(e) {
    if (e.keyCode == SPACE) {
        // Clear timer
        clearInterval(timer);

        // Remove Event Lsitener for keyup
        document.removeEventListener('keyup', checkKeyPressAboutMonth);
        
        getMonth();
    }
}

async function getSummary() {
    let response = await fetch('/api/setup/screen/6');
    let html = await response.text();

    // Remove Event Lsitener for keyup
    document.removeEventListener('keyup', checkKeyPressMonth);

    main_screen.innerHTML = html;
    main_screen.classList.add('summary_screen');

    // Add Event Lsitener for menu_button click
    fade_text.addEventListener('click', goToTrail);

    // Create timer that runs over 75ms (.075s)
    timer = setInterval(fadeText, 75);

    // Add Event Lsitener for keyup
    document.addEventListener('keyup', checkKeyPressSummary);
}

function checkKeyPressSummary(e) {
    if (e.keyCode == SPACE) {
        goToTrail();
    }
}