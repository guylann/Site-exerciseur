
// Calcul Utilisable partout :
class Constante
{
    static alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    static Premier = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    static PremierCourt = [2, 3, 5, 7, 11, 13, 17, 19];

    //Renvoie un nombre entier aléatoire entre Min et Max
    static Randint(min, max)
    {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    // Renvoie un nombre aléatoire entre Min et Max avec une précision donnée
    static Rand(min, max, precision)
    {
        return Math.floor(Math.random() * (max * Math.pow(10, precision) + 1 - min * Math.pow(10, precision)) + min * Math.pow(10, precision)) / Math.pow(10, precision);
    }
    
    // Arroundie un nombre a la précision donnée
    static Round(value, precision){
        return Math.round((value  + Number.EPSILON)* Math.pow(10, precision)) / Math.pow(10, precision);
    }

    // Arrondie un nombre a l'entier le plus proche
    static Round(value){
        return Math.round((value  + 0.01) * 10) / 10;
    }

    // Renvoie le plancher d'un nombre.
    static Floor(value){
        
        return Math.floor((value +  0.01) * 10) / 10;
    }

    // Renvoie le PGCD de deux nombres
    static GetPGCD(a, b) {
        if (b === 0)
            return a;
        else
            return Constante.GetPGCD(b, a % b);
    }

    // Creer un polynôme du second degres.
    static CreatePolynôme(a,b,c){
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

    //Creer un mutiple de x a partier d'un coefficient et d'une puissance
    static CreateMultipleX(coef, puissance) {
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
    
    //Assemble un ensemble de multiple de X sous forme de Somme Algébrique
    static AssemblerMultipleX(array) {
        var txt = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i][0] === '-')
                txt += " " + array[i];
            else
                txt += " + " + array[i];
        }
    
        return txt;
    }

    //Creer des multiple de X aléatoire return : [Coefficient ; Puissance]
    static CreateTermeAleat(nbr, coefmin, coefmax) {
        var array = [];
        for (var i = 0; i < nbr; i++) {
            var coef = Constante.Randint(coefmin, coefmax);
            while (coef === 0)
                coef = Constante.Randint(coefmin, coefmax);
            var puissance = Constante.Randint(0, 2);
            array.push([coef, puissance]);
        }
        return array;
    }

    // Renvoie la distance entre deux points (Array)
    static distance(a,b)
    {
        return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
    }

    // Renvoie la distance entre deux points (Point)
    static distanceP(a,b)
    {
        return Math.sqrt((a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y));
    }

    /*------------------------------------------------------------------------------
    Retourne l'image d'un point par une rotation (repère X de gauche à droite, Y du
    haut vers le bas).
    ENTREE :
        M        Point à transformer
        O        Point centre de la rotation
        angle    Angle (en degrés)
    SORTIE :
        Image de M par la rotation d'angle angle autour de O (les coordonnées ne
        sont pas entières).
    ------------------------------------------------------------------------------*/
    static rotate (M, O, angle) {
        var xM, yM, x, y;
        angle *= Math.PI / 180;
        xM = M.x - O.x;
        yM = M.y - O.y;
        x = xM * Math.cos (angle) + yM * Math.sin (angle) + O.x;
        y = - xM * Math.sin (angle) + yM * Math.cos (angle) + O.y;
        return ([Math.round (x), Math.round (y)]);
    }
    static rotateP (M, O, angle) {
        var xM, yM, x, y;
        angle *= Math.PI / 180;
        xM = M.x - O.x;
        yM = M.y - O.y;
        x = xM * Math.cos (angle) + yM * Math.sin (angle) + O.x;
        y = - xM * Math.sin (angle) + yM * Math.cos (angle) + O.y;
        return {x:Math.round (x),y: Math.round (y)};
    }

    // Renvoie un rationnel représentant un nombre décimal donné.
    static find_rational( value, maxdenom ) {
        let best = { numerator: 1, denominator: 1, error: Math.abs(value - 1) }
        if ( !maxdenom ) maxdenom = 10000;
        for ( let denominator = 1; best.error > 0 && denominator <= maxdenom; denominator++ ) {
          let numerator = Math.round( value * denominator );
          let error = Math.abs( value - numerator / denominator );
          if ( error >= best.error ) continue;
          best.numerator = numerator;
          best.denominator = denominator;
          best.error = error;
        }
        return best;
    }
    
    // Renvoie l'angle entre deux vecteurs
    static GetAngle(from, to)
    {
        var x0, x1, y0, y1;
        x0 = from.x;
        y0 = from.y;
        x1 = to.x;
        y1 = to.y;
        return (Math.atan2(y1 - y0, x1 - x0) + Math.PI * 2.0) % (Math.PI * 2.0);
    }
}

//#region Troisième

// Arithmétiques
class Troisième_Arithmetique
{
    constructor(){

    }

    static PremierRegles = [2, 3, 5, 11];

    // Crée la décomposition d'un nombre aléatoire entre min et max sous forme de texte
    static CreateDecompBetween(min, max) {
        var array = [2,2,2,2,2556];
        var nombre;
        while (array.length === 1 || array[array.length - 1] > Constante.PremierCourt[Constante.PremierCourt.length - 1]) {
            nombre = Constante.Randint(min, max);
            array = Troisième_Arithmetique.Decomposition(nombre);
        }
        return [nombre.toString(), Troisième_Arithmetique.DecompositionToTxt(array)];
    }

    // Crée la décomposition d'un nombre sous forme de tableau de nombre
    static Decomposition(nbr)
    {
        var result = [];
        var i = 0;
        while (i < Constante.Premier.length) {
            if (nbr % Constante.Premier[i] === 0) {
                nbr = nbr / Constante.Premier[i];
                result.push(Constante.Premier[i]);
            }
            else {
                i++;
            }
        }
        if (nbr !== 1)
            result.push(nbr);
        return result;
    }

    // Transforme un tableau de nombre en une suite de multiplication sous forme de texte
    static DecompositionToTxt(array) {
        var txt = array[0].toString();
        for (var i = 1; i < array.length; i++) {
            txt += "*" + array[i].toString();
        }
        return txt;
    }
    
    // Creer une liste de nombre
    static CreerListNbrPremierOuNon(size, min, max) {
        var result = [];
        for (var i = 0; i < size; i++) {
            var nbr = Constante.Randint(min, max);
            result.push(nbr);
            var decomp = Troisième_Arithmetique.Decomposition(nbr);
            if (decomp.length === 1)
                result.push(true);
            else
                result.push(false);
        }
        return result;
    }

    // Creer un exercice Problème
    static GenererExerciceProblème(min, max) {
        var minpgcd = Math.floor(Math.sqrt(min));
        var maxpgcd = Math.floor(Math.sqrt(max));
        var pgcd = Constante.Randint(minpgcd, minpgcd*2);
        var newmin = Math.floor(min / pgcd);
        var newmax = Math.floor(max / pgcd);
        var roses = pgcd * Constante.Randint(newmin, newmax);
        var marguerites = pgcd * Constante.Randint(newmin, newmax);
        pgcd = Constante.GetPGCD(roses, marguerites);
    
        return [roses, marguerites, pgcd];
    }   
    
    //Creer Un certain nombre de fraction proche les unes des autres
    static CreateFractionProche(nbr, min, max) {
        var num = Constante.Randint(min, max);
        var den = Constante.Randint(min, max);
        var pgcd = Constante.GetPGCD(num, den);
        var count = 0;
        while (pgcd === 1 || den === num) {
            if (count === 20) {
                num = Constante.Randint(min, max);
                count = 0;
            }
            den = Constante.Randint(min, max);
            pgcd = Constante.GetPGCD(num, den);
            count += 1;
        }
    
        var fractions = [[num, den], [Constante.Randint(0, nbr - 1), 0]];
        var same = Troisième_Arithmetique.CreateIdentiqueFraction(num, den, pgcd);
        while (same[0] === num)
            same = Troisième_Arithmetique.CreateIdentiqueFraction(num, den, pgcd);
        fractions.push(same);
        for (var i = 0; i < nbr-1; i++) {
            var faussefraction = Troisième_Arithmetique.CreateIdentiqueFraction(num, den, pgcd);
            faussefraction = Troisième_Arithmetique.ChangeFraction(faussefraction, Constante.Randint(0, 9));
            fractions.push(faussefraction);
        }
    
        return fractions;
    }

    // Change une fraction
    static ChangeFraction(fraction, typeMelange)
    {
        if (typeMelange === 0)
            return [fraction[1], fraction[0]];
        else if (typeMelange === 1)
            return [fraction[0] + Constante.Randint(1, 4), fraction[1]];
        else if (typeMelange === 2)
            return [fraction[0], fraction[1] + Constante.Randint(1, 4)];
        else if (typeMelange === 3)
            return [fraction[0] * 2, fraction[1]];
        else if (typeMelange === 4)
            return [fraction[0], fraction[1] * 2];
        else
            return Troisième_Arithmetique.ChangeFraction([fraction[0], fraction[1]], typeMelange % 5);
    }
    
    // Creer une fraction identique
    static CreateIdentiqueFraction(num, den, pgcd) {
        var coefs = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 10, 10];
        var coef = pgcd;
        while (coef === pgcd)
            coef = coefs[Constante.Randint(0, coefs.length - 1)];
    
        return [num * coef, den * coef];
    }
}

// Calcul Littérale
class Troisième_CalculLittéral
{
    // Crée une éxpression littérale réduite.
    static CreateExprLitt() {
        var x2 = Constante.Randint(-5,5);
        var x1 = Constante.Randint(-10,10);
        var x0 = Constante.Randint(-20,20);
        var x = Constante.Randint(-10,10);
        var solution = x2*x*x+x1*x+x0;
        return [Constante.CreatePolynôme(x2,x1,x0), x, solution.toString()];

    }

    //Crée une expression littérale à développer
    static CreateExprDev(){
        var test = Constante.Randint(0,1);
        var x2 = 0;
        while (x2 === 0 || x2 === 1)
            x2 = Constante.Randint(-5,5);
        var x1 = Constante.Randint(-10, 10);
        while (x1 === 0)
            x1 = Constante.Randint(-10, 10);
        var x0 = Constante.Randint(-20, 20);
        while (x0 === 0)
            x0 = Constante.Randint(-20, 20);
        var s2 = x2*x1;
        var s1 = x2 * x0;
        var txt;
        if (test === 0){
            txt = Constante.CreatePolynôme(0,x2,0) + "(" + 
            Constante.CreatePolynôme(0,x1,x0) + ")";
            return [txt, Constante.CreatePolynôme(s2,s1,0)];
        }
        else if (test === 1){
            txt = x2+"("+Constante.CreatePolynôme(0,x1,x0)+")";
            return [txt, Constante.CreatePolynôme(0,s2,s1)]
        }
    }

