var Titre = "Décomposer un nombre en produits de facteurs premiers.";
var Consigne =  "Décomposer le nombre suivant en produits de facteurs premiers puis indiquer " +
                "votre réponse dans la case correspondante. Veillez à ordonner les nombres " + 
                "dans l'ordre croisant pour la corrrection."

var document = HtmlManipulator.Gdocument;



var nombre;

function Valider(){
    var txt = document.getElementById("fname").value;
    if (nombre[1] == txt) {
        document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
    }
    else {
        document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était :";
        document.getElementById("TextReponse").innerHTML = nombre[1];
    }
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