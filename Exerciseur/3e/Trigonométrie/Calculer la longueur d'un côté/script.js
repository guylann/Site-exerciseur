var Titre = "Calculer la longueur d'un côté.";
var Consigne =  "Calculer la longueur du côté manquant arrondi au dixième."

var document = HtmlManipulator.Gdocument;



var nombre;

function Valider(){
    var txt = document.getElementById("fname").value;
    txt = txt.replace(/x/g,"*");
    txt = txt.replace(/X/g,"*");
    if (Résultat()) {
        document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était :";
        document.getElementById("TextReponse").innerHTML = nombre[1];
    }
}


function Résultat()
{
    return nombre[1] == txt;
}

function test(tableau){
    var a = 1
    for (let index = 0; index < tableau.length; index++) {
        const element = tableau[index];
        a *= parseInt(element)
    }
    return a;
}


function Recommencer(){
    nombre = Troisième_Arithmetique.CreateDecompBetween(100, 1000);
    document.getElementById("TextQuestion").innerHTML = nombre[0];
    document.getElementById("Resultat").innerHTML = "";
    document.getElementById("TextReponse").innerHTML = "";
    document.getElementById("fname").value = "";
}

function Annuler(){

}


function Resume(){
    var reponse = ["Question","Reponse", "Tes nombres sont-ils tous premiers ?","Correction"];

    reponse[0] = "Décomposer " +nombre[0] + " en produits de facteurs premiers";
    reponse[1] = document.getElementById("fname").value;
    reponse[3] = "La bonne réponse était : " + nombre[1];

    return reponse
}