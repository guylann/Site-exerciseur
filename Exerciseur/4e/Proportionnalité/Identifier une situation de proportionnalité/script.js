var Titre = "Identifier une situation de proportionnalité.";
var Consigne =  "Ce tableau est-il un tableau de proportionnalité ?"

var document = HtmlManipulator.Gdocument;

var values = Quatrième_Proportionnalité.CreateSitProp();


        function Valider() {
            var nbr1 = document.getElementById("oui").checked;
            var nbr2 = document.getElementById("non").checked;
            document.getElementById("Sol").innerHTML = "";
            if (values[6] == nbr1 && (nbr1 || nbr2))
                document.getElementById("Sol").innerHTML = "Bravo c'est correct";
            else {
                document.getElementById("Sol").innerHTML = "C'est incorrect";
            }
        }

        function Annuler() {
            document.getElementById("oui").checked = false;
			document.getElementById("non").checked = false;
			document.getElementById("Sol").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values = Quatrième_Proportionnalité.CreateSitProp();
            document.getElementById("numerateur").innerHTML = values[0].toString();
            document.getElementById("denominateur").innerHTML = values[1].toString();
            document.getElementById("numerateur2").innerHTML = values[2].toString();
			document.getElementById("denominateur2").innerHTML = values[3].toString();
            document.getElementById("numerateur3").innerHTML = values[4].toString();
			document.getElementById("denominateur3").innerHTML = values[5].toString();
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = "Y-a-t-il proportionnalité ? : " + values[0].toString() + " pour " + values[1].toString() + " ; " + values[2].toString() + " pour " + values[3].toString()+ " ; " + values[4].toString() + " pour " + values[5].toString();
            if (document.getElementById("oui").checked)
                reponse[1] = "Oui";
            else if (document.getElementById("non").checked)
                reponse[1] = "Non";
            if (values[6])
                reponse[3] = "Oui";
            else
                reponse[3] = "Non";
        
            return reponse
        }