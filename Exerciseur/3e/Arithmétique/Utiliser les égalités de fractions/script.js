var Titre = "Utiliser les égalités de fractions.";
var Consigne =  "Dans chacun des cas, selectionner la fraction égale."

var document = HtmlManipulator.Gdocument;


var nbr = 4;
var nbr2 = 4;

var values2 = [];

function Valider() {
    var frac1 = [];
    var frac2 = [];
    var frac3 = [];
    var frac4 = [];
    frac1.push(document.getElementById("Rep1_F1").checked);
    frac1.push(document.getElementById("Rep1_F2").checked);
    frac1.push(document.getElementById("Rep1_F3").checked);
    frac1.push(document.getElementById("Rep1_F4").checked);

    frac2.push(document.getElementById("Rep2_F1").checked);
    frac2.push(document.getElementById("Rep2_F2").checked);
    frac2.push(document.getElementById("Rep2_F3").checked);
    frac2.push(document.getElementById("Rep2_F4").checked);
    
    frac3.push(document.getElementById("Rep3_F1").checked);
    frac3.push(document.getElementById("Rep3_F2").checked);
    frac3.push(document.getElementById("Rep3_F3").checked);
    frac3.push(document.getElementById("Rep3_F4").checked);
    
    frac4.push(document.getElementById("Rep4_F1").checked);
    frac4.push(document.getElementById("Rep4_F2").checked);
    frac4.push(document.getElementById("Rep4_F3").checked);
    frac4.push(document.getElementById("Rep4_F4").checked);

    if (frac1[values2[0][1][0]])
        document.getElementById("Rep1").innerHTML = "C'est correct !";
    else
        document.getElementById("Rep1").innerHTML = "C'est incorrect !";

    if (frac2[values2[1][1][0]])
        document.getElementById("Rep2").innerHTML = "C'est correct !";
    else
        document.getElementById("Rep2").innerHTML = "C'est incorrect !";
    
    if (frac3[values2[2][1][0]])
        document.getElementById("Rep3").innerHTML = "C'est correct !";
    else
        document.getElementById("Rep3").innerHTML = "C'est incorrect !";

    if (frac4[values2[3][1][0]])
        document.getElementById("Rep4").innerHTML = "C'est correct !";
    else
        document.getElementById("Rep4").innerHTML = "C'est incorrect !";

    
    var name1 = "Rep1_numerateur"   + (values2[0][1][0] + 1).toString()
    var name2 = "Rep1_denominateur" + (values2[0][1][0] + 1).toString()
    document.getElementById(name1).style.color = "#FF5555";
    document.getElementById(name2).style.color = "#FF5555";
    name1 = "Rep2_numerateur"   + (values2[1][1][0] + 1).toString()
    name2 = "Rep2_denominateur" + (values2[1][1][0] + 1).toString()
    document.getElementById(name1).style.color = "#FF5555";
    document.getElementById(name2).style.color = "#FF5555";
    name1 = "Rep3_numerateur"   + (values2[2][1][0] + 1).toString()
    name2 = "Rep3_denominateur" + (values2[2][1][0] + 1).toString()
    document.getElementById(name1).style.color = "#FF5555";
    document.getElementById(name2).style.color = "#FF5555";
    name1 = "Rep4_numerateur"   + (values2[3][1][0] + 1).toString()
    name2 = "Rep4_denominateur" + (values2[3][1][0] + 1).toString()
    document.getElementById(name1).style.color = "#FF5555";
    document.getElementById(name2).style.color = "#FF5555";

}

function Annuler() {
    for (j = 0; j < nbr; j++) {
        for (i = 0; i < nbr2; i++) {
            var name = "Rep" + (j + 1).toString() + "_F" + (i + 1).toString();
            document.getElementById(name).checked = false;
            var name1 = "Rep" + (j + 1).toString() + "_numerateur"   + (i + 1).toString();
            var name2 = "Rep" + (j + 1).toString() + "_denominateur"   + (i + 1).toString();
            document.getElementById(name1).style.color = "white";
            document.getElementById(name2).style.color = "white";
        }
        document.getElementById("Rep" + (j + 1).toString()).innerHTML = "";
    }
}


function Recommencer() {
    Annuler();
    values2 = [];

    for (j = 0; j < nbr; j++) {
        values2.push(Troisième_Arithmetique.CreateFractionProche(nbr2, 50, 500));
        var values = values2[j]
        document.getElementById("numerateur" + (j+1).toString()).innerHTML = values[0][0].toString();
        document.getElementById("denominateur" + (j+1).toString()).innerHTML = values[0][1].toString();
        var offset = 0;
        for (i = 0; i < nbr2; i++) {
            if (i === values[1][0]) {

                document.getElementById("Rep" + (j + 1).toString() + "_numerateur" + (i + 1).toString()).innerHTML = values[2][0].toString();
                document.getElementById("Rep" + (j + 1).toString() + "_denominateur" + (i + 1).toString()).innerHTML = values[2][1].toString();
                offset = -1;
            }
            else {
                document.getElementById("Rep" + (j + 1).toString() + "_numerateur" + (i + 1).toString()).innerHTML = values[3 + i + offset][0].toString();
                document.getElementById("Rep" + (j + 1).toString() + "_denominateur" + (i + 1).toString()).innerHTML = values[3 + i + offset][1].toString();
            }
        }
    }
}

function Resume(){
    var reponse = ["Question","Reponse", "","Correction"];

    reponse[0] = "Donner la fraction egale à : <br>";
    reponse[1] = "Tu as choisi : <br>";
    reponse[3] = "La bonne réponse était : <br>";
    for (j = 0; j < nbr; j++) {
        var values = values2[j]
        reponse[0] += values[0][0] + " / " + values[0][1] + "<br>";
        var offset = 0;
        for (i = 0; i < nbr2; i++) {
            if (i === values[1][0]) {
                reponse[3] += values[2][0] + " / " + values[2][1] + "<br>";
                offset = -1;
            }
            if (document.getElementById("Rep" + (j+1).toString() + "_F" + (i+1).toString()).checked){
                if (i === values[1][0]) {
                    reponse[1] += values[2][0] + " / " + values[2][1] + "<br>"
                }
                else {
                    reponse[1] += values[3 + i + offset][0] + " / " + values[3 + i + offset][1] + "<br>"
                }
            }
        }
    }

    return reponse
}