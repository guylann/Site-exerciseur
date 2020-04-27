var Titre = "Comprendre l'effet d'une symétrie (Axiale et Centrale).";
var Consigne =  "Compléter la phrase ci-dessous en vous aidant de la figure."

var document = HtmlManipulator.Gdocument;

var values;
        var typefigure = 0;
var premier = true;


        function Valider() {
            var id = document.getElementById("indexFigureImage").value;

            var piece = values[1][3];
            if (id == piece.toString())
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else{
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, l'image de " + values[1][0] + " était " + values[1][3];
            }
        }

        function Recommencer(){
            if (premier)
                premierlancement();   
            values = Troisième_TransformationPlan.GenererSymétrie();
            

            document.getElementById("NomFigure1").innerHTML = values[1][0];
            document.getElementById("Resultat").innerHTML = "";
            if (values[0] == 1){
                document.getElementById("TypeTransformation").innerHTML = "Symétrie Centrale";
                document.getElementById("SymétrieCentralePoint").innerHTML = Constante.alphabet[values[1][2]];

            }
            if (values[0] == 0){
                document.getElementById("TypeTransformation").innerHTML = "Symétrie Axiale";
                document.getElementById("SymétrieAxialLine").innerHTML = Constante.alphabet[values[1][1]]+Constante.alphabet[values[1][2]];
            }
            ChangeMenu();
        }

        function Annuler() {}

        function premierlancement(){
            var c = document.getElementById("myCanvas");
            Troisième_TransformationPlan.DessinerFigure(c);
            premier = false;
        }
        

        function ChangeMenu(){
            document.getElementById("symétrieAxial").style.display = "none";
            document.getElementById("symétrieCentrale").style.display = "none";
            if (values[0] == 0){
                document.getElementById("symétrieAxial").style.display = "inline-block";
            }
            else if (values[0] == 1){
                document.getElementById("symétrieCentrale").style.display = "inline-block";
            }
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            
            reponse[0] = "l'image de " + values[1][0];
            reponse[1] = document.getElementById("indexFigureImage").value;
            reponse[3] = values[1][3];
        
            return reponse
        }