    // Crée une expression à factoriser
    static CreateExprFact(){
        var test = Constante.Randint(0,1);
        var coef = Constante.Randint(1,4)+1;
        var x1 = Constante.Randint(-10,10)*coef;
        while (x1 === 0)
            x1 = Constante.Randint(-10,10)*coef;
        var x0 = Constante.Randint(-20,20)*coef;
        while (x0 === 0)
            x0 = Constante.Randint(-20,20)*coef;
        var s1 = x1/coef;
        var s0 = x0 / coef;
        var txt;
        var solution;
        if (test === 0){
            txt = Constante.CreatePolynôme(0,x1,x0);
            solution = coef+"(" + Constante.CreatePolynôme(0,s1,s0)+")";
            return [txt, solution];
        }
        else{
            txt = Constante.CreatePolynôme(x1,x0,0);
            solution = coef + "x(" + Constante.CreatePolynôme(0,s1,s0)+")";
            return [txt, solution];
        }
    }

    // Transforme un tableau de nombre en une suite de multiplication sous forme de texte
    static DecompositionToTxt(array) {
        var txt = array[0].toString();
        for (i = 1; i < array.length; i++) {
            txt += "*" + array[i].toString();
        }
        return txt;
    }

    // Creer une expression a réduire
    static CreateReductionExpression(nbrterme, coefmin, coefmax) {
        var array = Constante.CreateTermeAleat(nbrterme, coefmin, coefmax);
        var termeexercice = [];
        for (var i = 0; i < nbrterme; i++) {

            termeexercice.push(Constante.CreateMultipleX(array[i][0], array[i][1]));
        }
        var exercice = Constante.AssemblerMultipleX(termeexercice);
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
            termecorrection.push(Constante.CreateMultipleX(x2, 2));
        if (x1 !== 0)
            termecorrection.push(Constante.CreateMultipleX(x1, 1));
        if (x0 !== 0)
            termecorrection.push(Constante.CreateMultipleX(x0, 0));
        var correction = Constante.AssemblerMultipleX(termecorrection);

        return [exercice, correction];
    }
}

// Equations
class Troisième_Equations
{
    // Crée une equation de type ax=b
    static CreateEq1(){
        var a = Constante.Randint(-20,20);
        while (a === 0)
            a = Constante.Randint(-20,20);
        var b = Constante.Randint(-20,20);
        var x = b/a;
        var sol = Math.floor(x*100)/100;
        var txt;
        txt = a+"x="+b;
        return [txt, sol];
    }

