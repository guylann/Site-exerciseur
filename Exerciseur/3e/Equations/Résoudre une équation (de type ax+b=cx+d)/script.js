var Titre = "Résoudre une équation (de type ax+b=cx+d).";
var Consigne =  "Trouver la solution de cette équation. Donner la réponse arrondie au centième. ATTENTION : pour écrire une virgule il faut mettre un point."

var document = HtmlManipulator.Gdocument;

var nombre;

function Recommencer() {
    nombre = Troisième_Equations.CreateEq3();
    document.getElementById("TextQuestion").innerHTML = nombre[0];
    document.getElementById("Resultat").innerHTML = "";
    document.getElementById("TextReponse").innerHTML = "";
    document.getElementById("fname").value = "";
}


function Valider() {
    var txt = document.getElementById("fname").value;
    document.getElementById("TextReponse").innerHTML = "";
    if (nombre[1] == txt) {
        document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
        document.getElementById("TextReponse").innerHTML = nombre[1];
    }
}

function Annuler() {}