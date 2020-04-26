var Titre = "Calculer des volumes.";
var Consigne =  "Déterminer à l'aide de l'énoncé et/ou de la figure le volume de la pyramide ou du cône."

var document = HtmlManipulator.Gdocument;

var values;
        var param;
        var volume;
        var figure;
        var showfigure;



        function Valider() {
            var id = document.getElementById("Reponse").value.toString().replace(".",",");
            var t;
            if (id == volume.toString().replace(".",","))
            {
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else{
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ... La bonne réponse était : " + volume.toString().replace(".",",") + "cm<sup>3</sup>";
            }
        }

        function Recommencer(){
            var c = document.getElementById("myCanvas");
            param = {margin: 20, sommet: 0,
                     basePoints: 0, longueurs: 0, hauteur: 0, 
                     coefbase: 0.33, angle: 0, type: 0};
                     
            let s = Quatrième_PyramideCône.CreateFigure(2,8,10);
            param.sommet = s.sommet;
            param.basePoints = s.basePoints;
            param.longueurs = s.longueurs;
            param.hauteur = s.hauteur;
            param.type = s.type;
            figure = s.type;
            volume = s.volume;

            showfigure = Constante.Randint(0,1) == 1;

            document.getElementById("TestRange").value = 0;
            document.getElementById("Testview").value = 33;

            Redraw(param, c);

            if (figure == 0){
                let txt = "";
                if (showfigure)
                {
                    txt = "La pyramide ci-contre est à base rectangulaire de hauteur [SH]. Calculer son volume.";
                }
                else{
                    txt = "Soit une pyramide ABCDS à base rectangulaire ABCD, tel que : AB = " + param.longueurs[0].toString().replace(".",",") + "cm; BC = " + param.longueurs[1].toString().replace(".",",") + "cm et de hauteur " + param.hauteur.toString().replace(".",",") + "cm. Calculer son volume."
                } 
                document.getElementById("Enonce").innerHTML = txt;
            }
            else if (figure == 1)
            {
                let txt = "";
                if (showfigure)
                {
                    txt = "La pyramide ci-contre est à base carré de hauteur [SH]. Calculer son volume.";
                }
                else{
                    txt = "Soit une pyramide ABCDS à base carré ABCD, tel que : AB = " + param.longueurs[0].toString().replace(".",",") + "cm et de hauteur " + param.hauteur.toString().replace(".",",") + "cm. Calculer son volume."
                } 
                document.getElementById("Enonce").innerHTML = txt;
            }
            else if (figure == 2)
            {
                let txt = "";
                if (showfigure)
                {
                    txt = "La pyramide ci-contre est à base triangulaire de hauteur [SH]. Dans ABC, la hauteur issue de C mesure " + param.longueurs[3].toString().replace(".",",") + "cm. Calculer son volume.";
                }
                else{
                    txt = "Soit une pyramide ABCS à base triangulaire ABC, tel que : AB = " + param.longueurs[0].toString().replace(".",",") + "cm; dans ABC la hauteur issue de C mesure " + param.longueurs[3].toString().replace(".",",") + "cm et la hauteur de la pyramide est " + param.hauteur.toString().replace(".",",") + "cm. Calculer son volume."
                } 
                document.getElementById("Enonce").innerHTML = txt;
            }
            else if (figure == 3)
            {
                let txt = "";
                if (showfigure)
                {
                    txt = "La pyramide ci-contre est à base triangulaire de hauteur [SH] tel que ABC est rectangle en B. Calculer son volume.";
                }
                else{
                    txt = "Soit une pyramide ABCS à base triangulaire ABC, tel que : ABC est un triangle rectangle en B, AB = " + param.longueurs[0].toString().replace(".",",") + "cm; BC = " + param.longueurs[1].toString().replace(".",",") + "cm et la hauteur de la pyramide est " + param.hauteur.toString().replace(".",",") + "cm. Calculer son volume."
                } 
                document.getElementById("Enonce").innerHTML = txt;
            }
            else if (figure == 4)
            {
                let txt = "";
                if (showfigure)
                {
                    txt = "Le cône ci-contre a pour hauteur [SH]. Calculer sont volume.";
                }
                else{
                    txt = "Soit un cône de rayon à la base " + param.longueurs[0].toString().replace(".",",") + "cm et de hauteur " + param.hauteur.toString().replace(".",",") + "cm. Calculer sont volume."
                } 
                document.getElementById("Enonce").innerHTML = txt;
            }

            if (showfigure)
            {
                document.getElementById("Colonne1_1").style.visibility = "visible";
                document.getElementById("Colonne1_2").style.visibility = "visible";
                document.getElementById("Colonne1_3").style.visibility = "visible";
            }
            else{
                document.getElementById("Colonne1_1").style.visibility = "hidden";
                document.getElementById("Colonne1_2").style.visibility = "hidden";
                document.getElementById("Colonne1_3").style.visibility = "hidden";
            }

        }


        function Redraw(){
            var c = document.getElementById("myCanvas");
            param.angle = document.getElementById("TestRange").value;
            param.coefbase = document.getElementById("Testview").value / 100;
            Quatrième_PyramideCône.DrawPyramide(param, c);
        }

function Annuler() {}