    // Crée une equation de type ax+b=c
    static CreateEq2(){
        var a = Constante.Randint(-20,20);
        while (a === 0)
            a = Constante.Randint(-20,20);
        var b = Constante.Randint(-20,20);
        var c = Constante.Randint(-20,20);
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
    static CreateEq3(){
        var a = Constante.Randint(-20,20);
        while (a === 0)
            a = Constante.Randint(-20,20);
        var b = Constante.Randint(-20,20);
        var c = Constante.Randint(-20,20);
        var d = Constante.Randint(-20,20);
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

    // Crée une équation de type (ax+b)(cx+d)=0
    static CreateEqProd(){
        var a = Constante.Randint(-20,20);
        while (a === 0)
            a = Constante.Randint(-20,20);
        var b = Constante.Randint(-20,20);
        var c = Constante.Randint(-20,20);
        while (c === 0)
            c = Constante.Randint(-20,20);
        var d = Constante.Randint(-20,20);
        var x1 = Math.floor(-b/a*100)/100;
        var x2 = Math.floor(-c/d*100)/100;
        var txt = "("+a+"x+";
        if (b < 0)
            txt += "("+b+"))("+c+"x+";
        else
            txt += b+")("+c+"x+";
        if (d < 0)
            txt += "("+d+"))=0"
        else
            txt += d+")=0"
        return [txt, x1, x2];
    }
}

//Notion de Fonction
class Troisième_NotionFonction
{
    static Globaloff_w = 0;
    static Globaloff_h = 0;
    static GlobalWidth = 0;
    static GlobalHeight = 0;
    static GlobalPasx = 0;
    static GlobalPasy = 0;

    static points = [];
    static coefs = [];

    static GetFunctionToString(){
        var array = [];

        for(var i = 0; i<Troisième_NotionFonction.coefs.length; ++i) {
            array.push(Constante.CreateMultipleX(
                Troisième_NotionFonction.coefs[Troisième_NotionFonction.coefs.length - 1 - i],
                Troisième_NotionFonction.coefs.length - 1 - i));
        }

        return Constante.AssemblerMultipleX(array);
    }


    //Renvoie une position aléatoire sur la courbe
    static GetsValues(){
        return Troisième_NotionFonction.points[Constante.Randint(0, Troisième_NotionFonction.points.length-1)];
    }

    //Renvoie f(x)
    static GetValue(x)
    {
        var result = 0;
        for(var i=0; i<Troisième_NotionFonction.coefs.length; ++i) {
            result += Troisième_NotionFonction.coefs[i] * Math.pow(x,i);
        }

        return result;
    }

    //Renvoie x fois le coefficient i du polynôme de lagrange
    static GetCoef(x,i)
    {
        var result = Troisième_NotionFonction.points[i][1];
        for(k = 1; k < Troisième_NotionFonction.points.length; k++){
            if (k != i)
                result *= (x-Troisième_NotionFonction.points[k][0]) / (Troisième_NotionFonction.points[i][0]-Troisième_NotionFonction.points[k][0])
        }
        return result;
    }

    // Crée une fonction aléatoire avec les parametres donnée
    static RandomiseFunction(param, nbr,  pas)
    {
        Troisième_NotionFonction.points = [];
        var point = {x: param.minx, y: Constante.Randint(param.miny, param.maxy)};
        Troisième_NotionFonction.points.push(point);
        var point = {x: param.maxx, y: Constante.Randint(param.miny, param.maxy)};
        Troisième_NotionFonction.points.push(point);

        var position = []

        var move = (param.maxx - param.minx)/pas;
        for(var i = 0; i < nbr; i++){
            var posx = Constante.Randint(1, move-1);
            while (position.includes(posx))
            {
                posx = Constante.Randint(1, move-1);
            }
            var point = {x: param.minx + posx * pas, y: Constante.Randint(param.miny + 1, param.maxy - 1)};
            Troisième_NotionFonction.points.push(point);
            position.push(posx);
        }

        Troisième_NotionFonction.points.sort(function(a,b) {
            if( a.x === b.x) return a.y-b.y;
            return a.x-b.x;
        });

        Troisième_NotionFonction.coefs = Troisième_NotionFonction.Lagrange(Troisième_NotionFonction.points);

    }

    //Crée la fonction dans le canvas avec les parametre donnée
    static CreateFunction(canvas, param)
    {
        var off_w = Troisième_NotionFonction.Globaloff_w;
        var off_h = Troisième_NotionFonction.Globaloff_h;
        var w = Troisième_NotionFonction.GlobalWidth;
        var h = Troisième_NotionFonction.GlobalHeight;



        var pas = (param.maxx - param.minx) / 1000;
        var coefx = (w - 40) / (param.maxx - param.minx);
        var coefy = (h - 40) / (param.maxy - param.miny);
        
        
        var x = param.minx;
        var y = Troisième_NotionFonction.GetValue(x);
        var posx = off_w + 20 + coefx * (x - param.minx);
        var posy = off_h + h - 20 - coefy * (y - param.miny);

        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineJoint = 'round';
        ctx.lineWidth = 1.0;

        ctx.beginPath();
        ctx.moveTo(posx,posy);

        for(var k = 1; k < 1001; k++) 
        {
            x = param.minx + pas * k;
            y = Troisième_NotionFonction.GetValue(x);
            posx = off_w + 20 + coefx * (x - param.minx);
            posy = off_h + h - 20 - coefy * (y - param.miny);
            ctx.lineTo(posx,posy);

        }
        ctx.stroke();


    }

    //Crée un repere gradué pour la fonction
    static CreateRepere(canvas, param){
        Troisième_NotionFonction.GlobalWidth = canvas.width;
        Troisième_NotionFonction.GlobalHeight = canvas.height;
        var w = Troisième_NotionFonction.GlobalWidth;
        var h = Troisième_NotionFonction.GlobalHeight;
        if (param.orthonorme)
        {
            var lx = (param.maxx - param.minx);
            var ly = (param.maxy - param.miny);
            if (lx > ly){
                Troisième_NotionFonction.GlobalHeight = Math.round(h * ly/lx);
                Troisième_NotionFonction.Globaloff_h = Math.round((canvas.height - h) / 2);
            }
            else if (lx < ly){
                Troisième_NotionFonction.GlobalWidth = Math.round(w * lx/ly);
                Troisième_NotionFonction.Globaloff_w = Math.round((canvas.width - w) / 2);
            }
        }
        var w = Troisième_NotionFonction.GlobalWidth;
        var h = Troisième_NotionFonction.GlobalHeight;
        var off_w = Troisième_NotionFonction.Globaloff_w;
        var off_h = Troisième_NotionFonction.Globaloff_h;



        
        Troisième_NotionFonction.GlobalPasx = (w - 40) / ((param.maxx - param.minx) / param.pasx);
        Troisième_NotionFonction.GlobalPasy = (h - 40) / ((param.maxy - param.miny) / param.pasy);
        var ctx = canvas.getContext("2d");
        var pasx = Troisième_NotionFonction.GlobalPasx;
        var pasy = Troisième_NotionFonction.GlobalPasy;

        
        var verticaleAxeposition = off_w + Math.round(Math.max(20, Math.min(20 + (-param.minx / param.pasx) * pasx,w - 20)));
        var HorizontalAxeposition = off_h + Math.round(h - Math.max(20 , Math.min(20 + (-param.miny / param.pasy) * pasy,h - 20)));

        ctx.fillStyle = "white";
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineJoint = 'round';
        ctx.lineWidth = 1.0;
        ctx.font = "10px Arial";
        ctx.textAlign="center";

        var linesize = 10;
        var zero = false;

        var pos_x = off_w + 20;
        var off_y = HorizontalAxeposition;
        var i = param.minx;
        while(pos_x < (off_w + w - 19)) {
            if (param.subx)
            {
                ctx.strokeStyle = 'gray';
                ctx.beginPath();
                ctx.moveTo(Math.round(pos_x),off_h);
                ctx.lineTo(Math.round(pos_x),off_h + h);
                ctx.stroke();
                if (i < param.maxx)
                {
                    for(var k = 0; k < param.subx_nbr; k++) 
                    {
                        ctx.beginPath();
                        ctx.moveTo(Math.round(pos_x + pasx / param.subx_nbr * k),off_h);
                        ctx.lineTo(Math.round(pos_x + pasx / param.subx_nbr * k),off_h + h);
                        ctx.stroke();
                    }
                }
                ctx.strokeStyle = 'white';
            }

            ctx.beginPath();
            ctx.moveTo(Math.round(pos_x),Math.round(off_y - linesize / 2));
            ctx.lineTo(Math.round(pos_x),Math.round(off_y + linesize / 2));
            ctx.stroke();

            i += param.pasx;
            i = Math.round(i*10)/10;
            pos_x = off_w + 20 + (i-param.minx) / param.pasx * pasx;
        }

        var pos_y = h - 20 - off_h;
        var off_x = verticaleAxeposition;
        i = param.miny;
        while(pos_y > (19 + off_h)) 
        {
            if (param.suby && Math.round(pos_y))
            {
                ctx.strokeStyle = 'gray';
                ctx.beginPath();
                ctx.moveTo(off_w,Math.round(pos_y));
                ctx.lineTo(off_w + w,Math.round(pos_y));
                ctx.stroke();
                if (i < param.maxy)
                {
                    for(k = 0; k < param.suby_nbr; k++) 
                    {
                        ctx.beginPath();
                        ctx.moveTo(off_w,Math.round(pos_y - pasy / param.suby_nbr * k));
                        ctx.lineTo(off_w + w,Math.round(pos_y - pasy / param.suby_nbr * k));
                        ctx.stroke();
                    }
                }
                ctx.strokeStyle = 'white';
            }
            ctx.beginPath();
            ctx.moveTo(Math.round(off_x - linesize / 2),Math.round(pos_y));
            ctx.lineTo(Math.round(off_x + linesize / 2),Math.round(pos_y));
            ctx.stroke();

            i += param.pasy;
            i = Math.round(i*10)/10;
            pos_y = h - 20 - off_h - (i-param.miny) / param.pasy * pasy;
        }

        pos_x = off_w + 20;
        off_y = HorizontalAxeposition;
        i = param.minx;
        while(pos_x < (off_w + w - 19)) 
        {
            if (i != 0)
                ctx.fillText(i.toString(), pos_x - 0.5, off_y + linesize / 2 + 9.5);
            else
            {
                ctx.fillText(i.toString(), pos_x + 9.5, off_y + linesize / 2 + 9.5);
                zero = true;
            }

            i += param.pasx;
            i = Math.round(i*10)/10;
            pos_x = off_w + 20 + (i-param.minx) / param.pasx * pasx;
        }
        pos_y = h - 20 - off_h;
        off_x = verticaleAxeposition;
        i = param.miny;
        while(pos_y > (19 + off_h)) 
        {
            if (i != 0)
                ctx.fillText(i.toString(), off_x + linesize / 2 + 9.5, pos_y + 2.5);
            else if (!zero)
            {
                ctx.fillText(i.toString(), off_x + linesize / 2 + 9.5, pos_y + 9.5);
            }

            i += param.pasy;
            i = Math.round(i*10)/10;
            pos_y = h - 20 - off_h - (i-param.miny) / param.pasy * pasy;
        }

        ctx.beginPath();
        ctx.moveTo(off_w, HorizontalAxeposition);
        ctx.lineTo(off_w + w, HorizontalAxeposition);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(off_w + w - 5,HorizontalAxeposition - 2.5);
        ctx.lineTo(off_w + w,HorizontalAxeposition);
        ctx.lineTo(off_w + w - 5,HorizontalAxeposition + 2.5);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(verticaleAxeposition,off_h);
        ctx.lineTo(verticaleAxeposition,h - off_h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(verticaleAxeposition - 2.5, off_h + 5);
        ctx.lineTo(verticaleAxeposition, off_h);
        ctx.lineTo(verticaleAxeposition + 2.5, off_h + 5);
        ctx.closePath();
        ctx.fill();
    }

     // Calcul les coefficient de lagrange passant par une liste de points
    static Lagrange(points) {
        var polynomial = Troisième_NotionFonction.zeros(points.length);
        var coefficients;
        for (var i=0; i<points.length; ++i) {
        coefficients = Troisième_NotionFonction.interpolation_polynomial(i, points);
        for (var k=0; k<points.length; ++k) {
            polynomial[k] += points[i].y*coefficients[k];
        }
        }
        return polynomial;
    }

    // initialize array
    static zeros(n) {
        var array = new Array(n);
        for (var i=n; i--;) {
        array[i] = 0;
        }
        return array;
    }

     // calculate coefficients for Li polynomial
    static interpolation_polynomial(i, points) {
        var coefficients = Troisième_NotionFonction.zeros(points.length);
        coefficients[0] = 1/ Troisième_NotionFonction.denominator(i,points);
        var new_coefficients;
    
        for (var k = 0; k<points.length; k++) {
        if (k == i) {
            continue;
        }
        new_coefficients = Troisième_NotionFonction.zeros(points.length);
            for (var j= (k < i) ? k+1 : k; j--;) {
            new_coefficients[j+1] += coefficients[j];
            new_coefficients[j] -= points[k].x*coefficients[j];
        }   
        coefficients = new_coefficients;
        }
        return coefficients;
    }

    // calculate coefficient dénominator
    static denominator(i, points) {
        var result = 1;
        var x_i = points[i].x;
        for (var j=points.length; j--;) {
           if (i != j) {
             result *= x_i - points[j].x;
           }
        }
        return result;
     }
}

// Statistiques
class Troisième_Statistiques
{
    static CreateListEntier(nbr,min,max)
    {
        var array = []
        for(var i = 0; i < nbr; i++){
            array.push(Constante.Randint(min,max));
        }
        return array;
    }

    static CalculateMoyenne(array){
        return Math.round(Troisième_Statistiques.Somme(array) / array.length * 10) / 10;
    }

    static Somme(array){
        var somme = 0;
        for(var i = 0; i < array.length; i++){
            somme += array[i];
        }
        return somme;
    }

    static CalculateMoyennePondérée(array, coef){
        var somme = 0;
        var nbr = 0;
        for(var i = 0; i < array.length; i++){
            somme += array[i] * coef[i];
            nbr += coef[i];
        }
        return Math.round(somme / nbr * 10) / 10;
    }


    static CalculateMédianne(array){
        var middle = (array.length - array.length % 2) / 2;
        if (array.length % 2 == 0){
            return Math.round((array[middle] + array[middle + 1])/2 * 10) / 10;
        }
        else{
            return Math.round(array[middle + 1] * 10) / 10;
        }
    }

    static CalculateEtendue(array){
        var max = -9999999999;
        var min = 99999999999;
        for(var i = 0; i < array.length; i++){
            if(array[i] < min)
                min = array[i];
            if(array[i] > max)
                max = array[i];
        }
        return Math.round((max - min) * 10) / 10;
    }
}

// Théorème de Thalès
class Troisième_Thalès{

    static CreateThales(forme){
        var inconnue1 = Constante.Randint(0,2);
        var inconnue2 = Constante.Randint(0,2);
        while (inconnue1 == inconnue2)
            inconnue2 = Constante.Randint(0,2);
    
        return [inconnue1, inconnue2, Troisième_Thalès.CreateThalesEgalité()];
    }
    
    static CreateReciproque(){
        var erreur = Constante.Randint(0,1);
        var line = Constante.Randint(0,2);
        if (erreur == 0)
            return [line, 0, Troisième_Thalès.CreateThalesEgalité()];
        else{
            var ar = Troisième_Thalès.CreateThalesEgalité();
            var e = Constante.Randint(0,5);
            while((e - e%2) == line*2)
                e = Constante.Randint(0,5);
            ar[e] = Constante.Round(ar[e] + 0.1 + Constante.Rand(0,2,1));
            return [line, 1, ar];
        }
    }
    
    
    
    static CreateThalesEgalité(){
        var AC = 0;var BC = 0;var EC = 0;var DC = 0;var AE = 0; var BD = 0;
        BC = Constante.Round(Constante.Rand(2, 8, 1));
        DC = Constante.Round(Constante.Rand(2, 8, 1));
        BD = Constante.Round(Constante.Rand(2, 8, 1));
        AC = Constante.Round(BC + 0.1 + Constante.Rand(0, 3, 1));
        var coef = AC/BC;
        EC = Constante.Round(DC * coef);
        AE = Constante.Round(BD * coef);
    
        return [AC, BC, DC, EC, AE, BD];
    }
}

// Transformations du plan
class Troisième_TransformationPlan
{
    static positionfigure = [];
    static positionpoint = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0]];



    static GenererIdentifier(){
        var type = Constante.Randint(0,3);
        var result = [type, [0,0,0,-1]];
        while (result[1][3] < 0){
            if (type == 1)
                result[1] = Troisième_TransformationPlan.GénérerRotation();
            if (type == 3)
                result[1] = Troisième_TransformationPlan.GénérerSymétrieCentrale();
            if (type == 2)
                result[1] = Troisième_TransformationPlan.GénérerSymétrieAxiale();
            if (type == 0)
                result[1] = Troisième_TransformationPlan.GénérerTranslation();
        }
        return result;
    }

    static GenererSymétrie(){
        var type = Constante.Randint(0,1);
        var result = [type, [0,0,0,-1]];
        while (result[1][3] < 0){
            if (type == 1)
                result[1] = Troisième_TransformationPlan.GénérerSymétrieCentrale();
            if (type == 0)
                result[1] = Troisième_TransformationPlan.GénérerSymétrieAxiale();
        }
        return result;
    }

    static GénérerRotation(){
        var piece = Constante.Randint(0,95);
        var centre = 0;
        var angle = 90 + 180 * Constante.Randint(0,1);
        var result = -1;
        var count = -1;
        while(result < 0 && count < 5000)
        {
            centre = Constante.Randint(0,24);
            var result = Troisième_TransformationPlan.ApplyRotation(piece, centre, angle);
            count += 1;
        }
        return [piece, angle, centre, result];
    }

    static GénérerRotationFull(){
        var piece = Constante.Randint(0,95);
        var centre = 0;
        var angle = 90 + 90 * Constante.Randint(0,2);
        var result = -1;
        var count = -1;
        while(result < 0 && count < 5000)
        {
            centre = Constante.Randint(0,24);
            var result = Troisième_TransformationPlan.ApplyRotation(piece, centre, angle);
            count += 1;
        }
        return [piece, angle, centre, result];
    }

    static ApplyRotation(piece, centre, angle){
        if (centre == -1)
            return -1;
        var positionpiece = {
            x:Math.round (Troisième_TransformationPlan.positionfigure[piece][0]),
            y:Math.round (Troisième_TransformationPlan.positionfigure[piece][1])};
        var image = Constante.rotate(positionpiece,
            {x:Math.round (Troisième_TransformationPlan.positionpoint[centre][0]),
             y:Math.round (Troisième_TransformationPlan.positionpoint[centre][1])},
            angle);
        return Troisième_TransformationPlan.FindNearest(image);
    }

    static GénérerSymétrieCentrale(){
        var piece = Constante.Randint(0,95);
        var centre = 0;
        var result = -1;
        var count = -1;
        while(result < 0 && count < 5000)
        {
            centre = Constante.Randint(0,24);
            var result = Troisième_TransformationPlan.ApplySymetrieCentrale(piece, centre);
            count += 1;
        }
        return [piece, 180, centre, result];
    }

    static ApplySymetrieCentrale(piece, centre){
        return Troisième_TransformationPlan.ApplyRotation(piece, centre, 180)
    }

    static GénérerSymétrieAxiale(){
        var pointa = Constante.Randint(0,24);
        var pointb = Constante.Randint(0,24);
        while(!Troisième_TransformationPlan.aligner(pointa, pointb))
            pointb = Constante.Randint(0,24);
        var piece = 0;
        var result = -1;
        var count = -1;
        while(result < 0 && count < 5000)
        {
            piece = Constante.Randint(0,95);
            var result = Troisième_TransformationPlan.ApplySymetrieAxiale(piece, pointa, pointb);
            count += 1;
        }
        return [piece, pointa, pointb, result];
    }

    static ApplySymetrieAxiale(piece, pointa, pointb){
        if (pointa == -1 || pointb == -1)
            return -1;
        var pos1 = Troisième_TransformationPlan.positionpoint[Math.min(pointa, pointb)];
        var pos2 = Troisième_TransformationPlan.positionpoint[Math.max(pointb, pointa)];
        var positionpiece = Troisième_TransformationPlan.positionfigure[piece];
        var image = [];
        if (Math.abs(pos1[0]-pos2[0]) < 5){
            image = [2 * pos1[0] - positionpiece[0], positionpiece[1]];
        }
        else if (Math.abs(pos1[1]-pos2[1]) < 5){
            image = [positionpiece[0], 2 * pos1[1] - positionpiece[1]];
        }
        else{
            if (pos1[0] > pos2[0])
                image = [pos1[0] + pos1[1] - positionpiece[1], pos1[1] + pos1[0] - positionpiece[0]];
            else
                image = [pos1[0] - pos1[1] + positionpiece[1], pos1[1] - pos1[0] + positionpiece[0]];
        }
        return Troisième_TransformationPlan.FindNearest(image);
    }

    static GénérerTranslation(){
        var piece = Constante.Randint(0,95);
        var pointa = Constante.Randint(0,24);
        var pointb = 0;
        var result = -1;
        var count = -1;
        while(result < 0 && count < 5000)
        {
            pointb = Constante.Randint(0,24);
            while (pointb == pointa)
                pointb = Constante.Randint(0,24);
            var result = Troisième_TransformationPlan.ApplyTranslation(piece, pointa, pointb);
            count += 1;
        }
        return [piece, pointa, pointb, result];
    }

    static ApplyTranslation(piece, pointa, pointb){
        if (pointa == -1 || pointb == -1)
            return -1;
        var positionpiece = {
            x:Math.round (Troisième_TransformationPlan.positionfigure[piece][0]),
            y:Math.round (Troisième_TransformationPlan.positionfigure[piece][1])};
        var image = [positionpiece.x + Troisième_TransformationPlan.positionpoint[pointb][0] - Troisième_TransformationPlan.positionpoint[pointa][0],
                    positionpiece.y + Troisième_TransformationPlan.positionpoint[pointb][1] - Troisième_TransformationPlan.positionpoint[pointa][1]];
        return Troisième_TransformationPlan.FindNearest(image);
    }

    static aligner(a, b){
        if (a == b)
            return false;
        var pos1 = Troisième_TransformationPlan.positionpoint[a];
        var pos2 = Troisième_TransformationPlan.positionpoint[b];
        if (Math.abs(pos1[0]-pos2[0]) < 5 && Math.abs(pos1[0]-Troisième_TransformationPlan.positionpoint[0][0]) > 30 && Math.abs(pos1[0]-Troisième_TransformationPlan.positionpoint[3][0]) > 30){
            return true;
        }
        else if (Math.abs(pos1[1]-pos2[1]) < 5 && Math.abs(pos1[1]-Troisième_TransformationPlan.positionpoint[0][1]) > 30 && Math.abs(pos1[1]-Troisième_TransformationPlan.positionpoint[21][1]) > 30){
            return true;
        }
        else if (Math.abs(Math.abs(pos1[0]-pos2[0]) - Math.abs(pos1[1]-pos2[1])) < 5){
            return true;
        }
        else
            return false;
    }

    static alignerThree(a, b, c){
        if (a == b)
            return true;
        if (a == c)
            return true;
        if (c == b)
            return true;
        var pos1 = positionpoint[a];
        var pos2 = positionpoint[b];
        var pos3 = positionpoint[c];
        var seg1 = Constante.distance(pos1, pos2);
        var seg2 = Constante.distance(pos1, pos3);
        var seg3 = Constante.distance(pos3, pos2);
        if (Math.abs(seg1 - (seg2+seg3)) < 2)
            return true;
        if (Math.abs(seg2 - (seg1+seg3)) < 2)
            return true;
        if (Math.abs(seg3 - (seg2+seg1)) < 2)
            return true;
        return false;
    }

    static FindNearest(point){
        var mindistance = 9999;
        var selectedpiece = -1;
        for(var i = 0; i < Troisième_TransformationPlan.positionfigure.length; i++) {
            var distanceab = Constante.distance(point,Troisième_TransformationPlan.positionfigure[i]);
            if(distanceab< mindistance || selectedpiece == -1){
                selectedpiece = i;
                mindistance = distanceab;
            }
        }
        if (mindistance > 15 || isNaN(mindistance))
            return -1;
        else
            return selectedpiece;
    }

    static GénérerHomothétie(){
        var result = Troisième_TransformationPlan.CreateTriangleAndCentre();
        
        result.push(Constante.Randint(11,20) / 10);
        result.push(Constante.Randint(1,9) / 10);
        result.push(Constante.Randint(-1,-20) / 10);

        return result;
    }

    static CreateTriangleAndCentre(){
        var d = Math.PI/180;
        var offset = Constante.Randint(0,360);
        var angle = Constante.Randint(0,60);
        var distance = Constante.Randint(25,50);
        var a = {x: distance * Math.cos(d*(angle + offset)), y: distance * Math.sin(d*(angle + offset))};
        angle = Constante.Randint(0,60);
        distance = Constante.Randint(25,50);
        var b = {x: distance * Math.cos(d*(angle + offset + 120)), y: distance * Math.sin(d*(angle + offset + 120))};
        angle = Constante.Randint(0,60);
        distance = Constante.Randint(25,50);
        var c = {x: distance * Math.cos(d*(angle + offset + 240)), y: distance * Math.sin(d*(angle + offset + 240))};

        var center = {x: (b.x+c.x)/2 * 1.5, y: (b.y+c.y)/2 * 1.5};
        return [a,b,c,center];
    }

    static DrawHomothétie(param, c){
        var ctx = c.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, c.width, c.height);
        var w = c.width - 40;
        var h = c.height - 40;
        var points = Troisième_TransformationPlan.GetSize(param);
        var coef = Math.min(w / points[13], h / points[14]);
        var offw = 20 + (w - points[13] * coef)/2 - points[15] * coef;
        var offh = 20 + (h - points[14] * coef)/2 - points[16] * coef;

        ctx.fillStyle = "white";
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineJoint = 'round';
        ctx.lineWidth = 1.0;
        ctx.font = "10px Arial";
        ctx.textAlign="center";

        ctx.beginPath();
        ctx.strokeStyle = '#FF5555';
        ctx.moveTo(offw + points[3].x * coef, offh + points[3].y * coef);
        ctx.lineTo(offw + points[4].x * coef, offh + points[4].y * coef);
        ctx.lineTo(offw + points[5].x * coef, offh + points[5].y * coef);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#55FF55';
        ctx.moveTo(offw + points[6].x * coef, offh + points[6].y * coef);
        ctx.lineTo(offw + points[7].x * coef, offh + points[7].y * coef);
        ctx.lineTo(offw + points[8].x * coef, offh + points[8].y * coef);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#FFFF55';
        ctx.moveTo(offw + points[9].x * coef, offh + points[9].y * coef);
        ctx.lineTo(offw + points[10].x * coef, offh + points[10].y * coef);
        ctx.lineTo(offw + points[11].x * coef, offh + points[11].y * coef);
        ctx.closePath();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(offw + points[0].x * coef, offh + points[0].y * coef);
        ctx.lineTo(offw + points[1].x * coef, offh + points[1].y * coef);
        ctx.lineTo(offw + points[2].x * coef, offh + points[2].y * coef);
        ctx.closePath();
        ctx.stroke();

        var colors =  ['white', '#FF5555','#55FF55','#FFFF55'];
        for(var i = 0; i < 13; i++) {

            var txt = Constante.alphabet[i]
            var color = colors[Math.floor(i/3)];
            if (i == 12){
                txt = "O";
                color = 'white';
            }
            Troisième_TransformationPlan.drawPointColor(offw + points[i].x * coef, offh + points[i].y * coef, txt, color, c);
        }

    }

