// woorden lijst in array
// words list in array
var Woorden = ["woord", "Klein", "galg", "niveau", "geschreven"];

var willekeurig ;

// functie die een willekeurig woord selecteerd
// function that selects a random word
function WW (woord) {
    var Wmath = Woorden.length
    var RN = Math.round(Math.random() * --Wmath);
    willekeurig = woord[RN];
    return willekeurig;
}

// functie die de plekken voor de letters laat zien
// function that shows the spaces for the letters
var toonWoord = document.getElementById("woord")
function uitkomst() {
    for (let i = 0; i < willekeurig.length; i++) {
        var span = document.createElement('span');
        span.textContent = "_";
        toonWoord.appendChild(span);
    }
}

var letter = document.getElementById('letter');
letter.addEventListener('change', function woordcheck(Lvalue) {
    var Lvalue = letter.value;
    for (let i = 0; i <= willekeurig.length; i++) {
        if (Lvalue === willekeurig[i]) {
            console.log(Lvalue);
        }
    }
});