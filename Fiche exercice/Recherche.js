
//  ["tag principale", [ "tags secondaire associé (non affiché mais trouvé lors de la recherche)" ]],
const Tags = {
    "Pythagore":                ["pythagore", "triangle rectangle","egalite","pytagore"],
    "Thalès":                   ["thales", "agrandissement", "reduction", "egalite", "tales"],
    "Trigonométrie":            ["trigonometrie", "cosinus", "cos", "arccos", "sinus", "sin", "arcsin", "tangente", "tan", "arctan", "triangle rectangle"],
    "Fraction":                 ["fraction", "division", "calcul", "nombres"],
    "Fonction":                 ["fonction", "affine", "lineaire", "graphique", "courbe", "abscisse", "ordonnee", "reperage"],
    "Probabilités":             ["probabilites", "chance"],
    "Puissances":               ["puissances", "exposant"],
    "Expressions litterales":   ["expressions litterales", "x", "developpement", "factorisation", "reduction", "equation"],
    "Vrai faux":                ["vrai faux"],
    "Proportionnalité":         ["proportionnalite", "tableau", "produit en croix", "pourcentage", "echelle", "ratio"],
    "Statistique":              ["statistique", "graphique", "diagramme", "courbe", "moyenne", "mediane", "etendue", "frequence", "serie"],
    "Solide":                   ["solide", "volume", "sphere", "boule", "pyramide", "cube", "pave droit", "prisme"],
    "Géométrie":                ["geometrie", "pavage", "transformation du plan", "homothetie", "translation", "rotation", "symetrie", "cercle", "aire", "perimetre", "semblable"],
    "Scratch":                  ["scratch", "ordinateur", "algorithme", "programmation"],
    "Tableur":                  ["tableur", "ordinateur", "cellule"],
    "Arithmétique":             ["arithmetique", "nombres premiers", "premiers", "diviseur", "multiple", "decomposition", "facteurs"],
    "Tâche complexe":           ["tache complexe", "ouvert"],
    "QCM":                      ["qcm", "choix multiple"],
    "3ème":                     ["3eme", "3", "troisieme"],
    "4ème":                     ["4eme", "4", "quatrieme"],
    "5ème":                     ["5eme", "5", "cinquieme"],
    "6ème":                     ["6eme", "6", "sixieme"],
};


const ListExercices = [
  //["Dossier", "Nom fiche", ["Liste des Tags"]],
    ["Fractions","Somme de fraction", ["4ème", "Fraction"]],
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
        var titre = " " + ListExercices[l][0] + " - " + ListExercices[l][1] + " ";
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
        ligneblock.name = ListExercices[results[l][0]][1];
        ligneblock.id = ListExercices[results[l][0]][0];
        ligneblock.onclick = function(){SelectExercice(this)}

        var label = document.createElement("a");
        label.innerHTML = ListExercices[results[l][0]][0] + " - " + ListExercices[results[l][0]][1];
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
