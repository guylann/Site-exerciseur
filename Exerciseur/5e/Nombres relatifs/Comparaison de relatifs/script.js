var Titre = "Comparer des nombres relatifs.";
var Consigne =  "Choisir le bon signe de comparaison entre les deux nombres ci-dessous."

var document = HtmlManipulator.Gdocument;

var values;
        var param;

        function Valider() {
            var id = document.getElementById("Propositions").selectedIndex;
            if (((id === 0 || id === 1) && (values[0] === values[1])) ||
                (id === 2 && (values[0] > values[1])) ||
                (id === 3 && (values[0] < values[1])))
            {
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else{
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
                var Correction = Cinquième_NombresRlatifs.ConvertNombre(values[0]) + " ";
                if (values[0] === values[1])
                    Correction += "="
                else if (values[0] > values[1])
                    Correction += ">"
                else if (values[0] < values[1])
                    Correction += "<"
                Correction += " " + Cinquième_NombresRlatifs.ConvertNombre(values[1]) ;
                document.getElementById("Correction").innerHTML = Correction;
                
            }
        }

        function Annuler() {
            document.getElementById("Propositions").selectedIndex = 0;
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").innerHTML = "";
        }


        function Recommencer() {
            Annuler();
            values =  Cinquième_NombresRlatifs.GetComparaison();
            var nombre1 =  Cinquième_NombresRlatifs.ConvertNombre(values[0]) + "&nbsp;";
            var nombre2 = "&nbsp;" +  Cinquième_NombresRlatifs.ConvertNombre(values[1]);
            document.getElementById("Nombre1").innerHTML = nombre1;
            document.getElementById("Nombre2").innerHTML = nombre2;
        }