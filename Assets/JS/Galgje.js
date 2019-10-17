// woorden lijst in array
// words list in array
var Woorden = ["woord", "Klein", "galg", "niveau", "geschreven"];

var willekeurig ;

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

var letter = document.getElementById('letter');
letter.addEventListener('change', function woordcheck(Lvalue) {
    var Lvalue = letter.value;
    
    for (let i = 0; i <= willekeurig.length; i++) {
        var goed = document.getElementsByTagName('span')[i];
        if (Lvalue === willekeurig[i]) {
            goed.innerText = Lvalue;
        }
    }
});