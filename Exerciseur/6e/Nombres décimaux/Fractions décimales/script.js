var Titre = "Fractions décimales.";
var Consigne =  "Donner la fraction décimale de ce nombre.Indiquer le numérateur et le dénominateur dans les cases correspondantes pour la corrrection."

var document = HtmlManipulator.Gdocument;

var values = Sixième_NombresDecimaux.Exercice();


        function Valider() {
            var nbr1 = document.getElementById("Rep_numerateurs").value;
            var nbr2 = document.getElementById("Rep_denominateurs").value;
            document.getElementById("Cor_numerateur").innerHTML = "";
            document.getElementById("Cor_denominateur").innerHTML = "";
            if (nbr1 == values[1] &&
                nbr2 == values[2])
                document.getElementById("correction1").innerHTML = "Bravo c'est correct";
            else {
                document.getElementById("Cor_numerateur").innerHTML = (values[1]).toString();
                document.getElementById("Cor_denominateur").innerHTML = (values[2]).toString();
                document.getElementById("correction1").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
            }
			var nbr3 = document.getElementById("Rep").value;
			document.getElementById("Cor").innerHTML = "";
			if (nbr3 == values[5])
				document.getElementById("correction2").innerHTML = "Bravo c'est correct";
			else {
				document.getElementById("Cor").innerHTML = (values[5]).toString();
				document.getElementById("correction2").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
				}
        }

        function Annuler() {
			document.getElementById("nombre").value = 0;
            document.getElementById("numerateur").value = 0;
            document.getElementById("denominateur").value = 0;
            document.getElementById("Cor_numerateur").innerHTML = "";
            document.getElementById("Cor_denominateur").innerHTML = "";
			document.getElementById("Cor").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values = Sixième_NombresDecimaux.Exercice();
			document.getElementById("nombre").innerHTML = values[0].toString();
            document.getElementById("numerateur").innerHTML = values[3].toString();
            document.getElementById("denominateur").innerHTML = values[4].toString();
        }