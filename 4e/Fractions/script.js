var Premier = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var PremierCourt = [2, 3, 5, 7, 11, 13, 17, 19];
var PremierRegles = [2, 3, 5, 11];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}



// Opérations sur les fractions

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

// Crée le PGCD
function GetPGCD(a, b) {
    if (b === 0)
        return a;
    else
        return GetPGCD(b, a % b);
}

// Génère Une fraction à réduire
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

// Crée une opération additive

function CreateAdd() {
	var x1 = Randint(-30,30);
	while (x1 === 0)
		var x1 = Randint(-30,30);
	var x0 = Randint(-15,15);
	while (x0 === 0)
		var x0 = Randint(-15,15);
	var y1 = Randint(-30,30);
	while (y1 === 0)
		var y1 = Randint(-30,30);
	var y0 = Randint(-15,15);
	while (y0 === 0)
		var y0 = Randint(-15,15);
	var calc = Randint(0,1);
	if (calc === 0){
		var sol1 = x1*y0+x0*y1;
		var sol0 = x0*y0
		var op="+"
	}
	else {
		var sol1 = x1*y0-x0*y1;
		var sol0 = x0*y0
		var op="-"
	}
	return [x1, x0, y1, y0, sol1, sol0, op, sol1/GetPGCD(sol1,sol0), sol0/GetPGCD(sol1,sol0)];
}

// Crée une opération multiplicative

function CreateMult() {
	var x1 = Randint(-30,30);
	while (x1 === 0)
		var x1 = Randint(-30,30);
	var x0 = Randint(-15,15);
	while (x0 === 0)
		var x0 = Randint(-15,15);
	var y1 = Randint(-30,30);
	while (y1 === 0)
		var y1 = Randint(-30,30);
	var y0 = Randint(-15,15);
	while (y0 === 0)
		var y0 = Randint(-15,15);
	var calc = Randint(0,1);
	if (calc === 0){
		var sol1 = x1*y1;
		var sol0 = x0*y0
		var op="*"
	}
	else {
		var sol1 = x1*y0;
		var sol0 = x0*y1
		var op="/"
	}
	return [x1, x0, y1, y0, sol1, sol0, op, sol1/GetPGCD(sol1,sol0), sol0/GetPGCD(sol1,sol0)];
}

// Crée l'écriture de l'opération
function CreateCalc(a,b,c){
	var txt = "";
	txt += b.toString();
	if(a === 0) 
		txt += "+"
	else if (a === 1)
		txt +="-"
	else if (a === 2)
		txt += "*"
	else if (a === 3)
		txt +="/"
	if (c < 0)
		txt +="("+c.toString()+")";
	else 
		txt += c.toString();	
	txt +="=";
	return txt;
}
