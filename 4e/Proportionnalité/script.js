var Premier = [2, 3, 5, 7, 11, 13, 17, 19];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


//Proportionnalité

//Tableau à compléter

function CreateProp()
{
	var a = Randint(-20,20)
	while (a === 0)
		a = Randint(-20,20)
	var b = Randint(-20,20)
	while (b === 0)
		b = Randint(-20,20)
	var coef = a / GetPGCD(a,b)
	var c = Randint(-7,7)
	while (c === 0 || c === GetPGCD(a,b))
		c = Randint(-7,7)
	c *= coef
	sol = b*c/a
	return [a, b, c, sol]
}

// Crée le PGCD
function GetPGCD(a, b) {
    if (b === 0)
        return a;
    else
        return GetPGCD(b, a % b);
}

//Situation de proportionnalité ?

function CreateSitProp()
{
	var a = Randint(0,20)
	while (a === 0)
		a = Randint(0,20)
	var b = Randint(0,20)
	while (b === 0)
		b = Randint(0,20)
	var coef = Randint(2,12)
	var sol = Randint(0,1)
	var c
	var d
	if (sol == 0)
	{
		c=a*coef+1
		d=b*coef+1
		sol=false
	}
	else	
	{
		c=a*coef
		d=b*coef
		sol=true
	}
	return [a, b, c, d, sol]
}