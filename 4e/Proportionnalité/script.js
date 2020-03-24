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
	var a = Randint(0,20);
	while (a === 0)
		a = Randint(0,20);
	var b = Randint(0,20);
	while (b === 0 || b == a)
		b = Randint(0,20);
	var coef1 = Randint(2,12);
	var coef2 = Randint(2,12);
	while(coef2 == coef1)
		coef2 = Randint(2,12);
	var sol = Randint(0,1);
	var c, d, e, f;
	if (sol == 0)
	{
		c=a*coef1+1;
		d=b*coef1;
		e=a*coef2;
		f=b*coef2;
		sol=false;
	}
	else	
	{
		c=a*coef1;
		d=b*coef1;
		e=a*coef2;
		f=b*coef2;
		sol=true;
	}
	var pos = Randint(0,2);
	if (pos == 0)
		return [a, b, c, d, e, f, sol];
	else if (pos == 1)
		return [c, d, a, b, e, f, sol];
	else
		return [a, b, e, f, c, d, sol];
}