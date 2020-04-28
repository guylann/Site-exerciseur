var Titre = "Simplifier une fraction pour la rendre irréductible.";
var Consigne =  "Donner la fraction irréductible correspondant à la fraction donné."

var document = HtmlManipulator.Gdocument;



var nombre;

function Valider() {
    var nbr1 = document.getElementById("Rep_numerateurs").value;
    var nbr2 = document.getElementById("Rep_denominateurs").value;
    document.getElementById("Cor_numerateur").innerHTML = "";
    document.getElementById("Cor_denominateur").innerHTML = "";
    if (nbr1 == values[0] / values[2] &&
        nbr2 == values[1] / values[2])
        document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
    else {
        document.getElementById("Cor_numerateur").innerHTML = (values[0] / values[2]).toString();
        document.getElementById("Cor_denominateur").innerHTML = (values[1] / values[2]).toString();
        document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
    }
}

function Annuler() {
    document.getElementById("numerateur").value = 0;
    document.getElementById("denominateur").value = 0;
    document.getElementById("Cor_numerateur").innerHTML = "";
    document.getElementById("Cor_denominateur").innerHTML = "";
}


function Recommencer() {
    Annuler();
    values = Troisième_Arithmetique.GenererExerciceProblème(50, 500);
    document.getElementById("numerateur").innerHTML = values[0].toString();
    document.getElementById("denominateur").innerHTML = values[1].toString();
}

function Resume(){
    var reponse = ["Question","Reponse", "Ta fraction est-elle bien irréductible ?","Correction"];

    reponse[0] = "Donner la fraction irréductible de " + values[0] + " / " + values[1];
    reponse[1] = document.getElementById("Rep_numerateurs").value;
    reponse[1] += " / " + document.getElementById("Rep_denominateur").value;

    reponse[3] = "La bonne réponse était : ";
    reponse[3] += (values[0] / values[2]) + " / " + (values[1] / values[2]);

    return reponse
}