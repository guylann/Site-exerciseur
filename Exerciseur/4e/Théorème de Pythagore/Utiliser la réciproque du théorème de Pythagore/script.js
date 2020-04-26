var Titre = "Utiliser la réciproque du théorème de Pythagore.";
var Consigne =  "Compléter la rédaction du théorème de Pythagore ci-dessous. Attention, les points doivent être en majuscules."

var document = HtmlManipulator.Gdocument;

var values;
        var param;

        function Valider() {
            var id = document.getElementById("Propositions").selectedIndex;
            document.getElementById("Correction").style.display = "none";
            var erreur = true;
            if ((id == 1 && values[7]) || (id == 2 && !values[7]))
            {
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else{
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
                var Correction = "Le triangle ABC ";
                if (values[7])
                    Correction += "est rectangle."
                else
                    Correction += "n'est pas rectangle."
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
            var c = document.getElementById("myCanvas");
            param = {longueurmin: 2, longueurmax: 8, arrondi: 10, hide: 3, angledroit: false};
            var faux = Constante.Randint(0,1);
            if( faux == 0)
                values = Quatrième_Pythagore.CreatePythagore(param, c);
            else
                values = Quatrième_Pythagore.CreateFauxPythagore(param, c);
        }