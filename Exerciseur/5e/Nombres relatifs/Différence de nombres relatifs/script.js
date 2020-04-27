var Titre = "Différence de deux nombres relatifs.";
var Consigne =  "Effectuer la différence des deux nombres relatifs ci-dessous."

var document = HtmlManipulator.Gdocument;

var values;
        var param;

        function Valider() {
            var id = document.getElementById("Rep").value;
                document.getElementById("Correction").innerHTML = "";
            if (values[1].includes(id))
            {
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else{
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
                var Correction = values[0] + " = " + values[1][0];
                document.getElementById("Correction").innerHTML = Correction;
            }
        }

        function Annuler() {
            document.getElementById("Rep").value = "";
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values = Cinquième_NombresRlatifs.GetDifference();
            document.getElementById("Calcul").innerHTML = values[0];
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = values[0];
            reponse[1] = document.getElementById("Rep").value;
            reponse[3] = values[1][0];
        
            return reponse
        }