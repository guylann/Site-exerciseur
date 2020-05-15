
//  ["tag principale", [ "tags secondaire associé (non affiché mais trouvé lors de la recherche)" ]],
const Tags = {
    "Pythagore":                ["pythagore", "triangle rectangle","egalite","pytagore"],
    "Thalès":                   ["thales", "agrandissement", "reduction", "egalite", "tales"],
    "Trigonométrie":            ["trigonometrie", "cosinus", "cos", "arccos", "sinus", "sin", "arcsin", "tangente", "tan", "arctan", "triangle rectangle"],
    "Fraction":                 ["fraction", "division", "calcul", "nombres"],
    "Fonction":                 ["fonction", "affine", "lineaire", "graphique", "courbe"],
    "Probabilités":             ["probabilites", "chance"],
    "Expressions litterales":   ["expressions litterales", "x", "developpement", "factorisation", "reduction", "equation"],
    "Vrai faux":                ["vrai faux", "qcm"],
    "Statistique":              ["statistique", "graphique", "diagramme", "courbe"],
    "Volume":                   ["volume", "solide", "boule", "pyramide", "cube", "pave droit", "prisme"],
    "Géometrie":                ["geometrie", "transformation du plan", "homothétie", "translation", "rotation", "symetrie"]
};


const ListExercices = [
    ["2019 - Amérique du nord",1, ["Pythagore", "Thalès", "Trigonométrie"]],
    ["2019 - Amérique du nord",2, ["Vrai faux", "Fraction", "Fonction", "Probabilités", "Expressions litterales"]],
    ["2019 - Amérique du nord",3, "Tags"],
    ["2019 - Amérique du nord",4, "Tags"],
    ["2019 - Amérique du nord",5, "Tags"],
    ["2019 - Amérique du nord",6, "Tags"],
    ["2019 - Amérique du nord",7, "Tags"],
    ["2019 - Amérique du nord",8, "Tags"],
    ["2019 - Amérique du sud",1, "Tags"],
    ["2019 - Amérique du sud",2, "Tags"],
    ["2019 - Amérique du sud",3, "Tags"],
    ["2019 - Amérique du sud",4, "Tags"],
    ["2019 - Amérique du sud",5, "Tags"],
    ["2019 - Amérique du sud",6, "Tags"],
    ["2019 - Antilles-Guyane Juin",1, "Tags"],
    ["2019 - Antilles-Guyane Juin",2, "Tags"],
    ["2019 - Antilles-Guyane Juin",3, "Tags"],
    ["2019 - Antilles-Guyane Juin",4, "Tags"],
    ["2019 - Antilles-Guyane Juin",5, "Tags"],
    ["2019 - Antilles-Guyane Juin",6, "Tags"],
    ["2019 - Antilles-Guyane Septembre",1, "Tags"],
    ["2019 - Antilles-Guyane Septembre",2, "Tags"],
    ["2019 - Antilles-Guyane Septembre",3, "Tags"],
    ["2019 - Antilles-Guyane Septembre",4, "Tags"],
    ["2019 - Antilles-Guyane Septembre",5, "Tags"],
    ["2019 - Antilles-Guyane Septembre",6, "Tags"],
    ["2019 - Asie",1, "Tags"],
    ["2019 - Asie",2, "Tags"],
    ["2019 - Asie",3, "Tags"],
    ["2019 - Asie",4, "Tags"],
    ["2019 - Asie",5, "Tags"],
    ["2019 - Asie",6, "Tags"],
    ["2019 - Asie",7, "Tags"],
    ["2019 - Centres étrangers",1, "Tags"],
    ["2019 - Centres étrangers",2, "Tags"],
    ["2019 - Centres étrangers",3, "Tags"],
    ["2019 - Centres étrangers",4, "Tags"],
    ["2019 - Centres étrangers",5, "Tags"],
    ["2019 - Centres étrangers",6, "Tags"],
    ["2019 - Centres étrangers",7, "Tags"],
    ["2019 - Grèce",1, "Tags"],
    ["2019 - Grèce",2, "Tags"],
    ["2019 - Grèce",3, "Tags"],
    ["2019 - Grèce",4, "Tags"],
    ["2019 - Grèce",5, "Tags"],
    ["2019 - Grèce",6, "Tags"],
    ["2019 - Métropole",1, "Tags"],
    ["2019 - Métropole",2, "Tags"],
    ["2019 - Métropole",3, "Tags"],
    ["2019 - Métropole",4, "Tags"],
    ["2019 - Métropole",5, "Tags"],
    ["2019 - Métropole",6, "Tags"],
    ["2019 - Nouvelle-Calédonie",1, "Tags"],
    ["2019 - Nouvelle-Calédonie",2, "Tags"],
    ["2019 - Nouvelle-Calédonie",3, "Tags"],
    ["2019 - Nouvelle-Calédonie",4, "Tags"],
    ["2019 - Nouvelle-Calédonie",5, "Tags"],
    ["2019 - Nouvelle-Calédonie",6, "Tags"],
    ["2019 - Nouvelle-Calédonie",7, "Tags"],
    ["2019 - Nouvelle-Calédonie",8, "Tags"],
    ["2019 - Polynésie",1, "Tags"],
    ["2019 - Polynésie",2, "Tags"],
    ["2019 - Polynésie",3, "Tags"],
    ["2019 - Polynésie",4, "Tags"],
    ["2019 - Polynésie",5, "Tags"],
    ["2019 - Polynésie",6, "Tags"],
    ["2019 - Polynésie",7, "Tags"],
]


