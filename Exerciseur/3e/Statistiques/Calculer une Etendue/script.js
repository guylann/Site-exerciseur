var Titre = "Calculer une Etendue.";
var Consigne =  "Calculer l'Etendue de la liste de valeur ci-dessous.<br>ATTENTION : La virgule doit être un point."

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
            if (Troisième_Statistiques.CalculateEtendue(values).toString() == txt) {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était :";
                document.getElementById("TextReponse").innerHTML = Troisième_Statistiques.CalculateEtendue(values).toString();
            }
        }

        function Annuler(){
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = "Donner l'étendue de " + values.toString();
            reponse[1] = document.getElementById("fname").value;
            reponse[3] = Troisième_Statistiques.CalculateEtendue(values).toString();
        
            return reponse
        }