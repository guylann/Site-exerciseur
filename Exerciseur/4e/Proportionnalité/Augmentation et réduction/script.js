var Titre = "Calculer le pourcentage d'un nombre";
var Consigne =  "Réaliser l'opération suivante. Arrondir le résultat au dixième."

var document = HtmlManipulator.Gdocument;

var nombre;

        function Recommencer() {
            nombre = Quatrième_Proportionnalité.Pourcentage();
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
                document.getElementById("TextReponse").innerHTML = nombre[1];
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