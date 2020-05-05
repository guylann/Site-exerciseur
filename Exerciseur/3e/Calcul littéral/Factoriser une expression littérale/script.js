var Titre = "Factoriser une expression littérale.";
var Consigne =  "Factoriser l'expression littérale suivante."

var document = HtmlManipulator.Gdocument;

var nombre;

function Recommencer() {
    nombre = Troisième_CalculLittéral.CreateExprFact();
    document.getElementById("TextQuestion").innerHTML = nombre[0];
    document.getElementById("Resultat").innerHTML = "";
    document.getElementById("TextReponse").innerHTML = "";
    document.getElementById("fname").value = "";
}


function Valider() {
    var txt = document.getElementById("fname").value;
    document.getElementById("TextReponse").innerHTML = "";
    console.log(txt);
    if (nombre[1] == txt) {
        document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
        document.getElementById("TextReponse").innerHTML = nombre[1];
    }
}

function Annuler() {}

function Resume(){
    var reponse = ["Question","Reponse", "Tu as bien choisi le plus grand facteur commun à tes nombres ?","Correction"];

    reponse[0] = "Factoriser " + nombre[0];
    reponse[1] = document.getElementById("fname").value;
    reponse[3] = nombre[1];

    return reponse
}