    static GetSize(param){
        var a = param[0];
        var b = param[1];
        var c = param[2];
        var centre = param[3];
        var coefbig = param[4];
        var coefmin = param[5];
        var coefneg = param[6];

        var a1 = {x: centre.x + (a.x-centre.x) * coefbig, y: centre.y + (a.y-centre.y) * coefbig}
        var b1 = {x: centre.x + (b.x-centre.x) * coefbig, y: centre.y + (b.y-centre.y) * coefbig}
        var c1 = {x: centre.x + (c.x-centre.x) * coefbig, y: centre.y + (c.y-centre.y) * coefbig}

        var a2 = {x: centre.x + (a.x-centre.x) * coefmin, y: centre.y + (a.y-centre.y) * coefmin}
        var b2 = {x: centre.x + (b.x-centre.x) * coefmin, y: centre.y + (b.y-centre.y) * coefmin}
        var c2 = {x: centre.x + (c.x-centre.x) * coefmin, y: centre.y + (c.y-centre.y) * coefmin}

        var a3 = {x: centre.x + (a.x-centre.x) * coefneg, y: centre.y + (a.y-centre.y) * coefneg}
        var b3 = {x: centre.x + (b.x-centre.x) * coefneg, y: centre.y + (b.y-centre.y) * coefneg}
        var c3 = {x: centre.x + (c.x-centre.x) * coefneg, y: centre.y + (c.y-centre.y) * coefneg}

        var points = [a,b,c,a1,b1,c1,a2,b2,c2,a3,b3,c3, centre];
        var minx = 999999;
        var maxx = -9999999;
        var miny = 999999;
        var maxy = -9999999;
        for(var i = 0; i < points.length; i++) {
            var p = points[i];
            if (p.x < minx)
                minx = p.x;
            if (p.x > maxx)
                maxx = p.x;
            if (p.y < miny)
                miny = p.y;
            if (p.y > maxy)
                maxy = p.y;
        }
        var distancex = maxx - minx;
        var distancey = maxy - miny;
        points.push(distancex);
        points.push(distancey);
        points.push(minx);
        points.push(miny);
        return points;
    }

