var Titre = "Déterminer si un nombre est premier.";
var Consigne =  "Cocher la case a côté d'un nombre si celui-ci est premier."

var document = HtmlManipulator.Gdocument;



var nombre;

function Recommencer() {
    nombre = Troisième_Arithmetique.CreerListNbrPremierOuNon(4, 50, 150);
    Annuler();
    document.getElementById("check1label").innerHTML = nombre[0];
    document.getElementById("check2label").innerHTML = nombre[2];
    document.getElementById("check3label").innerHTML = nombre[4];
    document.getElementById("check4label").innerHTML = nombre[6];
    document.getElementById("TextReponse").innerHTML = "";
}

function Annuler() {
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
}


function Valider() {
    var c1 = document.getElementById("check1").checked;
    var c2 = document.getElementById("check2").checked;
    var c3 = document.getElementById("check3").checked;
    var c4 = document.getElementById("check4").checked;

    if (c1 == nombre[1] && c2 == nombre[3] && c3 == nombre[5] && c4 == nombre[7])
        document.getElementById("TextReponse").innerHTML = "Bravo, c'est correct !";
    else if (!nombre[1] && !nombre[3] && !nombre[5] && !nombre[7])
        document.getElementById("TextReponse").innerHTML = "Oups ! il n'a avait pas de nombre premier ici ...";
    else if (c1 != nombre[1] && c2 != nombre[3] && c3 != nombre[5] && c4 != nombre[7]) {
        var txt = "C'est loupé dommage, ";
        var ar = []
        if (nombre[1] == true) ar.push(nombre[0]);
        if (nombre[3] == true) ar.push(nombre[2]);
        if (nombre[5] == true) ar.push(nombre[4]);
        if (nombre[7] == true) ar.push(nombre[6]);
        if (ar.length > 1)
            txt += "les nombres premiers étaient : ";
        else
            txt += "le nombre premier était : ";
        txt += ar.toString();
        document.getElementById("TextReponse").innerHTML = txt;
    }
    else {
        var txt = "Tu y étais presque, ";
        var ar = []
        if (nombre[1] == true) ar.push(nombre[0]);
        if (nombre[3] == true) ar.push(nombre[2]);
        if (nombre[5] == true) ar.push(nombre[4]);
        if (nombre[7] == true) ar.push(nombre[6]);
        if (ar.length > 1)
            txt += "les nombres premiers étaient : ";
        else
            txt += "le nombre premier était : ";
        txt += ar.toString();
        document.getElementById("TextReponse").innerHTML = txt;
    }
    
}

function Resume(){
    var reponse = ["Question","Reponse", "As-tu penser à utiliser les critères de divisibilité ?","Correction"];

    var c1 = document.getElementById("check1").checked;
    var c2 = document.getElementById("check2").checked;
    var c3 = document.getElementById("check3").checked;
    var c4 = document.getElementById("check4").checked;

    reponse[0] = "Trouver les nombres premiers parmis : " + nombre[0] + " ; " + nombre[2] + " ; " + nombre[4] + " ; " + nombre[6];
    reponse[1] = "";//"Tu as choisi : ";
    if (c1)
        reponse[1] += nombre[0] + " ; ";
    if (c2)
        reponse[1] += nombre[2] + " ; ";
    if (c3)
        reponse[1] += nombre[4] + " ; ";
    if (c4)
        reponse[1] += nombre[6];
    reponse[3] = "La bonne réponse était : ";
    if (nombre[1])
        reponse[3] += nombre[0] + " ; ";
    if (nombre[3])
        reponse[3] += nombre[2] + " ; ";
    if (nombre[5])
        reponse[3] += nombre[4] + " ; ";
    if (nombre[7])
        reponse[3] += nombre[6];


    return reponse
}