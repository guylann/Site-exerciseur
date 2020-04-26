var Titre = "Résoudre une équation simple (de type ax=b).";
var Consigne =  "Trouver la solution de cette équation. Donner la réponse arrondie au centième. ATTENTION : pour écrire une virgule il faut mettre un point."

var document = HtmlManipulator.Gdocument;


var nombre = Troisième_Equations.CreateEq1();

function Recommencer() {
    nombre = Troisième_Equations.CreateEq1();
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