    static DessinerFigure(c){
        var ctx = c.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, c.width, c.height);
        var margin = 5;
        var figuresize = 90;
        var move = figuresize/3;
        var w = 500;
        var h = 500;
        var nbr = Math.floor(w/(figuresize*4/3));
        c.width = margin * 2 + (nbr+1) * figuresize;
        c.height = margin * 2 + (nbr+1) * figuresize;
        var x = margin;
        var y = margin;
        var id = 0;
        var id2 = 0;
        for(var i = 0; i < (nbr*2-1); i++) {
            for(var j = 0; j < nbr - ((i+1)%2); j++) {
                x = margin + move * 4 * j;
                y = margin + move * 2 * i;
                if (i % 2 == 1){
                    Troisième_TransformationPlan.drawPoint(x + move * 1.5,y - move/2, Constante.alphabet[id2 - 3], c);
                    id2 += 1;
                    if (i == (nbr-1)*2 -1){
                        Troisième_TransformationPlan.drawPoint(x + move * 1.5,y + figuresize + move/2, Constante.alphabet[id2 +3], c);
                    }
                }
                else{
                    x += 2*move;
                    if (i != (nbr-1)*2){
                        Troisième_TransformationPlan.drawPoint(x + move * 1.5,y + figuresize + move/2, Constante.alphabet[id2 + 4], c);
                        id2 += 1;
                    }
                }
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.strokeStyle = 'transparent';
                ctx.moveTo(x + figuresize / 2,       y + figuresize / 2);
                ctx.lineTo(x + move,       y + move);
                ctx.lineTo(x + move,       y);
                ctx.lineTo(x + move * 1.5, y + move * 0.5);
                ctx.lineTo(x + move * 2,   y);
                ctx.lineTo(x + move * 2,   y + move);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#FF5555";
                ctx.moveTo(x + figuresize / 2,       y + figuresize / 2);
                ctx.lineTo(x + move * 2, y + move);
                ctx.lineTo(x + move * 3, y + move);
                ctx.lineTo(x + move * 2.5, y + move * 1.5);
                ctx.lineTo(x + move * 3,   y + move * 2);
                ctx.lineTo(x + move * 2,   y + move * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#55FF55";
                ctx.moveTo(x + figuresize / 2,       y + figuresize / 2);
                ctx.lineTo(x + move * 2, y + move * 2);
                ctx.lineTo(x + move * 2, y + move * 3);
                ctx.lineTo(x + move * 1.5, y + move * 2.5);
                ctx.lineTo(x + move * 1,   y + move * 3);
                ctx.lineTo(x + move * 1,   y + move * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#5555FF";
                ctx.moveTo(x + figuresize / 2,       y + figuresize / 2);
                ctx.lineTo(x + move, y + move * 2);
                ctx.lineTo(x, y + move * 2);
                ctx.lineTo(x + move * 0.5, y + move * 1.5);
                ctx.lineTo(x,   y + move * 1);
                ctx.lineTo(x + move * 1,   y + move * 1);
                ctx.closePath();
                ctx.fill();
                
                ctx.fillStyle = "gray";
                ctx.font = "12px Arial";
                ctx.textAlign="center";
                ctx.fillText(id.toString(), x + move * 1.5, y + move);
                Troisième_TransformationPlan.positionfigure.push([x + move * 1.5, y + move]);
                id += 1;
                ctx.fillText(id.toString(), x + move * 0.8, y + move*1.7);
                Troisième_TransformationPlan.positionfigure.push([ x + move * 0.8, y + move*1.7])
                id += 1;
                ctx.fillText(id.toString(), x + move * 2.2, y + move*1.7);
                Troisième_TransformationPlan.positionfigure.push([x + move * 2.2, y + move*1.7])
                id += 1;
                ctx.fillText(id.toString(), x + move * 1.5, y + move*2.4);
                Troisième_TransformationPlan.positionfigure.push([x + move * 1.5, y + move*2.4])
                id += 1;
            }
        }
    }

    static drawPoint(x,y, name, c)
    {
        var ctx = c.getContext("2d");
        Troisième_TransformationPlan.positionpoint[Constante.alphabet.indexOf(name)] = [x,y];

        var pointsize = 4;
                ctx.beginPath();
                ctx.fillStyle = "transparent";
                ctx.strokeStyle = "white";
                ctx.moveTo(x - pointsize / 2,       y - pointsize / 2);
                ctx.lineTo(x + pointsize / 2,       y + pointsize / 2);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - pointsize / 2,       y + pointsize / 2);
                ctx.lineTo(x + pointsize / 2,       y - pointsize / 2);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = "white";
                ctx.font = "12px Arial";
                ctx.textAlign="center";
                ctx.fillText(name, x - 1, y - 7);

    }

    static drawPointColor(x,y, name, color, c)
    {
        var ctx = c.getContext("2d");
        Troisième_TransformationPlan.positionpoint[Constante.alphabet.indexOf(name)] = [x,y];

        var pointsize = 4;
                ctx.beginPath();
                ctx.fillStyle = "transparent";
                ctx.strokeStyle = color;
                ctx.moveTo(x - pointsize / 2,       y - pointsize / 2);
                ctx.lineTo(x + pointsize / 2,       y + pointsize / 2);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - pointsize / 2,       y + pointsize / 2);
                ctx.lineTo(x + pointsize / 2,       y - pointsize / 2);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = color;
                ctx.font = "12px Arial";
                ctx.textAlign="center";
                ctx.fillText(name, x - 1, y - 7);

    }
}

//#endregion


//#region Quatrième

// Calcul Littérale
class Quatrième_CalculLittérale
{
    // Crée une éxpression littérale réduite.
    static CreateExprLitt() {
        return Troisième_CalculLittéral.CreateExprLitt();

    }

    //Crée une expression littérale à développer
    static CreateExprDev(){
        return Troisième_CalculLittéral.CreateExprDev();
    }

    // Crée une expression à factoriser
    static CreateExprFact(){
        return Troisième_CalculLittéral.CreateExprFact();
    }

    // Transforme un tableau de nombre en une suite de multiplication sous forme de texte
    static DecompositionToTxt(array) {
        return Troisième_CalculLittéral.DecompositionToTxt(array);
    }

    // Creer une expression a réduire
    static CreateReductionExpression(nbrterme, coefmin, coefmax) {
        return Troisième_CalculLittéral.CreateReductionExpression(nbrterme, coefmin, coefmax);
    }
}

// Fractions
class Quatrième_Fractions
{
    // Crée la décomposition d'un nombre aléatoire entre min et max sous forme de texte
    static CreateDecompBetween(min, max) {
        var array = [2,2,2,2,2556];
        var nombre;
        while (array.length === 1 || array[array.length - 1] > PremierCourt[PremierCourt.length - 1]) {
            nombre = Constante.Randint(min, max);
            array = Quatrième_Fractions.Decomposition(nombre);
        }
        return [nombre.toString(), Quatrième_Fractions.DecompositionToTxt(array)];
    }
    // Crée la décomposition d'un nombre sous forme de tableau de nombre
    static Decomposition(nbr)
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

    // Génère Une fraction à réduire
    static GenererExerciceProblème(min, max) {
        var minpgcd = Math.floor(Math.sqrt(min));
        var maxpgcd = Math.floor(Math.sqrt(max));
        var pgcd = Constante.Randint(minpgcd, minpgcd*2);
        var newmin = Math.floor(min / pgcd);
        var newmax = Math.floor(max / pgcd);
        var roses = pgcd * Constante.Randint(newmin, newmax);
        var marguerites = pgcd * Constante.Randint(newmin, newmax);
        pgcd = Constante.GetPGCD(roses, marguerites);

        return [roses, marguerites, pgcd];
    }   

    // Crée une opération additive

    static CreateAdd() {
        var x1 = Constante.Randint(-30,30);
        while (x1 === 0)
            var x1 = Constante.Randint(-30,30);
        var x0 = Constante.Randint(-15,15);
        while (x0 === 0)
            var x0 = Constante.Randint(-15,15);
        var y1 = Constante.Randint(-30,30);
        while (y1 === 0)
            var y1 = Constante.Randint(-30,30);
        var y0 = Constante.Randint(-15,15);
        while (y0 === 0)
            var y0 = Constante.Randint(-15,15);
        var calc = Constante.Randint(0,1);
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
        return [x1, x0, y1, y0, sol1, sol0, op, sol1/Constante.GetPGCD(sol1,sol0), sol0/Constante.GetPGCD(sol1,sol0)];
    }

    // Crée une opération multiplicative

    static CreateMult() {
        var x1 = Constante.Randint(-30,30);
        while (x1 === 0)
            var x1 = Constante.Randint(-30,30);
        var x0 = Constante.Randint(-15,15);
        while (x0 === 0)
            var x0 = Constante.Randint(-15,15);
        var y1 = Constante.Randint(-30,30);
        while (y1 === 0)
            var y1 = Constante.Randint(-30,30);
        var y0 = Constante.Randint(-15,15);
        while (y0 === 0)
            var y0 = Constante.Randint(-15,15);
        var calc = Constante.Randint(0,1);
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
        return [x1, x0, y1, y0, sol1, sol0, op, sol1/Constante.GetPGCD(sol1,sol0), sol0/Constante.GetPGCD(sol1,sol0)];
    }

    // Crée l'écriture de l'opération
    static CreateCalc(a,b,c){
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
}

// Nombres Relatifs
class Quatrième_NombresRelatifs
{
    // Crée une opération additive
    static CreateAdd() {
        var x1 = Constante.Randint(-30,30);
        while (x1 === 0)
            var x1 = Constante.Randint(-30,30);
        var x0 = Constante.Randint(-30,30);
        while (x0 === 0)
            var x0 = Constante.Randint(-30,30);
        var calc = Constante.Randint(0,1);
        if (calc === 0)
            var sol = x1+x0;
        else 
            var sol = x1-x0
        return [Quatrième_NombresRelatifs.CreateCalc(calc,x1,x0), sol.toString()];

    }

    // Crée une opération multiplicative
    static CreateMult() {
        var x1 = Constante.Randint(-15,15);
        while (x1 === 0)
            var x1 = Constante.Randint(-15,15);
        var x0 = Constante.Randint(-15,15);
        while (x0 === 0)
            var x0 = Constante.Randint(-15,15);
        var calc = Constante.Randint(2,3);
        if (calc === 2)
            var sol = x1*x0;
        else 
            var sol = x1/x0
        return [Quatrième_NombresRelatifs.CreateCalc(calc,x1,x0), sol.toString()];

    }

    // Crée l'écriture de l'opération
    static CreateCalc(a,b,c){
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
}

// Proportionnalité
class Quatrième_Proportionnalité
{
    //Tableau à compléter
    static CreateProp()
    {
        var a = Constante.Randint(-20,20)
        while (a === 0)
            a = Constante.Randint(-20,20)
        var b = Constante.Randint(-20,20)
        while (b === 0)
            b = Constante.Randint(-20,20)
        var coef = a / Constante.GetPGCD(a,b)
        var c = Constante.Randint(-7,7)
        while (c === 0 || c === Constante.GetPGCD(a,b))
            c = Constante.Randint(-7,7)
        c *= coef
        var sol = b*c/a
        return [a, b, c, sol]
    }

