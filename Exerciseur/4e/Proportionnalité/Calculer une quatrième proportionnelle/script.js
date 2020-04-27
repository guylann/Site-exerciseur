var Titre = "Calculer une quatrième proportionnelle.";
var Consigne =  "Compléter le tableau de proportionnalité."

var document = HtmlManipulator.Gdocument;

var values;


        function Valider() {
            var nbr1 = document.getElementById("Rep").value;
            document.getElementById("Correc").innerHTML = "";
            if (values[3] == nbr1)
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            else {
                document.getElementById("Correc").innerHTML = (values[3]).toString();
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
            }
        }

        function Annuler() {
            document.getElementById("Rep").value = 0;
            document.getElementById("Correc").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values = Quatrième_Proportionnalité.CreateProp();
            document.getElementById("numerateur").innerHTML = values[0].toString();
            document.getElementById("denominateur").innerHTML = values[1].toString();
            document.getElementById("numerateur2").innerHTML = values[2].toString();
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = values[0].toString() + " pour " + values[1].toString() + " donc " + values[2].toString() + " pour ?";
            reponse[1] = document.getElementById("Rep").value;
            reponse[3] = values[3];
        
            return reponse
        }