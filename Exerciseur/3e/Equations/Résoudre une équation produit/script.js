var Titre = "Résoudre une équation produit.";
var Consigne =  "Trouver les solution de cette équation. Donner la réponse arrondie au centième. ATTENTION : pour écrire une virgule il faut mettre un point."

var document = HtmlManipulator.Gdocument;


var nombre;

function Recommencer() {
    nombre = Troisième_Equations.CreateEqProd();
    document.getElementById("TextQuestion").innerHTML = nombre[0];
    document.getElementById("Resultat1").innerHTML = "";
    document.getElementById("TextReponse1").innerHTML = "";
    document.getElementById("fname1").value = "";
	document.getElementById("Resultat2").innerHTML = "";
    document.getElementById("TextReponse2").innerHTML = "";
    document.getElementById("fname2").value = "";
}


function Valider() {
    var txt1 = document.getElementById("fname1").value;
    document.getElementById("TextReponse1").innerHTML = "";
	var txt2 = document.getElementById("fname2").value;
    document.getElementById("TextReponse2").innerHTML = "";
    if (nombre[1] == txt1) {
        document.getElementById("Resultat1").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat1").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
        document.getElementById("TextReponse1").innerHTML = nombre[1];
    }
	if (nombre[2] == txt2) {
        document.getElementById("Resultat2").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat2").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
        document.getElementById("TextReponse2").innerHTML = nombre[2];
    }
}

function Annuler() {}

function Resume(){
    var reponse = ["Question","Reponse", "Tu as bien les 2 solutions ? Tu as pensé à remplacer la lettre par ta réponse pour vérifier ?","Correction"];

    reponse[0] = "Résoudre " + nombre[0];
    reponse[1] = document.getElementById("fname1").value + " et " + document.getElementById("fname2").value;
    reponse[3] = nombre[1] + " et " + nombre[2];

    return reponse
}