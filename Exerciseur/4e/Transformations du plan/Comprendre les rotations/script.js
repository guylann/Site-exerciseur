var Titre = "Comprendre l'effet d'une rotation.";
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
            values = Quatrième_TranformationPlan.GénérerRotationFull();
            while (values[3] < 0){
                values = Quatrième_TranformationPlan.GénérerRotationFull();
            }
            
            document.getElementById("NomFigure1").innerHTML = values[0];
            document.getElementById("TransPointa").innerHTML = Constante.alphabet[values[2]];
            document.getElementById("TransPointb").innerHTML = 360 - values[1];
            document.getElementById("Resultat").innerHTML = "";
        }

        function premierlancement(){
            var c = document.getElementById("myCanvas");
            Quatrième_TranformationPlan.DessinerFigure(c);
            premier = false;
        }

function Annuler() {}

function Resume(){
    var reponse = ["Question","Reponse", "","Correction"];

    
    reponse[0] = "l'image de " + values[0];
    reponse[1] = document.getElementById("indexFigureImage").value;
    reponse[3] = values[3];

    return reponse
}