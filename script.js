var Premier = [2, 3, 5, 7, 11, 13, 17, 19];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}



//Arithmétique

// Crée la décomposition d'un nombre aléatoire entre min et max sous forme de texte
function CreateDecompBetween(min, max) {
    var array = [2,2,2,2,2556];
    var nombre;
    while (array.length === 1 || array[array.length - 1] > Premier[Premier.length - 1]) {
        nombre = Randint(min, max);
        array = Decomposition(nombre);
    }
    return [nombre.toString(), DecompositionToTxt(array)];
}
// Crée la décomposition d'un nombre sous forme de tableau de nombre
function Decomposition(nbr)
{
    var result = [];
    var i = 0;
    while (i < Premier.length) {
        if (nbr % Premier[i] === 0) {
            nbr = nbr / Premier[i];
            result.push(Premier[i]);
        }
        else {
            i++;
        }
    }
    if (nbr !== 1)
        result.push(nbr);
    return result;
}
// Transforme un tableau de nombre en une suite de multiplication sous forme de texte
function DecompositionToTxt(array) {
    var txt = array[0].toString();
    for (i = 1; i < array.length; i++) {
        txt += "*" + array[i].toString();
    }
    console.log(txt);
    return txt;
}





