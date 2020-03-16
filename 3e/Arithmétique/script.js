var Premier = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var PremierCourt = [2, 3, 5, 7, 11, 13, 17, 19];
var PremierRegles = [2, 3, 5, 11];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}



//Arithmétique

// Crée la décomposition d'un nombre aléatoire entre min et max sous forme de texte
function CreateDecompBetween(min, max) {
    var array = [2,2,2,2,2556];
    var nombre;
    while (array.length === 1 || array[array.length - 1] > PremierCourt[PremierCourt.length - 1]) {
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


function CreerListNbrPremierOuNon(size, min, max) {
    var result = [];
    for (i = 0; i < size; i++) {
        var nbr = Randint(min, max);
        result.push(nbr);
        var decomp = Decomposition(nbr);
        if (decomp.length === 1)
            result.push(true);
        else
            result.push(false);
    }
    return result;
}


function GetPGCD(a, b) {
    if (b === 0)
        return a;
    else
        return GetPGCD(b, a % b);
}



function GenererExerciceProblème(min, max) {
    var minpgcd = Math.floor(Math.sqrt(min));
    var maxpgcd = Math.floor(Math.sqrt(max));
    var pgcd = Randint(minpgcd, minpgcd*2);
    var newmin = Math.floor(min / pgcd);
    var newmax = Math.floor(max / pgcd);
    var roses = pgcd * Randint(newmin, newmax);
    var marguerites = pgcd * Randint(newmin, newmax);
    pgcd = GetPGCD(roses, marguerites);

    return [roses, marguerites, pgcd];
}   



function CreateFractionProche(nbr, min, max) {
    var num = Randint(min, max);
    var den = Randint(min, max);
    var pgcd = GetPGCD(num, den);
    var count = 0;
    while (pgcd === 1 || den === num) {
        if (count === 20) {
            num = Randint(min, max);
            count = 0;
        }
        den = Randint(min, max);
        pgcd = GetPGCD(num, den);
        count += 1;
    }

    var fractions = [[num, den], [Randint(0, nbr), 0]];
    var same = CreateIdentiqueFraction(num, den, pgcd);
    while (same[0] === num)
        same = CreateIdentiqueFraction(num, den, pgcd);
    fractions.push(same);
    for (i = 0; i < nbr-1; i++) {
        var faussefraction = CreateIdentiqueFraction(num, den, pgcd);
        faussefraction = ChangeFraction(faussefraction, Randint(0, 10));
        fractions.push(faussefraction);
    }

    return fractions;
}

function ChangeFraction(fraction, typeMelange)
{
    if (typeMelange === 0)
        return [fraction[1], fraction[0]];
    else if (typeMelange === 1)
        return [fraction[0] + Randint(1, 5), fraction[1]];
    else if (typeMelange === 2)
        return [fraction[0], fraction[1] + Randint(1, 5)];
    else if (typeMelange === 3)
        return [fraction[0] * 2, fraction[1]];
    else if (typeMelange === 4)
        return [fraction[0], fraction[1] * 2];
    else
        return ChangeFraction([fraction[0], fraction[1]], typeMelange % 5);
}


function CreateIdentiqueFraction(num, den, pgcd) {
    var coefs = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 10, 10];
    var coef = pgcd;
    while (coef === pgcd)
        coef = coefs[Randint(0, coefs.length)];

    return [num * coef, den * coef];
}