    //Situation de proportionnalité ?
    static CreateSitProp()
    {
        var a = Constante.Randint(0,20);
        while (a === 0)
            a = Constante.Randint(0,20);
        var b = Constante.Randint(0,20);
        while (b === 0 || b == a)
            b = Constante.Randint(0,20);
        var coef1 = Constante.Randint(2,12);
        var coef2 = Constante.Randint(2,12);
        while(coef2 == coef1)
            coef2 = Constante.Randint(2,12);
        var sol = Constante.Randint(0,1);
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
        var pos = Constante.Randint(0,2);
        if (pos == 0)
            return [a, b, c, d, e, f, sol];
        else if (pos == 1)
            return [c, d, a, b, e, f, sol];
        else
            return [a, b, e, f, c, d, sol];
    }
}

// Pyramide et Cône
class Quatrième_PyramideCône
{

    static CreatePolygoneRegulier(nbrpoint, w, h){
        var points = [];
        var angle = 0;
        var dangle = 360 /  nbrpoint;
        var d = Math.PI / 180;
        for(var i = 0; i< nbrpoint; i++){
            var point = {x: w/2 + w/2 * Math.cos(d * (angle + dangle * i)),
                         y: h/2 + h/2 * Math.sin(d * (angle + dangle * i))};
            points.push(point);
        }
        return points;
    }
    
    static CreateRectangle(w,h){
        var points = [];
        var point = {x: 0,y: 0};
        points.push(point);
        point = {x: w,y: 0};
        points.push(point);
        point = {x: w,y: h};
        points.push(point);
        point = {x: 0,y: h};
        points.push(point);
        return points;
    }

    static CreateCarre(w){
        return Quatrième_PyramideCône.CreateRectangle(w,w);
    }
    
    static CreateTriangle(c,h){
        var points = [];
        var point = {x: 0,y: 0};
        points.push(point);
        point = {x: 0,y: c};
        points.push(point);
        point = {x: -h,y: Constante.Randint(Math.floor(-c/4),Math.floor(c*1.25))};
        points.push(point);
        return points;
    }
    
    static CreateTriangleRectangle(c,h){
        var points = [];
        var point = {x: 0,y: 0};
        points.push(point);
        point = {x: 0,y: c};
        points.push(point);
        point = {x: -h,y: c};
        points.push(point);
        return points;
    }
    
    static CreateFigure(longmin, longmax, arrondie)
    {
        var volume = 0;
        var hauteur = Constante.Randint(longmin * 2 * arrondie, longmax * 2 / 3 * arrondie) / arrondie;
        var sommet = {x: Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie * 100,
                      y: Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie * 100,
                      z: hauteur * 100};
        var basePoints = [];
        var longueurs = [];
        var figure = Constante.Randint(0,4);
        if (figure == 0){
            let w = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            let h = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            sommet.x = Constante.Randint(-25, w * 125)
            sommet.y = Constante.Randint(-25, h * 125)
            volume = Math.round(w*h*hauteur/3 * 10)/10;
            longueurs = [w,h,w,h];
            basePoints = Quatrième_PyramideCône.CreateRectangle(w * 100,h * 100);
        }
        else if (figure == 1){
            let w = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            sommet.x = Constante.Randint(-25, w * 125)
            sommet.y = Constante.Randint(-25, w * 125)
            volume = Math.round(w*w*hauteur/3 * 10)/10;
            longueurs = [w,w,w,w];
            basePoints = Quatrième_PyramideCône.CreateCarre(w * 100);
        }
        else if (figure == 2){
            let w = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            let h = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            sommet.x = Constante.Randint(-25, w * 125)
            sommet.y = Constante.Randint(-25, h * 125)
            volume = Math.round(w*h*hauteur/6 * 10)/10;
            basePoints = Quatrième_PyramideCône.CreateTriangle(w * 100, h * 100);
            let w1 = Math.round(Constante.distanceP(basePoints[1], basePoints[2])/100 * arrondie) / arrondie;
            let w2 = Math.round(Constante.distanceP(basePoints[0], basePoints[2])/100 * arrondie) / arrondie;
            longueurs = [w,w1,w2,h];
        }
        else if (figure == 3){
            let w = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            let h = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            sommet.x = Constante.Randint(-25, w * 125)
            sommet.y = Constante.Randint(-25, h * 125)
            volume = Math.round(w*h*hauteur/6 * 10)/10;
            basePoints = Quatrième_PyramideCône.CreateTriangleRectangle(w * 100, h * 100);
            let w2 = Math.round(Constante.distanceP(basePoints[0], basePoints[2])/100 * arrondie) / arrondie;
            longueurs = [w,h,w2];
        }
        else if (figure == 4){
            hauteur = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            let w = Constante.Randint(longmin * arrondie, longmax * arrondie) / arrondie;
            volume = Math.round(Math.PI*w*w*hauteur/3 * 10)/10;
            sommet = {x: w * 100, y: w * 100, z: hauteur * 100};
            basePoints = Quatrième_PyramideCône.CreatePolygoneRegulier(100,w * 200, w * 200);
            longueurs = [w];
        }
        return {sommet: sommet, basePoints: basePoints, longueurs: longueurs,hauteur: hauteur,type: figure, volume: volume};
    }
    

    static GetSize(param){
        var a = param[0];
        var b = param[1];
        var c = param[2];
        var centre = param[3];
        var coefbig = param[4];
        var coefmin = param[5];
        var coefneg = param[6];

        var a1 = {x: centre.x + (a.x-centre.x) * coefbig, y: centre.y + (a.y-centre.y) * coefbig}
        var b1 = {x: centre.x + (b.x-centre.x) * coefbig, y: centre.y + (b.y-centre.y) * coefbig}
        var c1 = {x: centre.x + (c.x-centre.x) * coefbig, y: centre.y + (c.y-centre.y) * coefbig}

        var a2 = {x: centre.x + (a.x-centre.x) * coefmin, y: centre.y + (a.y-centre.y) * coefmin}
        var b2 = {x: centre.x + (b.x-centre.x) * coefmin, y: centre.y + (b.y-centre.y) * coefmin}
        var c2 = {x: centre.x + (c.x-centre.x) * coefmin, y: centre.y + (c.y-centre.y) * coefmin}

        var a3 = {x: centre.x + (a.x-centre.x) * coefneg, y: centre.y + (a.y-centre.y) * coefneg}
        var b3 = {x: centre.x + (b.x-centre.x) * coefneg, y: centre.y + (b.y-centre.y) * coefneg}
        var c3 = {x: centre.x + (c.x-centre.x) * coefneg, y: centre.y + (c.y-centre.y) * coefneg}

        var points = [a,b,c,a1,b1,c1,a2,b2,c2,a3,b3,c3, centre];
        var minx = 999999;
        var maxx = -9999999;
        var miny = 999999;
        var maxy = -9999999;
        for(i = 0; i < points.length; i++) {
            var p = points[i];
            if (p.x < minx)
                minx = p.x;
            if (p.x > maxx)
                maxx = p.x;
            if (p.y < miny)
                miny = p.y;
            if (p.y > maxy)
                maxy = p.y;
        }
        var distancex = maxx - minx;
        var distancey = maxy - miny;
        points.push(distancex);
        points.push(distancey);
        points.push(minx);
        points.push(miny);
        return points;
    }

    static DrawPyramide(param, c)
    {
        var w = c.width - param.margin * 2;
        var margin = param.margin;
        var Sommet = param.sommet;
        var points = param.basePoints.slice();
        var longueurs = param.longueurs;
        points.push(Sommet);
        var angle = 0;
        if (points.length < 50)
            angle = param.angle;
        var values = Quatrième_PyramideCône.AdaptForme(points, w, param.coefbase, angle);
        points = values[0];
        Sommet = Array.prototype.pop.call(points);

        var oldy = Sommet.y;
        Sommet.y = Sommet.y - param.sommet.z * values[2] * Math.sin(Math.acos(param.coefbase));
        
        var ctx = c.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, c.width, c.height);
        c.height = c.width + param.sommet.z * values[2] + margin + 12;
        var offx = margin;
    
        var offy = margin + 12 + param.sommet.z * values[2];
        

        ctx.fillStyle = "white";
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineJoint = 'round';
        ctx.lineWidth = 1.0;
        ctx.font = "10px Arial";
        ctx.textAlign="center";
    
        var barycentre = Quatrième_PyramideCône.GetBarycentre(points);
        
        Quatrième_PyramideCône.drawPoint(offx + Sommet.x, offy + Sommet.y, "S", c, 10, 270, 0);
    
        var baseColor = "#FFFF55"
    
        ctx.strokeStyle = '#FF5555';
        ctx.beginPath();
        ctx.setLineDash([5,5]);
        ctx.moveTo(offx + Sommet.x,offy + Sommet.y);
        ctx.lineTo(offx + Sommet.x,offy + oldy);
        ctx.stroke();
    
        Quatrième_PyramideCône.drawPointColor(offx + Sommet.x,offy + oldy, "H",'#FF5555', c, 10, -45, 5);
        let middle = {x: offx + Sommet.x, y: offy + (Sommet.y + oldy)/2}
        Quatrième_PyramideCône.drawTxt(middle,param.hauteur + "cm",c, 90,15, "#FF5555");
    
        ctx.strokeStyle = 'white';
    
        var draw = [];
        var drawtext = [];
    
        var Last = points[0];
        var First = points[0];
        var change1 = 0;
        var change2 = 0;
    
