var Titre = "Décomposition d'un nombre décimal.";
var Consigne =  "Ecrire la décomposition en fraction décimal de ce nombre. <br>Chaque numérateur doit être compris entre 0 et 9 inclus."

var document = HtmlManipulator.Gdocument;

var values;


        function Valider() {
            var v1 = document.getElementById("Rep_numerateurs1").value;
            var v2 = document.getElementById("Rep_numerateurs2").value;
            var v3 = document.getElementById("Rep_numerateurs3").value;
            var v4 = document.getElementById("Rep_numerateurs4").value;
            var v5 = document.getElementById("Rep_numerateurs5").value;
            document.getElementById("Correction").style.display = "none";
            var erreur = false;
            if (Sixième_NombresDecimaux.NombreAcceptableDecomposition(v1,true))
            {
                if (Sixième_NombresDecimaux.NombreAcceptableDecomposition(v2) && 
                    Sixième_NombresDecimaux.NombreAcceptableDecomposition(v3) && 
                    Sixième_NombresDecimaux.NombreAcceptableDecomposition(v4) && 
                    Sixième_NombresDecimaux.NombreAcceptableDecomposition(v5))
                {
                    if (v1+v2+v3+v4+v5 == values)
                    {
                        document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
                    }
                    else
                        erreur = true;
                }
                else
                    erreur = true;
            }
            else
                erreur = true;

            if (erreur)
            {
                document.getElementById("Correction").style.display = "inline-block";
                document.getElementById("Cor_numerateurs0").innerHTML = values[0];
                document.getElementById("Cor_numerateurs1").innerHTML = Math.floor(values[0]);
                document.getElementById("Cor_numerateurs2").innerHTML = Math.floor(values[1] * 10 / values[2]) % 10;
                document.getElementById("Cor_numerateurs3").innerHTML = Math.floor(values[1] * 100 / values[2]) % 10;
                document.getElementById("Cor_numerateurs4").innerHTML = Math.floor(values[1] * 1000 / values[2]) % 10;
                document.getElementById("Cor_numerateurs5").innerHTML = Math.floor(values[1] * 10000 / values[2]) % 10;
            }
        }

        function Annuler() {
            document.getElementById("Rep_numerateurs1").value = 0;
            document.getElementById("Rep_numerateurs2").value = 0;
            document.getElementById("Rep_numerateurs3").value = 0;
            document.getElementById("Rep_numerateurs4").value = 0;
            document.getElementById("Rep_numerateurs5").value = 0;
            document.getElementById("Rep_numerateurs5").value = 0;
            document.getElementById("Correction").style.display = "none";
        }

        function Recommencer() {
            Annuler();
            values = Sixième_NombresDecimaux.GetDecompositionDecimal();
			document.getElementById("nombre").innerHTML = values[0].toString();
        }