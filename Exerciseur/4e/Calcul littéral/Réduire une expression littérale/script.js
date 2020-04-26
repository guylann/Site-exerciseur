var Titre = "Réduire une expression littérale.";
var Consigne =  "Réduire et ordonner l'expression littérale suivante :"

var document = HtmlManipulator.Gdocument;

var values;

         function Recommencer() {
            values = Quatrième_CalculLittérale.CreateReductionExpression(7, -10, 10);
            document.getElementById("TextQuestion").innerHTML = values[0];
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("TextReponse").innerHTML = "";
            document.getElementById("fname").value = "";
        }


        function Valider() {
            var txt = document.getElementById("fname").value;
            if (values[1] == txt || "+" + values[1] == txt) {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
            document.getElementById("TextReponse").innerHTML = "Réponse : " + values[1];
            }
        }

function Annuler() {}