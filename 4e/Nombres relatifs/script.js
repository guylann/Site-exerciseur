var Premier = [2, 3, 5, 7, 11, 13, 17, 19];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


//Opérations sur les nombres relatifs

// Crée une opération additive

function CreateAdd() {
	var x1 = Randint(-30,30);
	while (x1 === 0)
		var x1 = Randint(-30,30);
	var x0 = Randint(-30,30);
	while (x0 === 0)
		var x0 = Randint(-30,30);
	var calc = Randint(0,1);
	if (calc === 0)
		var sol = x1+x0;
	else 
		var sol = x0-x1
	return [CreateCalc(calc,x1,x0), sol.toString()];

}

// Crée une opération multiplicative

function CreateMult() {
	var x1 = Randint(-15,15);
	while (x1 === 0)
		var x1 = Randint(-15,15);
	var x0 = Randint(-15,15);
	while (x0 === 0)
		var x0 = Randint(-15,15);
	var calc = Randint(2,3);
	if (calc === 2)
		var sol = x1*x0;
	else 
		var sol = x1/x0
	return [CreateCalc(calc,x1,x0), sol.toString()];

}

// Crée l'écriture de l'opération
function CreateCalc(a,b,c){
	var txt = "";
	txt += b.toString();
	if(a === 0) 
		txt += " + "
	else if (a === 1)
		txt +=" - "
	else if (a === 2)
		txt += " * "
	else if (a === 3)
		txt +=" / "
	if (c < 0)
		txt +="("+c.toString()+")";
	else 
		txt += c.toString();	
	txt +=" = ";
	return txt;
}
