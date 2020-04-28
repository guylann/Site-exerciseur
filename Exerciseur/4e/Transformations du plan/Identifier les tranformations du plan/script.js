var Titre = "Identifier les tranformations du plan.";
var Consigne =  "Compléter la phrase ci-dessous en vous aidant de la figure. Attention les noms de points sont à mettre en majuscule."

var document = HtmlManipulator.Gdocument;

var values;
        var typefigure = 0;
var premier = true;


        function Valider() {
            var id = document.getElementById("Propositions").selectedIndex;
            var t;

            var result = -1;
            var piece = values[1][0];
            if (id == 0 || id == 1)
            {
                var pointa = Constante.alphabet.indexOf(document.getElementById("translation_point1").value);
                var pointb = Constante.alphabet.indexOf(document.getElementById("translation_point2").value);
                result = Quatrième_TranformationPlan.ApplyTranslation(piece, pointa, pointb);
            }
            else if (id == 2){
                var centre = Constante.alphabet.indexOf(document.getElementById("rotation_center").value);
                var rotation = 90 * Math.max(document.getElementById("rotation_angle").selectedIndex,1);
                var sens = (((document.getElementById("rotation_sens").selectedIndex * 2) % 3 )% 2 )* -2 + 1;
                rotation = (rotation * sens + 360) % 360;
                result = Quatrième_TranformationPlan.ApplyRotation(piece, centre, rotation);
            }
            else if (id == 3){
                var p1 = Constante.alphabet.indexOf(document.getElementById("symétrieAxial_point1").value);
                var p2 = Constante.alphabet.indexOf(document.getElementById("symétrieAxial_point2").value);
                result = Quatrième_TranformationPlan.ApplySymetrieAxiale(piece, p1, p2);
            }
            else if (id == 4)
            {
                var centre2 = Constante.alphabet.indexOf(document.getElementById("symétrieCentrale_centre").value);
                result = Quatrième_TranformationPlan.ApplySymetrieCentrale(piece, centre2);
            }


            if (result == values[1][3])
            {
                    document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else{
                if (values[0] == 0){
                    t = "C'est loupé pour cette fois, c'etait une translation qui transforme par exemple ";
                    t += Constante.alphabet[values[1][1]] + " en " + Constante.alphabet[values[1][2]];
                    document.getElementById("Resultat").innerHTML = t;
                }
                else if (values[0] == 1){
                    t = "C'est loupé pour cette fois, c'etait une rotation de centre ";
                    t += Constante.alphabet[values[1][2]] + " d'angle " + values[1][1] + "° dans le sens horaire";
                    document.getElementById("Resultat").innerHTML = t;
                }
                else if (values[0] == 2){
                    t = "C'est loupé pour cette fois, c'etait une symétrie axiale d'axe (";
                    t += Constante.alphabet[values[1][1]] + Constante.alphabet[values[1][2]] + ") par exemple.";
                    document.getElementById("Resultat").innerHTML = t;
                }
                else if (values[0] == 3){
                    t = "C'est loupé pour cette fois, c'etait une symétrie centrale de centre ";
                    t += Constante.alphabet[values[1][2]];
                    document.getElementById("Resultat").innerHTML = t;
                }
            }
        }

        function Recommencer(){
            if (premier)
                premierlancement();
            values = Quatrième_TranformationPlan.GenererIdentifier();
            

            document.getElementById("NomFigure1").innerHTML = values[1][0];
            document.getElementById("NomFigure2").innerHTML = values[1][3];
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("translation_point1").value = "";
            document.getElementById("translation_point2").value = "";
            document.getElementById("symétrieAxial_point1").checked = false;
            document.getElementById("symétrieAxial_point2").checked = false;
            document.getElementById("symétrieCentrale_centre").value = "";
            document.getElementById("rotation_center").value = "";
            document.getElementById("rotation_angle").selectedIndex = 0;
            document.getElementById("rotation_sens").selectedIndex = 0;
            ChangeMenu();
        }

        function premierlancement(){
            var c = document.getElementById("myCanvas");
            Quatrième_TranformationPlan.DessinerFigure(c);
            premier = false;
        }
        

        function ChangeMenu(){
            var index = document.getElementById("Propositions").selectedIndex;
            document.getElementById("translation").style.display = "none";
            document.getElementById("rotation").style.display = "none";
            document.getElementById("symétrieAxial").style.display = "none";
            document.getElementById("symétrieCentrale").style.display = "none";
            if (index == 0 || index == 1){
            document.getElementById("translation").style.display = "block";
            }
            else if (index == 2){
                document.getElementById("rotation").style.display = "block";
            }
            else if (index == 3){
                document.getElementById("symétrieAxial").style.display = "block";
            }
            else if (index == 4){
                document.getElementById("symétrieCentrale").style.display = "block";
            }
        }

function Annuler() {}

function Resume(){
    var reponse = ["Question","Reponse", "","Correction"];

    
    reponse[0] = values[1][3] + "est l'image de " + values[1][0] + " par quelle tranformation ?";
    var id = document.getElementById("Propositions").selectedIndex;
    if (id == 0 || id == 1)
    {
        reponse[1] = "Translation de " + Constante.alphabet.indexOf(document.getElementById("translation_point1").value) + " en " + Constante.alphabet.indexOf(document.getElementById("translation_point2").value)
    }
    else if (id == 2){
        
        reponse[1] = "Rotation de centre " + Constante.alphabet.indexOf(document.getElementById("rotation_center").value) + 
        " d'angle " + (90 * Math.max(document.getElementById("rotation_angle").selectedIndex,1)).toString() + " dans le sens "
        if (document.getElementById("rotation_sens").selectedIndex == 0 || (document.getElementById("rotation_sens").selectedIndex == 1))
            reponse[1] += "horaire"
        else
            reponse[1] += "antihoraire"
    }
    else if (id == 3){
        reponse[1] = "Symétrie d'axe (" + Constante.alphabet.indexOf(document.getElementById("symétrieAxial_point1").value) + Constante.alphabet.indexOf(document.getElementById("symétrieAxial_point2").value) + ")";
    }
    else if (id == 4)
    {
        reponse[1] = "Symétrie centrale de centre " + Constante.alphabet.indexOf(document.getElementById("symétrieCentrale_centre").value);
    }
    if (GetImage(id) == values[1][3])
        reponse[3] = "C'est juste";
    else if (GetImage(id) != values[1][3])
        reponse[3] = "C'est faux";

    return reponse
}