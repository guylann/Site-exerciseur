var Titre = "Comparer des nombres décimaux.";
var Consigne =  "Choisir le bon signe de comparaison entre les deux nombres ci-dessous."

var document = HtmlManipulator.Gdocument;

var values;

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

function Annuler() {
    document.getElementById("correctionGlobal").innerHTML = "";
    document.getElementById("Correction").innerHTML = "";
}


function Recommencer() {
    Annuler();
    values =  Sixième_NombresDecimaux.GetComparaison();
}