var Premier = [2, 3, 5, 7, 11, 13, 17, 19];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


//Equations

// Crée une equation de type ax=b

function CreateEq1(){
	var a = Randint(-20,20);
	while (a === 0)
		a = Randint(-20,20);
	var b = Randint(-20,20);
	var x = b/a;
    var sol = Math.floor(x*100)/100;
    var txt;
	txt = a+"x="+b;
	return [txt, sol];
}

// Crée une equation de type ax+b=c

function CreateEq2(){
	var a = Randint(-20,20);
	while (a === 0)
		a = Randint(-20,20);
	var b = Randint(-20,20);
	var c = Randint(-20,20);
	var x = (c-b)/a;
    var sol = Math.floor(x*100)/100;
    var txt;
	if (b > 0)
		txt = a+"x+"+b+"="+c;
	else
		txt = a+"x+("+b+")="+c;
	return [txt, sol];
}

// Crée une equation de type ax+b=cx+d

function CreateEq3(){
	var a = Randint(-20,20);
	while (a === 0)
		a = Randint(-20,20);
	var b = Randint(-20,20);
	var c = Randint(-20,20);
	var d = Randint(-20,20);
	var x = (d-b)/(a-c);
    var sol = Math.floor(x*100)/100;
    var txt = a+"x+";
	if (b < 0)
		txt += "("+b+")="+c+"x+";
	else
		txt += b+"="+c+"x+";
	if (d < 0)
		txt += "("+d+")"
	else
		txt += d
	return [txt, sol];
}