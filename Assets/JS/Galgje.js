// woorden lijst in array
// words list in array
var Woorden = ["woord", "Klein", "galg", "niveau", "geschreven"];

var willekeurig ;

// functie die een willekeurig woord selecteerd
// function that selects a random word
function WW (woord) {
    var RN = Math.round(Math.random() * --Woorden.length);
    willekeurig = woord[RN];
    return willekeurig;
}

// functie die de plekken voor de letters laat zien
// function that shows the spaces for the letters
var toonWoord = document.getElementById("woord")
function uitkomst() {
    console.log (willekeurig.length);
    for (let i = 0; i < willekeurig.length; i++) {
        var span = document.createElement('span');
        span.textContent = "_";
        toonWoord.appendChild(span);
    }
}