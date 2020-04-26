var Titre = "Calculer une moyenne.";
var Consigne =  "Calculer la moyenne de la liste de valeur ci-dessous en arrondissant au dixième près.<br>ATTENTION : La virgule doit être un point."

var document = HtmlManipulator.Gdocument;

var values;

        function Recommencer() {
            values = Troisième_Statistiques.CreateListEntier(Constante.Randint(5,10), 0,50);
            document.getElementById("TextQuestion").innerHTML = values.toString().replace(/,/gi,' ; ');
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("TextReponse").innerHTML = "";
            document.getElementById("fname").value = "";
        }

        function Valider() {
            var txt = document.getElementById("fname").value;
            document.getElementById("TextReponse").innerHTML = "";
            if (Troisième_Statistiques.CalculateMoyenne(values).toString() == txt) {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était :";
                document.getElementById("TextReponse").innerHTML = Troisième_Statistiques.CalculateMoyenne(values).toString();
            }
        }

        function Annuler(){}