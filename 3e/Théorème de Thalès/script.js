var Premier = [2, 3, 5, 7, 11, 13, 17, 19];

function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function Rand(min, max, precision)
{
    return Math.floor(Math.random() * (max * Math.pow(10, precision) + 1 - min * Math.pow(10, precision)) + min * Math.pow(10, precision)) / Math.pow(10, precision);
}

function Round(value, precision){
    return Math.round((value  + Number.EPSILON)* Math.pow(10, precision)) / Math.pow(10, precision);
}
function Round(value){
    return Math.round((value  + 0.01) * 10) / 10;
}
function Floor(value){
    
    return Math.floor((value +  0.01) * 10) / 10;
}


//Calcul littéral

function CreateThales(forme){
    var inconnue1 = Randint(0,2);
    var inconnue2 = Randint(0,2);
    while (inconnue1 == inconnue2)
        inconnue2 = Randint(0,2);

    return [inconnue1, inconnue2, CreateThalesEgalité()];
}

function CreateReciproque(){
    var erreur = Randint(0,1);
    var line = Randint(0,2);
    if (erreur == 0)
        return [line, 0, CreateThalesEgalité()];
    else{
        var ar = CreateThalesEgalité();
        var e = Randint(0,5);
        while((e - e%2) == line*2)
            e = Randint(0,5);
        ar[e] = Round(ar[e] + 0.1 + Rand(0,2,1));
        return [line, 1, ar];
    }
}



function CreateThalesEgalité(){
    var AC = 0;var BC = 0;var EC = 0;var DC = 0;var AE = 0; var BD = 0;
    BC = Round(Rand(2, 8, 1));
    DC = Round(Rand(2, 8, 1));
    BD = Round(Rand(2, 8, 1));
    AC = Round(BC + 0.1 + Rand(0, 3, 1));
    var coef = AC/BC;
    EC = Round(DC * coef);
    AE = Round(BD * coef);

    return [AC, BC, DC, EC, AE, BD];
}


