var Titre = "Simplifier une  fraction.";
var Consigne =  "Simplifier la fraction suivante pour la rendre irréductible.<br>Indiquer le numérateur et le dénominateur dans les cases correspondantes pour la corrrection."

var document = HtmlManipulator.Gdocument;

var values;


        function Valider() {
            var nbr1 = document.getElementById("Rep_numerateurs").value;
            var nbr2 = document.getElementById("Rep_denominateurs").value;
            document.getElementById("Cor_numerateur").innerHTML = "";
            document.getElementById("Cor_denominateur").innerHTML = "";
            if (nbr1 == values[0] / values[2] &&
                nbr2 == values[1] / values[2])
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            else {
                document.getElementById("Cor_numerateur").innerHTML = (values[0] / values[2]).toString();
                document.getElementById("Cor_denominateur").innerHTML = (values[1] / values[2]).toString();
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
            }
        }

        function Annuler() {
            document.getElementById("Rep_numerateurs").value = 0;
            document.getElementById("Rep_denominateurs").value = 0;
            document.getElementById("Cor_numerateur").innerHTML = "";
            document.getElementById("Cor_denominateur").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values = Quatrième_Fractions.GenererExerciceProblème(10, 100);
            document.getElementById("numerateur").innerHTML = values[0].toString();
            document.getElementById("denominateur").innerHTML = values[1].toString();
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = "Simplifier " + values[0].toString() + "/" + values[1].toString();
            reponse[1] = document.getElementById("Rep_numerateurs").value + "/" + document.getElementById("Rep_denominateurs").value;
            reponse[3] = (values[0] / values[2]).toString() + "/" + (values[1] / values[2]).toString();
        
            return reponse
        }