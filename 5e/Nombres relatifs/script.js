var Premier = [2, 3, 5, 7, 11, 13, 17, 19];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


function GetComparaison()
{
    var value;
    var type = Randint(0,3);
    if (type === 0)
    {
        var a = Randint(-200,200);
        var b = Randint(-200,200);
        value = [a,b];
    }
    else if (type === 1)
    {
        var a = Randint(-200,200);
        var b = (a - 1) * -1;
        value = [a,b];
    }
    else if (type === 2)
    {
        var a = Randint(-200,200);
        var b = (a - 1);
        value = [a / 10, b / 10];
    }
    else if (type === 3)
    {
        var a = Randint(-200,200);
        var b = (a + 1);
        value = [a / 10, b / 10];
    }

    return value;
}


function GetSomme()
{
    var a = Randint(-50,50);
    var b = Randint(-50,50);
    var type = Randint(0,1);
    var value;
    if (type === 0)
        value = [ConvertNombre(a) + " + " + ConvertNombre(b), GetsResultatsAcceptable(a+b)];
    else if (type === 1)
        value = [ConvertNombre(a/10) + " + " + ConvertNombre(b/10), GetsResultatsAcceptable((a+b)/10)];
    return value;
}

function GetDifference()
{
    var a = Randint(-50,50);
    var b = Randint(-50,50);
    var type = Randint(0,1);
    var value;
    if (type === 0)
        value = [ConvertNombre(a) + " - " + ConvertNombre(b), GetsResultatsAcceptable(a-b)];
    else if (type === 1)
        value = [ConvertNombre(a/10) + " - " + ConvertNombre(b/10), GetsResultatsAcceptable((a-b)/10)];
    return value;
}

function GetCalculLigne(nbrterme)
{
    var a = Randint(-20,20);
    var txt = ConvertNombre(a);
    var total = a;
    for (i = 1; i < nbrterme; i++) {
        var cl = Randint(0,1);
        if (cl === 0)
        {
            a = Randint(-20,20);
            txt += " + " + ConvertNombre(a);
            total += a;
        }
        else
        {
            a = Randint(-20,20);
            txt += " - " + ConvertNombre(a);
            total -= a;
        }
    }
    return [txt, GetsResultatsAcceptable(total)];
}


function ConvertNombre(valeur)
{
    var txt = "(" ;
    if (valeur > 0)
        txt += "+";
    txt += valeur + ")";
    return txt;
}


function GetsResultatsAcceptable(valeur)
{
    var pos = [valeur.toString(), "(" + valeur.toString() + ")"];
    if (valeur >= 0)
    {
        pos.push("+" + valeur.toString())
        pos.push("(+" + valeur.toString() + ")")
    }
    else if (valeur == 0)
    {
        pos.push("-0")
        pos.push("(-0)")
    }
    return pos;
}