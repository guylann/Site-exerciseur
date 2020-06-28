const Page = {

    dependency: [],

    main: ["Menu principal", "https://criscuolomaths.netlify.com"],

    ordre: [3,2,1,0],

    troisième: 	["Troisième",
                ["Arithmétique",                        "Exerciseur/3e/Arithmétique.html"],
                ["Calcul littéral",                     "Exerciseur/3e/Calcul littéral.html"],
                ["Equations",                           "Exerciseur/3e/Equations.html"],
                ["Notion de fonction",                  "Exerciseur/3e/Notion de fonction.html"],
                ["Statistiques",                        "Exerciseur/3e/Statistiques.html"],
                ["Théorème de Thalès",                  "Exerciseur/3e/Théorème de Thalès.html"],
                ["Transformations du plan",             "Exerciseur/3e/Transformations du plan.html"],
				["Trigonométrie",						"Exerciseur/3e/Trigonométrie.html"]],

    quatrième: 	["Quatrième",
                ["Calcul littéral",                     "Exerciseur/4e/Calcul littéral.html"],
                ["Fractions",                           "Exerciseur/4e/Fractions.html"],
                ["Nombres relatifs",                    "Exerciseur/4e/Nombres relatifs.html"],
                ["Proportionnalité",                    "Exerciseur/4e/Proportionnalité.html"],
                ["Pyramide et cône",                    "Exerciseur/4e/Pyramide et cône.html"],
                ["Théorème de Pythagore",               "Exerciseur/4e/Théorème de Pythagore.html"],
                ["Transformations du plan",             "Exerciseur/4e/Transformations du plan.html"],
				["Puissances",							"Exerciseur/4e/Puissances.html"]],

    cinquième:	["Cinquième",
                ["Nombres relatifs",                    "Exerciseur/5e/Nombres relatifs.html"]],

    sixième:    ["Sixième",
                ["Nombres décimaux",                    "Exerciseur/6e/Nombres décimaux.html"]],
                
    fiche:      ["Fiches exercices",
                ["Exercice Brevet",                     "Annales Brevet/Recherche.html"],
                ["Fiches",                              "Fiche exercice/Recherche.html"]]

}

var nav = false;
var Developpedfields = [false,false,false,false,false,false];

function ChangeNav(document){
    
    nav = !nav;
    if (nav)
    {
        document.getElementById('Sidepanel').style.width = "300px";
        document.getElementById('buttonSidepanel').style.left = "300px";
    }
    else{
        document.getElementById('Sidepanel').style.width = "0";
        document.getElementById('buttonSidepanel').style.left = "0";
    }

}

function DeveloppeField(id,document){

    Developpedfields[id] = !Developpedfields[id];
    if (Developpedfields[id])
    {
        let element = document.getElementById("SidePanelField" + id.toString());
        element.style.height = element.childElementCount*45 + "px";
    }
    else{
        document.getElementById("SidePanelField" + id.toString()).style.height = "0";
    }
}

//<script src="jquery.nicescroll.js"></script>

function AddDependency(document){
    var head = document.getElementsByTagName("head")[0];
    var m = Page.main[1] + '/';
    for(var i = 0; i < Page.dependency.length; i++)
    {
        var a = document.createElement("script");
        a.setAttribute("src", m + Page.dependency[i]);
        head.appendChild(a);
    }
}
/*
<br>
        
*/
function CreateSidePanel(document, global = false){
    AddDependency(document);
    nav = false;
    Developpedfields = [false,false,false,false,false,false];
    var Sidepanel = document.getElementById("Sidepanel");
    Sidepanel.innerHTML = "";

    var a = document.createElement("a");
    a.setAttribute("href", Page.main[1]);
    a.innerHTML = Page.main[0];
    Sidepanel.appendChild(a);


    var data = [];
    for(var i = 0; i<Page.ordre.length; i++)
    {
        if (Page.ordre[i] == 0){data.push(Page.sixième);}
        if (Page.ordre[i] == 1){data.push(Page.cinquième);}
        if (Page.ordre[i] == 2){data.push(Page.quatrième);}
        if (Page.ordre[i] == 3){data.push(Page.troisième);}
    }
    data.push(Page.fiche);

    for(var l = 0; l < data.length; l++)
    {
        var ligneblock = document.createElement("div");
        ligneblock.setAttribute("id", "SidePanelField");
        ligneblock.style.display = "block";

        var a = document.createElement("button");
        a.setAttribute("class", "openbtninside");
        a.innerHTML = data[l][0];
        a.setAttribute("onclick", "DeveloppeField(" + l.toString() + ",document)");
        a.style.zIndex = "10";
        ligneblock.appendChild(a);

        var ul = document.createElement("div");
        ul.setAttribute("id", "SidePanelField" + l.toString());
        ul.style.display = "block";
        ul.style.height = "0";

        for(var i = 1; i < data[l].length; i++){
            var lien = document.createElement("a");
            
            var link = data[l][i][1];
            if (global)
                link = Page.main[1] + "/" + data[l][i][1];
            lien.setAttribute("href", link);
            lien.innerHTML = data[l][i][0];
            ul.appendChild(lien);
        }
        ligneblock.appendChild(ul);
        Sidepanel.appendChild(ligneblock);
    }

    Sidepanel.innerHTML += "<br><br>";
    var img = document.createElement("img");
    img.alt = "Licence Creative Commons";
    img.style.borderWidth = 0;
    img.src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png";
    var cc = document.createElement("a");
    cc.rel = "license";
    cc.href = "http://creativecommons.org/licenses/by-nc-sa/4.0/";
    cc.target = "_blank";
    cc.appendChild(img);
    
    Sidepanel.appendChild(cc);
}

