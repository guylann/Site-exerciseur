var Titre = "Titre.";
var Consigne =  "Consigne."

var document = HtmlManipulator.Gdocument;

var values;

// Appelé par le bouton valider
function Valider() {
    var id = document.getElementById("Reponse").value;
    if (id != "")
    {
        document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
    }
    else{
        document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
        document.getElementById("Correction").innerHTML = "Voici la bonne réponse";        
    }
}

// Appelé par le bouton recommencer
function Recommencer() {
    Annuler();
    values =  Sixième_NombresDecimaux.GetComparaison();
}

// Appelé par le bouton annuler
function Annuler() {
    document.getElementById("correctionGlobal").innerHTML = "";
    document.getElementById("Correction").innerHTML = "";
}

// Crée un résumé de la réponse de l'élève (afficher lors des évaluations)
function Resume(){
    var reponse = ["Question posée","Reponse donnée", "Aide apporté" , "Correction"];

    reponse[0] = "Question posé à l'élève";
    reponse[1] = document.getElementById("Reponse").value];

    return reponse;
}