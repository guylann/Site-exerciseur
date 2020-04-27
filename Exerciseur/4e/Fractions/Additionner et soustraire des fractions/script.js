var Titre = "Additionner et soustraire des fractions.";
var Consigne =  "Réaliser l'opération suivante. La calculatrice est FORTEMENT déconseillée.<br>Indiquer le numérateur et le dénominateur dans les cases correspondantes pour la corrrection."

var document = HtmlManipulator.Gdocument;

var values;


        function Valider() {
            var nbr1 = document.getElementById("Rep_numerateurs").value;
            var nbr2 = document.getElementById("Rep_denominateurs").value;
            document.getElementById("Cor_numerateur").innerHTML = "";
            document.getElementById("Cor_denominateur").innerHTML = "";
			document.getElementById("Cor_numerateurSimp").innerHTML = "";
            document.getElementById("Cor_denominateurSimp").innerHTML = "";
            var croix1 = nbr1*values[5];
            var croix2 = nbr2*values[4];
            if (croix1 === croix2 && nbr2 != 0)
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            else {
                document.getElementById("Cor_numerateur").innerHTML = (values[4]).toString();
				document.getElementById("Cor_numerateurSimp").innerHTML = (values[7]).toString();
                document.getElementById("Cor_denominateur").innerHTML = (values[5]).toString();
				document.getElementById("Cor_denominateurSimp").innerHTML = (values[8]).toString();
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
            }
        }

        function Annuler() {
            document.getElementById("Rep_numerateurs").value = 0;
            document.getElementById("Rep_denominateurs").value = 0;
            document.getElementById("Cor_numerateur").innerHTML = "";
            document.getElementById("Cor_denominateur").innerHTML = "";
			document.getElementById("Cor_numerateurSimp").innerHTML = "";
            document.getElementById("Cor_denominateurSimp").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values = Quatrième_Fractions.CreateAdd();
            document.getElementById("numerateur").innerHTML = values[0].toString();
            document.getElementById("denominateur").innerHTML = values[1].toString();
            document.getElementById("numerateur2").innerHTML = values[2].toString();
            document.getElementById("denominateur2").innerHTML = values[3].toString();
			document.getElementById("operation").innerHTML = values[6].toString();
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = values[0].toString() + "/" + values[1].toString() + values[6].toString() + values[2].toString() + "/" + values[3].toString();
            reponse[1] = document.getElementById("Rep_numerateurs").value + "/" + document.getElementById("Rep_denominateurs").value;
            reponse[3] = (values[7]).toString() + "/" + (values[8]).toString();
        
            return reponse
        }