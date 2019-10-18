// woorden lijst in array
// words list in array
var Woorden = ["woord", "Klein", "galg", "niveau", "geschreven"];

var willekeurig ;
var span ;
var pogingen = 0;

var toonWoord = document.getElementById("woord");
var Galgveld = document.getElementById("Galg");
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
    console.log("oplossing " + willekeurig)
    return willekeurig;
}
// eventListener die reageert op wijziging in input veld
// eventListener that reacts to input in input field
var letter = document.getElementById('letter');
letter.addEventListener('change', function woordcheck() {   
    for (let i = 0; i < willekeurig.length; i++) {
        var komtVoor = letter.value === willekeurig[i];
        if (komtVoor) {
            i = willekeurig.length;
            console.log ("dit is i" + i);
        }
        
    } 
    console.log ("komtVoor" + komtVoor);
    for (let i = 0; i <= willekeurig.length; i++) {
        var goed = document.getElementsByTagName('span')[i];
        if (letter.value === willekeurig[i]) {
            goed.innerText = letter.value;
        }
    }
    if (komtVoor === false) {
        
        Galgveld.innerHTML = '<img src="Assets\\galgje' + pogingen + '.png" alt="eerste fout"></img>';        
        ++pogingen;
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
        pogingen = 0;
        WW(Woorden);
    } else {
        WW(Woorden);
    }
});