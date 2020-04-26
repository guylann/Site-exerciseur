var Titre = "Comprendre l'effet d'une translation.";
var Consigne =  "Compléter la phrase ci-dessous en vous aidant de la figure."

var document = HtmlManipulator.Gdocument;

var values;
        var typefigure = 0;
var premier = true;


        function Valider() {
            var id = document.getElementById("indexFigureImage").value;
            if (id == values[3].toString())
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else{
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, l'image de " + values[0] + " était " + values[3];
            }
        }

        function Recommencer(){
            if (premier)
                premierlancement();
            values = Troisième_TransformationPlan.GénérerTranslation();
            while (values[3] < 0){
                values = Troisième_TransformationPlan.GénérerTranslation();
            }
            
            document.getElementById("NomFigure1").innerHTML = values[0];
            document.getElementById("TransPointa").innerHTML = Constante.alphabet[values[1]];
            document.getElementById("TransPointb").innerHTML = Constante.alphabet[values[2]];
            document.getElementById("Resultat").innerHTML = "";
        }

        function Annuler(){}

        function premierlancement(){
            var c = document.getElementById("myCanvas");
            Troisième_TransformationPlan.DessinerFigure(c);
            premier = false;
        }