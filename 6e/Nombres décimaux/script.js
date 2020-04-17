var Premier = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var PremierCourt = [2, 3, 5, 7, 11, 13, 17, 19];
var PremierRegles = [2, 3, 5, 11];

function Randint(min, max)
{
    return Math.min(Math.floor(Math.random() * (max + 1 - min) + min),max);
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

// Creer un exercice de comparaison
function GetComparaison()
{
	var a = Randint(0,100);
	while (a % 10 == 0)
		a = Randint(0,100);
	var b = Randint(0,100) / 10;
    var value;
    var type = Randint(0,7);
    if (type === 1)
        b = (a + 1) / 10;
    else if (type === 2)
        b = (a - 1) / 10;
    else if (type === 3)
        b = (a * 10 + Randint(1,9)) / 100;
    else if (type === 4)
        b = (a * 10 - Randint(1,9)) / 100;
    else if (type === 5)
        b = (Math.floor(a / 10) * 100 +  a % 10) / 100;
	value = [a / 10,b, (a / 10).toString(), (b).toString()];

	if (type === 6)
	{
		value[2] = value[2] + "0";
	}
	else if (type === 7)
	{
		value[1] = value[0];
		value[3] = value[1].toString() + "0";
	}

    return value;
}


function GetDecompositionDecimal(){
	var num1 = Randint(1,10000)
	while (num1 % 10 ===0)
		num1 = Randint(1,10000)
	var den1 = Math.pow(10,Randint(1,4))
	var nb = num1/den1
	return [nb, num1, den1];
}

function NombreAcceptableDecomposition(value, entier = false)
{
	if (Math.floor(value) != value)
		return false;
	if (!entier)
	{
		if (value > 9 || value < 0)
			return false;
	}
	return true;
}