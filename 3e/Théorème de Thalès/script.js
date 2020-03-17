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

function CreateThales(){
    var inconnue1 = Randint(0,2);
    var inconnue2 = Randint(0,2);
    while (inconnue1 == inconnue2)
        inconnue2 = Randint(0,2);
    var AC = 0;var BC = 0;var EC = 0;var DC = 0;var AE = 0; var BD = 0;
    if (inconnue1 != 0)
        BC = Floor(Rand(2, 8, 1));
    if (inconnue1 != 1)
        DC = Floor(Rand(2, 8, 1));
    if (inconnue1 != 2)
        BD = Floor(Rand(2, 8, 1));
    if (inconnue2 != 0)
        AC = Floor(BC + 0.1 + Rand(0, 3, 1));
    if (inconnue2 != 1)
        EC = Floor(DC + 0.1 + Rand(0, 3, 1));
    if (inconnue2 != 2)
        AE = Floor(BD + 0.1 + Rand(0, 3, 1));
    var rapport;
    if ((inconnue1 + inconnue2) == 1)
        rapport = BD/AE;
    if ((inconnue1 + inconnue2) == 2)
        rapport = DC/EC;
    if ((inconnue1 + inconnue2) == 3)
        rapport = BC/AC;

    if (inconnue1 == 0)
        BC = Floor(AC * rapport);
    if (inconnue1 == 1)
        DC = Floor(EC * rapport);
    if (inconnue1 == 2)
        BD = Floor(AE * rapport);
    if (inconnue2 == 0)
        AC = Floor(BC / rapport);
    if (inconnue2 == 1)
        EC = Floor(DC / rapport);
    if (inconnue2 == 2)
        AE = Floor(BD / rapport);

    return [inconnue1, inconnue2, [AC, BC, DC, EC, AE, BD]];
}


