var Premier = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var PremierCourt = [2, 3, 5, 7, 11, 13, 17, 19];
var PremierRegles = [2, 3, 5, 11];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}


function CreateListEntier(nbr,min,max)
{
    var array = []
    for(var i = 0; i < nbr; i++){
        array.push(Randint(min,max));
    }
    return array;
}

function CalculateMoyenne(array){
    return Math.round(Somme(array) / array.length * 10) / 10;
}

function Somme(array){
    var somme = 0;
    for(var i = 0; i < array.length; i++){
        somme += array[i];
    }
    return somme;
}

function CalculateMoyennePondérée(array, coef){
    var somme = 0;
    var nbr = 0;
    for(var i = 0; i < array.length; i++){
        somme += array[i] * coef[i];
        nbr += coef[i];
    }
    return Math.round(somme / nbr * 10) / 10;
}


function CalculateMédianne(array){
    var middle = (array.length - array.length % 2) / 2;
    if (array.length % 2 == 0){
        return Math.round((array[middle] + array[middle + 1])/2 * 10) / 10;
    }
    else{
        return Math.round(array[middle + 1] * 10) / 10;
    }
}

function CalculateEtendue(array){
    var max = -9999999999;
    var min = 99999999999;
    for(var i = 0; i < array.length; i++){
        if(array[i] < min)
            min = array[i];
        if(array[i] > max)
            max = array[i];
    }
    return Math.round((max - min) * 10) / 10;
}