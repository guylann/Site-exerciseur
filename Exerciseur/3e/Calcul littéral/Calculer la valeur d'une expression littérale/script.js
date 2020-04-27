var Titre = "Calculer la valeur d'une expression littérale.";
var Consigne =  "Calculer la valeur de l'expression littérale suivante pour la valeur de x indiquée."

var document = HtmlManipulator.Gdocument;

var nombre;

function Recommencer() {
    nombre = Troisième_CalculLittéral.CreateExprLitt();
    document.getElementById("TextQuestion").innerHTML = nombre[0] + "  pour x = " + nombre[1];
    document.getElementById("Resultat").innerHTML = "";
    document.getElementById("TextReponse").innerHTML = "";
    document.getElementById("fname").value = "";
}


function Valider() {
    var txt = document.getElementById("fname").value;
    document.getElementById("TextReponse").innerHTML = "";
    if (nombre[2] == txt) {
        document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
        document.getElementById("TextReponse").innerHTML = nombre[2];
    }
}

function Annuler() {
}

function Resume(){
    var reponse = ["Question","Reponse", "","Correction"];

    reponse[0] = nombre[0] + "  pour x = " + nombre[1];
    reponse[1] = document.getElementById("fname").value;
    reponse[3] = nombre[2];

    return reponse
}