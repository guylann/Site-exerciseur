var Premier = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var PremierCourt = [2, 3, 5, 7, 11, 13, 17, 19];
var PremierRegles = [2, 3, 5, 11];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}



//Fraction décimale

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

//Crée le nombre décimal et la fraction décimale
function Exercice() {
	var num1 = Randint(1,10000)
	while (num1 % 10 ===0)
		num1 = Randint(1,10000)
	var den1 = Math.pow(10,Randint(1,5))
	var nb = num1/den1
	var num2 = Randint(1,10000)
	var den2 = Math.pow(10,Randint(1,5))
	var rep = num2/den2
	return [nb, num1, den1, num2, den2, rep]
}