        for(var i = 1; i <= points.length+1; i++)
        {
            var Start = points[i % points.length];
            var Temp = points[(i+1) % points.length];
            if (Constante.GetAngle(Temp, Sommet) > Constante.GetAngle(Start, Sommet) || param.coefbase == 1 || Start.y < Sommet.y || Temp.y < Sommet.y)
            {
                if (change1 == 0)
                    change1 = 1;
                if (change2 == 1)
                {
                    Last = Start;
                    change2 = 2;
                }
                ctx.strokeStyle = baseColor;
                ctx.beginPath();
                ctx.setLineDash([]);
                ctx.moveTo(offx + Start.x,offy + Start.y);
                ctx.lineTo(offx + Temp.x,offy + Temp.y);
                ctx.stroke();
                if (points.length < 50)
                {
                    ctx.strokeStyle = 'white';
                    ctx.beginPath();
                    ctx.moveTo(offx + Temp.x,offy + Temp.y);
                    ctx.lineTo(offx + Sommet.x,offy + Sommet.y);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(offx + Sommet.x,offy + Sommet.y);
                    ctx.lineTo(offx + Start.x,offy + Start.y);
                    ctx.stroke();
        
                    if (!drawtext.includes(Start)){
                        let ang = Constante.GetAngle(barycentre, Start) * 180 / Math.PI;
                        Quatrième_PyramideCône.drawPoint(offx + Start.x, offy + Start.y, Constante.alphabet[i % points.length], c, 10, ang, 0)
                        drawtext.push(Start);
                    }
                    if (!drawtext.includes(Temp)){
                        let ang = Constante.GetAngle(barycentre, Temp) * 180 / Math.PI;
                        Quatrième_PyramideCône.drawPoint(offx + Temp.x, offy + Temp.y, Constante.alphabet[(i+1) % points.length], c, 10, ang, 0)
                        drawtext.push(Temp);
                    }
                    let middle = {x: offx + (Start.x + Temp.x)/2, y: offy + (Start.y + Temp.y)/2}
                    Quatrième_PyramideCône.drawTxt(middle,longueurs[(i) % points.length] + "cm",c,Constante.GetAngle(Temp, Start) * 180 / Math.PI,15);
                }
            }
            else
            {
                if (change1 == 1){
                    First = Start;
                    change1 = 2;
                }
                if (change2 == 0)
                    change2 = 1;
                if (points.length > 50 && i % 2 == 0)
                    continue;
                ctx.strokeStyle = baseColor;
                ctx.beginPath();
                ctx.setLineDash([5,5]);
                ctx.moveTo(offx + Start.x,offy + Start.y);
                ctx.lineTo(offx + Temp.x,offy + Temp.y);
                ctx.stroke();
                if (points.length < 50)
                {
                    if (!draw.includes(Temp))
                    {
                        ctx.strokeStyle = 'white';
                        ctx.beginPath();
                        ctx.moveTo(offx + Temp.x,offy + Temp.y);
                        ctx.lineTo(offx + Sommet.x,offy + Sommet.y);
                        ctx.stroke();
                        draw.push(Temp);
                    }
                    if (!draw.includes(Start))
                    {
                        ctx.strokeStyle = 'white';
                        ctx.beginPath();
                        ctx.moveTo(offx + Start.x,offy + Start.y);
                        ctx.lineTo(offx + Sommet.x,offy + Sommet.y);
                        ctx.stroke();
                        draw.push(Start);
                    }
                }
            }
        }
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(offx + Last.x,offy + Last.y);
        ctx.lineTo(offx + Sommet.x,offy + Sommet.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(offx + First.x,offy + First.y);
        ctx.lineTo(offx + Sommet.x,offy + Sommet.y);
        ctx.stroke();
    
        if (points.length > 50)
        {
            ctx.strokeStyle = baseColor;
            ctx.beginPath();
            ctx.moveTo(offx + Sommet.x,offy + oldy);
            ctx.lineTo(offx + points[0].x,offy + points[0].y);
            ctx.stroke();
    
            let middle = {x: offx + (Sommet.x + points[0].x)/2, y: offy + (oldy + points[0].y)/2}
            Quatrième_PyramideCône.drawTxt(middle,longueurs[0] + "cm",c,Constante.GetAngle({x: Sommet.x, y: oldy}, points[0]) * 180 / Math.PI,15, baseColor);
        }
    
    }
    
    static AdaptForme(points, w, coefh, angle){
        var newpoints = []
        for(var i = 0; i < points.length; i++){
            newpoints.push(Constante.rotateP(points[i], {x: 0, y: 0}, angle));
        }
        var barycentre = Quatrième_PyramideCône.GetBarycentre(newpoints);
        var distancemax = -9999999;
        for(var i = 0; i < newpoints.length; i++){
            if (Constante.distanceP(newpoints[i], barycentre) > distancemax)
            { 
                distancemax = Constante.distanceP(newpoints[i], barycentre);
            }
        }
        var offsetx = distancemax - barycentre.x;
        var offsety = distancemax - barycentre.y;
        var coefw = w / (distancemax * 2);
        for(var i = 0; i < newpoints.length; i++){
            newpoints[i].x = (offsetx + newpoints[i].x) * coefw;
            newpoints[i].y = (offsety + newpoints[i].y) * coefw * coefh;
        }
        return [newpoints, (distancemax * 2) * coefw * coefh, coefw];
    }
    
    static GetBarycentre(arrayPoint)
    {
        var somx = 0;
        var somy = 0;
        for(var i = 0; i < arrayPoint.length; i++){
            somx += arrayPoint[i].x;
            somy += arrayPoint[i].y;
        }
        return {x: somx / arrayPoint.length,
                y: somy / arrayPoint.length};
    }
    
    static drawTxt(point, txt, c, angle = 0, offy = 0, color = "white")
    {
        var d = Math.PI/180;
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.font = "14px Arial";
        ctx.textAlign="center";
        ctx.rotate(angle * d);
        var newposition = Constante.rotateP(point, {x: 0, y: 0}, angle);
        ctx.fillText(txt.toString().replace(".",","), newposition.x, newposition.y + offy);
        ctx.rotate(-angle * d);
    }
    
    static drawPoint(x,y, name, c,distance = 7, angle = 0, pointsize = 4)
    {
        var d = -Math.PI/180;
    
        var ctx = c.getContext("2d");
    
        if (pointsize > 0)
        {
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.fillStyle = "transparent";
            ctx.strokeStyle = "white";
            ctx.moveTo(x - pointsize / 2,       y - pointsize / 2);
            ctx.lineTo(x + pointsize / 2,       y + pointsize / 2);
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x - pointsize / 2,       y + pointsize / 2);
            ctx.lineTo(x + pointsize / 2,       y - pointsize / 2);
            ctx.closePath();
            ctx.stroke();
        }
    
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign="center";
        ctx.fillText(name, x + distance * Math.cos(d * angle) - 1, y + 6 - distance * Math.sin(d * angle) );
    
    }
    
    static drawPointColor(x,y, name, color, c, distance = 7, angle = 0, pointsize = 4)
    {
        var d = -Math.PI/180;
        var ctx = c.getContext("2d");
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = color;
        ctx.moveTo(x - pointsize / 2,       y - pointsize / 2);
        ctx.lineTo(x + pointsize / 2,       y + pointsize / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - pointsize / 2,       y + pointsize / 2);
        ctx.lineTo(x + pointsize / 2,       y - pointsize / 2);
        ctx.closePath();
        ctx.stroke();
    
        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.textAlign="center";
        ctx.fillText(name, x + distance * Math.cos(d * angle) - 1, y + 6 - distance * Math.sin(d * angle) );
    
    }
}

// Théorème de Pythagore
class Quatrième_Pythagore
{

    static CreateTriangle(){
        var size = 240
        var d = Math.PI/180;
        var angle = 10 + Constante.Randint(10,70);
        var sommets = ["A","B","C"]
        var i = Constante.Randint(0,2);
        var a = {x: 0, y: size / 2,sommet: sommets[i]};
        var b = {x: size, y: size / 2,sommet: sommets[(i+1) % 3]};
        var c = {x: size * Math.cos(d * angle) * Math.cos(d * angle) , y: size / 2 - size * Math.cos(d * angle) * Math.sin(d * angle),sommet: sommets[(i+2) % 3]};
        return [a,b,c, angle];
    }
    
    static CreatePythagore(param, c){
        var d = Math.PI/180;
        var triangle = Quatrième_Pythagore.CreateTriangle();
    
        var angle = triangle[3];
        var cotemin = Constante.Randint(param.longueurmin * param.arrondi, param.longueurmax * param.arrondi) / param.arrondi;
        var cotemin2 = Math.round(Math.tan(d * angle) * cotemin * param.arrondi) / param.arrondi;
        var cotemax = Math.round(cotemin / Math.cos(d * angle) * param.arrondi) / param.arrondi;
    
        triangle.push(cotemin);
        triangle.push(cotemin2);
        triangle.push(cotemax);
        triangle.push(true);
    
        Quatrième_Pythagore.Drawtriangle(param, triangle, c);
    
        return triangle;
    }
    
    static CreateFauxPythagore(param, c){
        var d = Math.PI/180;
        var triangle = Quatrième_Pythagore.CreateTriangle();
    
        var angle = triangle[3];
        var change = Constante.Randint(0,2);
        var cotemin = Constante.Randint(param.longueurmin * param.arrondi, param.longueurmax * param.arrondi) / param.arrondi;
        var cotemin2 = Math.round(Math.tan(d * angle) * cotemin * param.arrondi) / param.arrondi;
        var cotemax = Math.round(cotemin / Math.cos(d * angle) * param.arrondi) / param.arrondi;
    
        if (change == 0)
            cotemin += 0.5;
        if (change == 1)
            cotemin2 += 0.5;
        if (change == 2)
            cotemax += 0.5;
    
        triangle.push(cotemin);
        triangle.push(cotemin2);
        triangle.push(cotemax);
        triangle.push(false);
    
        Quatrième_Pythagore.Drawtriangle(param, triangle, c);
    
        return triangle;
    }
    
    static Drawtriangle(param, triangle, c){
        var ctx = c.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, c.width, c.height);
        var w = c.width - 40;
        var h = c.height - 40;
        var offw = 20;
        var offh = 20;
    
        ctx.fillStyle = "white";
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineJoint = 'round';
        ctx.lineWidth = 1.0;
        ctx.font = "10px Arial";
        ctx.textAlign="center";
    
        ctx.beginPath();
        ctx.moveTo(offw + triangle[0].x, offh + triangle[0].y);
        ctx.lineTo(offw + triangle[1].x, offh + triangle[1].y);
        ctx.lineTo(offw + triangle[2].x, offh + triangle[2].y);
        ctx.closePath();
        ctx.stroke();
    
        var vector1 = {x: (triangle[0].x - triangle[2].x)/Constante.distanceP(triangle[0],triangle[2]) * 10,
                       y: (triangle[0].y - triangle[2].y)/Constante.distanceP(triangle[0],triangle[2]) * 10};
        var vector2 = {x: (triangle[1].x - triangle[2].x)/Constante.distanceP(triangle[1],triangle[2]) * 10,
                       y: (triangle[1].y - triangle[2].y)/Constante.distanceP(triangle[1],triangle[2]) * 10};
    
    
        if (param.angledroit)
        {
            ctx.beginPath();
            ctx.moveTo(offw + triangle[2].x + vector1.x, offh + triangle[2].y + vector1.y);
            ctx.lineTo(offw + triangle[2].x + vector1.x + vector2.x, offh + triangle[2].y + vector1.y + vector2.y);
            ctx.lineTo(offw + triangle[2].x + vector2.x, offh + triangle[2].y + vector2.y);
            ctx.stroke();
        }
    
        Quatrième_Pythagore.drawPoint(offw + triangle[0].x, offh + triangle[0].y, triangle[0].sommet, c,7, 90);
        Quatrième_Pythagore.drawPoint(offw + triangle[1].x, offh + triangle[1].y, triangle[1].sommet, c,7, 270);
        Quatrième_Pythagore.drawPoint(offw + triangle[2].x, offh + triangle[2].y, triangle[2].sommet, c,7, 0);
    
        ctx.fillStyle = "white";
        ctx.font = "14px Arial";
        ctx.textAlign="center";
        if (param.hide != 0)
            ctx.fillText(triangle[6] + "cm", 150, 155);
        ctx.rotate(-triangle[3] * Math.PI / 180);
        var vectormiddle = {x: (triangle[2].x + triangle[0].x)/2 + 15, y: (triangle[2].y + triangle[0].y)/2 + 15};
        var newvector = Constante.rotateP(vectormiddle,{x: 0, y: 0}, -triangle[3]);
        if (param.hide != 1)
            ctx.fillText(triangle[4] + "cm", newvector.x, newvector.y);
        
