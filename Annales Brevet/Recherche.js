
const ListExercices = [
    ["2019 - Amérique du nord",1, ["pythagore", "thales", "trigonometrie"]],
    ["2019 - Amérique du nord",2, ["vrai faux", "fraction", "fonction", "probabilites", "expression litterales"]],
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


var Resultats = [0];
var tagsclick = false;

function Rechercher(texte)
{
    document.getElementById('recherche').value = texte;
    var textes = texte.split(" ");
    Resultats = [];
    for(var l = 0; l<ListExercices.length; l++)
    {
        if (texte == "")
        {
            Add(l);
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
            txt = txt.toLowerCase();
            txt = txt.replace("é", "e");
            txt = txt.replace("è", "e");
            txt = txt.replace("ê", "e");
            txt = txt.replace("à", "a");
            txt = txt.replace("ï", "i");
            txt = txt.replace("ù", "u");

            if (titre.includes(" " + txt + " "))
                Add(l);
            for(var i = 0; i<ListExercices[l][2].length; i++)
            {
                element = ListExercices[l][2][i];
                element = " " + element + " "
                if (element.includes(" " + txt + " "))
                    Add(l);
            };
        });
    }
    CreateListe();
}

function Add(int)
{
    if (Resultats.includes(int))
        return;
    Resultats.push(int);
}


function CreateListe(){
    document.getElementById("Resultats").innerHTML = "";

    if (Resultats.length == 0)
    {
        var ligneblock = document.createElement("div");
        ligneblock.setAttribute("class", "Result");
        ligneblock.innerHTML = "Aucun résultat"
        document.getElementById("Resultats").appendChild(ligneblock);
        return;
    }

    for(var l = 0; l<Resultats.length; l++)
    {
        var ligneblock = document.createElement("div");
        ligneblock.setAttribute("class", "Result");
        ligneblock.name = ListExercices[Resultats[l]][0];
        ligneblock.id = ListExercices[Resultats[l]][1];
        ligneblock.onclick = function(){SelectExercice(this)}

        var label = document.createElement("a");
        //label.name = ListExercices[Resultats[l]][0];
        //label.id = ListExercices[Resultats[l]][1];
        label.innerHTML = ListExercices[Resultats[l]][0] + " Exercice " + ListExercices[Resultats[l]][1];
        //label.onclick = function(){SelectExercice(this)}
        ligneblock.appendChild(label);
        ligneblock.appendChild(document.createElement("br"));

        
        var tags = document.createElement("div");
        
        for(var i = 0; i < ListExercices[Resultats[l]][2].length; i++){
            var tag = document.createElement("div");
            tag.setAttribute("class", "tag");
            var content = document.createElement("label");
            content.innerHTML = ListExercices[Resultats[l]][2][i];
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
