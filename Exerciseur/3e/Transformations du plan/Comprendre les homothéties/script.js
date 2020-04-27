var Titre = "Comprendre l'effet d'une Homothétie.";
var Consigne =  "Compléter la phrase ci-dessous en vous aidant de la figure."

var document = HtmlManipulator.Gdocument;

var values;
        var typerapport = 0;



        function Valider() {
            var id = document.getElementById("indexFigureImage").value;
            if (typerapport == 0 && (id == "DEF" || id == "EFD" || id == "FDE" || id == "FED" || id == "DFE" || id == "EDF"))
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else if (typerapport == 1 && (id == "GHI" || id == "IHG" || id == "HIG" || id == "GIH" || id == "IGH" || id == "HGI"))
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else if (typerapport == 2 && (id == "JKL" || id == "LKJ" || id == "KLJ" || id == "JLK" || id == "LJK" || id == "KJL"))
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else if (typerapport == 3 && (id == "ABC" || id == "CBA" || id == "BCA" || id == "ACB" || id == "CAB" || id == "BAC"))
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else{
                if (typerapport == 0)
                    document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, l'image de ABC était DEF";
                if (typerapport == 1)
                    document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, l'image de ABC était GHI";
                if (typerapport == 2)
                    document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, l'image de ABC était JKL";
                if (typerapport == 3)
                    document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, l'image de ABC était ABC";
            }
        }

        function Recommencer(){
            values = Troisième_TransformationPlan.GénérerHomothétie();
            var c = document.getElementById("myCanvas");
            Troisième_TransformationPlan.DrawHomothétie(values, c);
            typerapport = Constante.Randint(0,3);
            
            document.getElementById("Rapport").innerHTML = values[4 + typerapport];
            if (typerapport == 3)
                document.getElementById("Rapport").innerHTML = 1;
            document.getElementById("Resultat").innerHTML = "";
        }

        function Annuler() {}

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            
            reponse[0] = "l'image de ABC avec un rapport de " + values[4 + typerapport];
            if (typerapport == 3)
                reponse[0] = "l'image de ABC avec un rapport de 1"
            
            reponse[1] = document.getElementById("indexFigureImage").value;
            if (typerapport == 0)
                reponse[3] = "DEF";
            else if (typerapport == 1)
                reponse[3] = "GHI";
            else if (typerapport == 2)
                reponse[3] = "JKL";
            else if (typerapport == 3)
                reponse[3] = "ABC";
        
            return reponse
        }