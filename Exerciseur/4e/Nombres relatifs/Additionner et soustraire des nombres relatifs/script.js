var Titre = "Additionner et soustraire des nombres relatifs.";
var Consigne =  "Réaliser l'opération suivante. La calculatrice est FORTEMENT déconseillée."

var document = HtmlManipulator.Gdocument;

var nombre;

        function Recommencer() {
            nombre = Quatrième_NombresRelatifs.CreateAdd();
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