var Resultats = {};
var tagsclick = false;

function Rechercher(texte)
{
    document.getElementById('recherche').value = texte;
    var textes = texte.split(" ");
    textes.unshift(texte)
    Resultats = {};
    for(var l = 0; l<ListExercices.length; l++)
    {
        if (texte == "")
        {
            Add(l, 1);
            continue;
        }
        var titre = " " + ListExercices[l][0] + " Exercice " + ListExercices[l][1] + " ";
        titre = titre.toLowerCase();
        titre = titre.replace("é", "e");
        titre = titre.replace("è", "e");
        titre = titre.replace("ê", "e");
        titre = titre.replace("à", "a");
        titre = titre.replace("ï", "i");
        titre = titre.replace("ù", "u");
        textes.forEach(txt => {
            if (txt != "")
            {
                txt1 = txt;
                txt = txt.toLowerCase();
                txt = txt.replace("é", "e");
                txt = txt.replace("è", "e");
                txt = txt.replace("ê", "e");
                txt = txt.replace("à", "a");
                txt = txt.replace("ï", "i");
                txt = txt.replace("ù", "u");

                let Regex = RegExp('(' + txt + ')+');
                if (Regex.test(titre))
                {
                    if (textes.indexOf(txt1) == 0 && txt.length > 5)
                        Add(l, count('(' + txt + ')+', titre) + 1);
                    else
                        Add(l, count('(' + txt + ')+', titre) * txt.length / titre.length);
                }
                for(var i = 0; i<ListExercices[l][2].length; i++)
                {
                    var tagname = ListExercices[l][2][i];
                    if (!Tags.hasOwnProperty(tagname))
                        continue;
                    for(var j = 0; j < Tags[tagname].length; j++)
                    {
                        let globalRegex = RegExp('(' + txt + ')+');
                        let element = Tags[tagname][j];

                        if (globalRegex.test(element))
                            Add(l, count('(' + txt + ')+', element) * txt.length / element.length);
                    }
                };
            }
        });
    }
    CreateListe();
}

function count(re, str) {
    if (typeof re !== "string") {
        return 0;
    }
    re = (re === '.') ? ('\\' + re) : re;
    var cre = new RegExp(re, 'g');
    return ((str || '').match(cre) || []).length;
}

function Add(int, poids)
{
    if (Resultats.hasOwnProperty(int))
    {
        if (Resultats[int] < poids)
            Resultats[int] = poids;
        return;
    }
    Resultats[int] = poids;
}


function CreateListe(){
    document.getElementById("Resultats").innerHTML = "";

    var results = Object.keys(Resultats).map(function(key) {
        return [Number(key), Resultats[key]];
    });
    results.sort(function(a, b){
        if (a[0] == b[0]) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        }
        return b[1]-a[1]
    })

    if (results.length == 0)
    {
        var ligneblock = document.createElement("div");
        ligneblock.setAttribute("class", "Result");
        ligneblock.innerHTML = "Aucun résultat"
        document.getElementById("Resultats").appendChild(ligneblock);
        return;
    }
    //console.clear();
    for(var l = 0; l<results.length; l++)
    {
        //console.log(results[l][0] + " => " + results[l][1])
        var ligneblock = document.createElement("div");
        ligneblock.setAttribute("class", "Result");
        ligneblock.name = ListExercices[results[l][0]][0];
        ligneblock.id = ListExercices[results[l][0]][1];
        ligneblock.onclick = function(){SelectExercice(this)}

        var label = document.createElement("a");
        label.innerHTML = ListExercices[results[l][0]][0] + " Exercice " + ListExercices[results[l][0]][1];
        ligneblock.appendChild(label);
        ligneblock.appendChild(document.createElement("br"));

        
        var tags = document.createElement("div");
        
        for(var i = 0; i < ListExercices[results[l][0]][2].length; i++){
            var tag = document.createElement("div");
            tag.setAttribute("class", "tag");
            var content = document.createElement("label");
            content.innerHTML = ListExercices[results[l][0]][2][i];
            content.onclick = function(){
                tagsclick = true; 
                Rechercher(this.innerHTML)
            };
            tag.appendChild(content);
            tags.appendChild(tag);
        }


        ligneblock.appendChild(tags);
        document.getElementById("Resultats").appendChild(ligneblock);
    }
}
