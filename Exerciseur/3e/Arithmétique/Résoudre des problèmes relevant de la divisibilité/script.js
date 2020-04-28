var Titre = "Résoudre des problèmes relevant de la divisibilité.";
var Consigne =  "Répondre a la question."

var document = HtmlManipulator.Gdocument;


var values;

function Valider() {
    console.log(values);
    var nbr1 = document.getElementById("bouquets").value;
    var nbr2 = document.getElementById("roses").value;
    var nbr3 = document.getElementById("marguerites").value;
    document.getElementById("correctionpgcd").innerHTML = "";
    document.getElementById("correctiondivision").innerHTML = "";
    document.getElementById("correctionGlobal").innerHTML = "";
    if (nbr1 == values[2] &&
        nbr2 == values[0] / values[2] &&
        nbr3 == values[1] / values[2])
        document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
    if (nbr1 != values[2])
        document.getElementById("correctionpgcd").innerHTML = "   Le bon nombre de bouquets était " + values[2].toString() + ".";
    if (nbr2 != values[0] / values[2] ||
        nbr3 != values[1] / values[2]) {
        var txt = "   Chaque bouquets devait être composé de " + (values[0] / values[2]).toString();
        txt += " roses et de " + (values[1] / values[2]).toString() + " marguerites.";

        document.getElementById("correctiondivision").innerHTML = txt;
    }
}

function Annuler() {
    document.getElementById("bouquets").value = 0;
    document.getElementById("roses").value = 0;
    document.getElementById("marguerites").value = 0;
    document.getElementById("correctionpgcd").innerHTML = "";
    document.getElementById("correctiondivision").innerHTML = "";
    document.getElementById("correctionGlobal").innerHTML = "";
}


function Recommencer() {
    Annuler();
    values = Troisième_Arithmetique.GenererExerciceProblème(1800, 3000);
    document.getElementById("rosesnbr").innerHTML = values[0].toString();
    document.getElementById("margueritesnbr").innerHTML = values[1].toString();
}

function Resume(){
    var reponse = ["Question","Reponse", "Tu as bien donné le nombre MAXIMUM de bouquet ?","Correction"];

    reponse[0] = "Les bouquets :" + values[0] + " roses et  " + values[1] + "marguerites";
    reponse[1] = "Tu as choisi : " + document.getElementById("bouquets").value + " bouquets, chacun de :";
    reponse[1] += document.getElementById("roses").value + " roses et ";
    reponse[1] += document.getElementById("marguerites").value + " marguerites.";

    reponse[3] = "La bonne réponse était : " + values[2] + "bouquets, chacun de :";
    reponse[3] += (values[0] / values[2]) + " roses et ";
    reponse[3] += (values[1] / values[2]) + " marguerites.";

    return reponse
}