        var angle1 = (90-triangle[3])
        vectormiddle = {x: (triangle[1].x + triangle[2].x)/2 + 20, y: (triangle[1].y + triangle[2].y)/2 + 10};
        newvector = Constante.rotateP(vectormiddle,{x: 0, y: 0}, angle1);
        ctx.rotate(+triangle[3] * Math.PI / 180);
        ctx.rotate(angle1 * Math.PI / 180);
        if (param.hide != 2)
            ctx.fillText(triangle[5] + "cm", newvector.x, newvector.y);
    
    }

    static drawPoint(x,y, name, c,distance = 7, angle = 0)
    {
        var d = -Math.PI/180;

        var ctx = c.getContext("2d");

        var pointsize = 4;
        ctx.beginPath();
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = "white";
        ctx.moveTo(x - pointsize / 2,       y - pointsize / 2);
        ctx.lineTo(x + pointsize / 2,       y + pointsize / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - pointsize / 2,       y + pointsize / 2);
        ctx.lineTo(x + pointsize / 2,       y - pointsize / 2);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign="center";
        ctx.fillText(name, x + distance * Math.sin(d * angle) - 1, y - distance * Math.cos(d * angle) );

    }

    static drawPointColor(x,y, name, color, c)
    {
        var ctx = c.getContext("2d");

        var pointsize = 4;
        ctx.beginPath();
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = color;
        ctx.moveTo(x - pointsize / 2,       y - pointsize / 2);
        ctx.lineTo(x + pointsize / 2,       y + pointsize / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - pointsize / 2,       y + pointsize / 2);
        ctx.lineTo(x + pointsize / 2,       y - pointsize / 2);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.textAlign="center";
        ctx.fillText(name, x - 1, y - 7);

    }

}

// Transformation du plan
class Quatrième_TranformationPlan
{
    static GenererIdentifier(){
        return Troisième_TransformationPlan.GenererIdentifier();
    }

    static GenererSymétrie(){
        return Troisième_TransformationPlan.GenererSymétrie();
    }

    static GénérerRotationFull(){
        return Troisième_TransformationPlan.GénérerRotationFull();
    }

    static ApplyRotation(piece, centre, angle){
        return Troisième_TransformationPlan.ApplyRotation(piece, centre, angle);
    }

    static ApplySymetrieCentrale(piece, centre){
        return Troisième_TransformationPlan.ApplySymetrieCentrale(piece, centre);
    }

    static ApplySymetrieAxiale(piece, pointa, pointb){
        return Troisième_TransformationPlan.ApplySymetrieAxiale(piece, pointa, pointb);
    }

    static GénérerTranslation(){
        return Troisième_TransformationPlan.GénérerTranslation();
    }

    static ApplyTranslation(piece, pointa, pointb){
        return Troisième_TransformationPlan.ApplyTranslation(piece, pointa, pointb);
    }

    static FindNearest(point){
        return Troisième_TransformationPlan.FindNearest(point);
    }

    static DessinerFigure(c){
        return Troisième_TransformationPlan.DessinerFigure(c);
    }
}

// Puissances
class Quatrième_Puissances
{
    // Crée une opération
    static CreateOp() {
        var x1 = Constante.Randint(-30,30);
        while (x1 === 0)
            var x1 = Constante.Randint(-30,30);
        var x0 = Constante.Randint(-30,30);
        while (x0 === 0)
            var x0 = Constante.Randint(-30,30);
        var calc = Constante.Randint(0,2);
        if (calc === 0)
            var sol = x1+x0;
        else if (calc === 1)
            var sol = x1-x0
		else 
			var sol = x1*x0
		var rep = "10^" + sol
        return [Quatrième_Puissances.CreateCalc(calc,x1,x0), rep.toString()];

    }

    // Crée l'écriture de l'opération
    static CreateCalc(a,b,c){
        var txt = "10^";
        txt += b.toString();
        if(a === 0) 
            txt += " * "
        else if (a === 1)
            txt +=" / "
        else if (a === 2)
            txt = "(10^" + b.toString() + ")^"
        if (c < 0)
            txt +="10^("+c.toString()+")";
        else 
            txt += "10^"+c.toString();	
        txt +=" = ";
        return txt;
    }
	
	//Crée un nombre et son écriture scientifique
	static EcritureScientifique () {
		var nb = Constante.Randint(0,500);
		var pow = Constante.Randint(-10,10);
		var x = nb*Math.pow(10,pow);
		var reppow = Math.log(nb)
		if (x < 1)
			var rep = x*Math.pow(10,-(reppow-1)) + "*10^" + reppow;
		else
			var rep = x*Math.pow(10,reppow-1) + "*10^" + reppow;
		return [x,rep.toString()]
	}
}
//#endregion


//#region Cinquième

class Cinquième_NombresRlatifs
{
    
    static GetComparaison()
    {
        var value;
        var type = Constante.Randint(0,3);
        if (type === 0)
        {
            var a = Constante.Randint(-200,200);
            var b = Constante.Randint(-200,200);
            value = [a,b];
        }
        else if (type === 1)
        {
            var a = Constante.Randint(-200,200);
            var b = (a - 1) * -1;
            value = [a,b];
        }
        else if (type === 2)
        {
            var a = Constante.Randint(-200,200);
            var b = (a - 1);
            value = [a / 10, b / 10];
        }
        else if (type === 3)
        {
            var a = Constante.Randint(-200,200);
            var b = (a + 1);
            value = [a / 10, b / 10];
        }

        return value;
    }


    static GetSomme()
    {
        var a = Constante.Randint(-50,50);
        var b = Constante.Randint(-50,50);
        var type = Constante.Randint(0,1);
        var value;
        if (type === 0)
            value = [Cinquième_NombresRlatifs.ConvertNombre(a) + " + " + Cinquième_NombresRlatifs.ConvertNombre(b), Cinquième_NombresRlatifs.GetsResultatsAcceptable(a+b)];
        else if (type === 1)
            value = [Cinquième_NombresRlatifs.ConvertNombre(a/10) + " + " + Cinquième_NombresRlatifs.ConvertNombre(b/10), Cinquième_NombresRlatifs.GetsResultatsAcceptable((a+b)/10)];
        return value;
    }

    static GetDifference()
    {
        var a = Constante.Randint(-50,50);
        var b = Constante.Randint(-50,50);
        var type = Constante.Randint(0,1);
        var value;
        if (type === 0)
            value = [Cinquième_NombresRlatifs.ConvertNombre(a) + " - " + Cinquième_NombresRlatifs.ConvertNombre(b), Cinquième_NombresRlatifs.GetsResultatsAcceptable(a-b)];
        else if (type === 1)
            value = [Cinquième_NombresRlatifs.ConvertNombre(a/10) + " - " + Cinquième_NombresRlatifs.ConvertNombre(b/10), Cinquième_NombresRlatifs.GetsResultatsAcceptable((a-b)/10)];
        return value;
    }

    static GetCalculLigne(nbrterme)
    {
        var a = Constante.Randint(-20,20);
        var txt = Cinquième_NombresRlatifs.ConvertNombre(a);
        var total = a;
        for (var i = 1; i < nbrterme; i++) {
            var cl = Constante.Randint(0,1);
            if (cl === 0)
            {
                a = Constante.Randint(-20,20);
                txt += " + " + Cinquième_NombresRlatifs.ConvertNombre(a);
                total += a;
            }
            else
            {
                a = Constante.Randint(-20,20);
                txt += " - " + Cinquième_NombresRlatifs.ConvertNombre(a);
                total -= a;
            }
        }
        return [txt, Cinquième_NombresRlatifs.GetsResultatsAcceptable(total)];
    }


    static ConvertNombre(valeur)
    {
        var txt = "(" ;
        if (valeur > 0)
            txt += "+";
        txt += valeur + ")";
        return txt;
    }


    static GetsResultatsAcceptable(valeur)
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
}

//#endregion


//#region Sixième

class Sixième_NombresDecimaux
{
    // Crée la décomposition d'un nombre aléatoire entre min et max sous forme de texte
    static CreateDecompBetween(min, max) {
        var array = [2,2,2,2,2556];
        var nombre;
        while (array.length === 1 || array[array.length - 1] > PremierCourt[PremierCourt.length - 1]) {
            nombre = Constante.Randint(min, max);
            array = Sixième_NombresDecimaux.Decomposition(nombre);
        }
        return [nombre.toString(), Sixième_NombresDecimaux.DecompositionToTxt(array)];
    }

    //Crée le nombre décimal et la fraction décimale
    static Exercice() {
        var num1 = Constante.Randint(1,10000)
        while (num1 % 10 ===0)
            num1 = Constante.Randint(1,10000)
        var den1 = Math.pow(10,Constante.Randint(1,5))
        var nb = num1/den1
        var num2 = Constante.Randint(1,10000)
        var den2 = Math.pow(10,Constante.Randint(1,5))
        var rep = num2/den2
        return [nb, num1, den1, num2, den2, rep]
    }

    // Creer un exercice de comparaison
    static GetComparaison()
    {
        var a = Constante.Randint(0,100);
        while (a % 10 == 0)
            a = Constante.Randint(0,100);
        var b = Constante.Randint(0,100) / 10;
        var value;
        var type = Constante.Randint(0,7);
        if (type === 1)
            b = (a + 1) / 10;
        else if (type === 2)
            b = (a - 1) / 10;
        else if (type === 3)
            b = (a * 10 + Constante.Randint(1,9)) / 100;
        else if (type === 4)
            b = (a * 10 - Constante.Randint(1,9)) / 100;
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

    static GetDecompositionDecimal(){
        var num1 = Constante.Randint(1,10000)
        while (num1 % 10 ===0)
            num1 = Constante.Randint(1,10000)
        var den1 = Math.pow(10,Constante.Randint(1,4))
        var nb = num1/den1
        return [nb, num1, den1];
    }

    static NombreAcceptableDecomposition(value, entier = false)
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
}

//#endregion




class HtmlManipulator
{
    static LoadOK = false;
    static Gdocument;

    static SetupExercice(folder){
        let url = new URL("../Exercice.html", document.location.href);
        url.searchParams.append('folder', folder);
        document.location.href = url;
    }

    static GetscriptFolder(){
        let params = (new URL(document.location)).searchParams;
        return params.get('folder');
    }


    static SetupEvaluation(folder)
    {
        let url = new URL("Evaluation.html", document.location.href); //"../Evaluation.html"
        url.searchParams.append('folder', folder);
        document.location.href = url;
    }

    static includeHTML(document) {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) 
        {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("include-html");
            if (file) 
            {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) 
                    {
                        if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                        if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("include-html");
                        HtmlManipulator.includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }
    }

    static includeHTMLInElement(element) {
        var xhttp;
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) 
            {
                if (this.status == 200) {element.innerHTML = this.responseText;}
                if (this.status == 404) {element.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                HtmlManipulator.LoadOK = true;
                HtmlManipulator.includeHTML(document);
            }
        }
        xhttp.open("GET", HtmlManipulator.GetscriptFolder() + "/Content.html", true);
        xhttp.send();
        /* Exit the function: */
        return;
    }


    
}





class Evaluation
{

}