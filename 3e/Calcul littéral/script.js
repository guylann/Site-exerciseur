var Premier = [2, 3, 5, 7, 11, 13, 17, 19];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


//Calcul littéral

// Crée une éxpression littérale réduite.

function CreateExprLitt() {
	var x2 = Randint(-5,5);
	var x1 = Randint(-10,10);
	var x0 = Randint(-20,20);
	var x = Randint(-10,10);
	var solution = x2*x*x+x1*x+x0;
	return [CreatePolynôme(x2,x1,x0), x, solution.toString()];

}

//Crée une expression littérale à développer

function CreateExprDev(){
	var test = Randint(0,1);
	var x2 = 0;
    while (x2 === 0 || x2 === 1)
		x2 = Randint(-5,5);
    var x1 = Randint(-10, 10);
    while (x1 === 0)
        x1 = Randint(-10, 10);
    var x0 = Randint(-20, 20);
    while (x0 === 0)
        x0 = Randint(-20, 20);
	var s2 = x2*x1;
    var s1 = x2 * x0;
    var txt;
	if (test === 0){
        txt = CreatePolynôme(0,x2,0)+"("+CreatePolynôme(0,x1,x0)+")";
		return [txt, CreatePolynôme(s2,s1,0)];
	}
	else if (test === 1){
		txt = x2+"("+CreatePolynôme(0,x1,x0)+")";
		return [txt, CreatePolynôme(0,s2,s1)]
	}
}

// Crée une expression à factoriser

function CreateExprFact(){
	var test = Randint(0,1);
	var coef = Randint(1,4)+1;
	var x1 = Randint(-10,10)*coef;
	while (x1 === 0)
		x1 = Randint(-10,10)*coef;
	var x0 = Randint(-20,20)*coef;
	while (x0 === 0)
		x0 = Randint(-20,20)*coef;
	var s1 = x1/coef;
    var s0 = x0 / coef;
    var txt;
    var solution;
	if (test === 0){
		txt = CreatePolynôme(0,x1,x0);
		solution = coef+"("+CreatePolynôme(0,s1,s0)+")";
		return [txt, solution];
	}
	else{
		txt = CreatePolynôme(x1,x0,0);
		solution = coef+"x("+CreatePolynôme(0,s1,s0)+")";
		return [txt, solution];
    }
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

function CreatePolynôme(a,b,c){
	var txt = "";
	if(a === 1)
		txt += "x²";
	else if (a === -1)
		txt += "-x²";
	else if (a !== 0)
		txt += a.toString() + "x²";
	
	if (a !== 0 && b > 0)
		txt +=" + ";
	else if (a !== 0 && b === 0 && c > 0)
		txt +=" + ";
	
	if(b === 1)
		txt += "x";
	else if (b === -1)
		txt += " - x";
	else if (b !== 0)
		txt += " " + b.toString() + "x";
	
	if (b !== 0 && c > 0)
		txt +=" +";
	
	if (c !== 0)
		txt += " " + c.toString();
	
	return txt;
}


function CreateReductionExpression(nbrterme, coefmin, coefmax) {
    var array = CreateTermeAleat(nbrterme, coefmin, coefmax);
    var termeexercice = [];
    for (i = 0; i < nbrterme; i++) {

        termeexercice.push(CreateMultipleX(array[i][0], array[i][1]));
    }
    var exercice = AssemblerMultipleX(termeexercice);
    var x0 = 0;
    var x1 = 0;
    var x2 = 0;
    for (i = 0; i < nbrterme; i++) {
        if (array[i][1] === 0)
            x0 += array[i][0];
        else if (array[i][1] === 1)
            x1 += array[i][0];
        else if (array[i][1] === 2)
            x2 += array[i][0];
    }
    var termecorrection = [];
    if (x2 !== 0)
        termecorrection.push(CreateMultipleX(x2, 2));
    if (x1 !== 0)
        termecorrection.push(CreateMultipleX(x1, 1));
    if (x0 !== 0)
        termecorrection.push(CreateMultipleX(x0, 0));
    var correction = AssemblerMultipleX(termecorrection);

    console.log(correction);

    return [exercice, correction];
}



function CreateTermeAleat(nbr, coefmin, coefmax) {
    var array = [];
    for (i = 0; i < nbr; i++) {
        var coef = Randint(coefmin, coefmax);
        while (coef === 0)
            coef = Randint(coefmin, coefmax);
        var puissance = Randint(0, 2);
        array.push([coef, puissance]);
    }
    return array;
}


function CreateMultipleX(coef, puissance) {
    var txt = "";
    if (coef === -1)
        txt += "-";
    else if (coef === 0)
        return "";
    else if (coef !== 1)
        txt += coef.toString();
    if (puissance > 2)
        return txt + "x^" + puissance.toString();
    else if (puissance === 2)
        return txt + "x²";
    else if (puissance === 1)
        return txt + "x";
    else
        return coef.toString();
}


function AssemblerMultipleX(array) {
    txt = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i][0] === '-')
            txt += " " + array[i];
        else
            txt += " + " + array[i];
    }

    return txt;
}


