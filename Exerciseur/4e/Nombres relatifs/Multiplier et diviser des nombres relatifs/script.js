var Titre = "Multiplier et diviser des nombres relatifs.";
var Consigne =  "Réaliser l'opération suivante. La calculatrice est FORTEMENT déconseillée sauf pour les divisions difficiles."

var document = HtmlManipulator.Gdocument;

var nombre;

        function Recommencer() {
            nombre = Quatrième_NombresRelatifs.CreateMult();
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
                document.getElementById("TextReponse").innerHTML = Math.round(nombre[1]*1000)/1000;
            }
        }

function Annuler() {}

function Resume(){
    var reponse = ["Question","Reponse", "","Correction"];

    reponse[0] = nombre[0];
    reponse[1] = document.getElementById("fname").value;
    reponse[3] = nombre[1];

    return reponse
}