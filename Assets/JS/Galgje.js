// woorden lijst in array
// words list in array
var Woorden = ["woord", "Klein", "galg", "niveau", "geschreven"];

var willekeurig ;
var span ;

var toonWoord = document.getElementById("woord");

// functie die een willekeurig woord selecteerd
// function that selects a random word
function WW (woord) {
    var Wmath = Woorden.length
    var RN = Math.round(Math.random() * --Wmath);
    willekeurig = woord[RN];

    for (let i = 0; i < willekeurig.length; i++) {
        var span = document.createElement('span');
        span.textContent = "_";
        toonWoord.appendChild(span);
    }
    return willekeurig;
}

// eventListener die reageert op wijziging in input veld
// eventListener that reacts to input in input field
var letter = document.getElementById('letter');
letter.addEventListener('change', function woordcheck() {    
    for (let i = 0; i <= willekeurig.length; i++) {
        var goed = document.getElementsByTagName('span')[i];
        if (letter.value === willekeurig[i]) {
            goed.innerText = letter.value;
        }
    }
    letter.value = null;
});

// begin spel en begin opnieuw functie
// start game and restart game function
var start = document.getElementById('startspel');
start.addEventListener('click', function () {
    if (toonWoord.hasChildNodes('span')) {
        var test = document.getElementsByTagName('span');
        toonWoord.innerHTML = "";
        WW(Woorden);
    } else {
        WW(Woorden);
    }
});