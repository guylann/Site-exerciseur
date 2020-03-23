var Premier = [2, 3, 5, 7, 11, 13, 17, 19];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var off_w = 0;
var off_h = 0;
var w = 0;
var h = 0;
var pasx = 0;
var pasy = 0;

var f_a = 1;
var f_b = 0;
var f_c = 0;
var f_d = 0;
var f_e = 0;

var points = [];
var coefs = [];
var l;

function GetFunctionToString(){
    var array = [];

    for(var i = 0; i<coefs.length; ++i) {
        array.push(CreateMultipleX(coefs[coefs.length - 1 - i], coefs.length - 1 - i));
    }

    return AssemblerMultipleX(array);
}

function CreateMultipleX(coef, puissance) {

    var txt = "";
    if (coef === -1)
        txt += "-";
    else if (coef === 0)
        return "";
    else if (coef !== 1){
        const rational = find_rational( coef, 10000 );
        if (rational.numerator == 0)
            return "";
        txt += rational.numerator + " / " + rational.denominator;
    }
    if (puissance > 2)
        return txt + "x^" + puissance.toString();
    else if (puissance === 2)
        return txt + "x²";
    else if (puissance === 1)
        return txt + "x";
    else{
        const rational = find_rational( coef, 10000 );
        return rational.numerator + " / " + rational.denominator;
    }
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



function GetsValues(){
    return points[Randint(0, points.length-1)];
}


function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function distance(a,b)
{
    return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
}

function GetValue(x)
{
    result = 0;
    for(var i=0; i<coefs.length; ++i) {
        result += coefs[i] * Math.pow(x,i);
    }

    return result;
}
function GetCoef(x,i)
{
    var result = points[i][1];
    for(k = 1; k < points.length; k++){
        if (k != i)
            result *= (x-points[k][0]) / (points[i][0]-points[k][0])
    }
    return result;
}

function RandomiseFunction(param, nbr,  pas)
{
    points = [];
    var point = {x: param.minx, y: Randint(param.miny, param.maxy)};
    points.push(point);
    var point = {x: param.maxx, y: Randint(param.miny, param.maxy)};
    points.push(point);

    var position = []
    console.log("########");

    var move = (param.maxx - param.minx)/pas;
    for(i =0; i < nbr; i++){
        var posx = Randint(1, move-1);
        while (position.includes(posx))
        {
            posx = Randint(1, move-1);
        }
        var point = {x: param.minx + posx * pas, y: Randint(param.miny + 1, param.maxy - 1)};
        points.push(point);
        position.push(posx);
    }

    points.sort(function(a,b) {
        if( a.x === b.x) return a.y-b.y;
        return a.x-b.x;
    });

    coefs = Lagrange(points);

}

function CreateFunction(canvas, param)
{
    var pas = (param.maxx - param.minx) / 1000;
    var coefx = (w - 40) / (param.maxx - param.minx);
    var coefy = (h - 40) / (param.maxy - param.miny);
    
    var x = param.minx;
    var y = GetValue(x);
    var posx = off_w + 20 + coefx * (x - param.minx);
    var posy = off_h + h - 20 - coefy * (y - param.miny);

    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';
    ctx.lineJoint = 'round';
    ctx.lineWidth = 1.0;

    ctx.beginPath();
    ctx.moveTo(posx,posy);

    for(k = 1; k < 1001; k++) 
    {
        x = param.minx + pas * k;
        y = GetValue(x);
        posx = off_w + 20 + coefx * (x - param.minx);
        posy = off_h + h - 20 - coefy * (y - param.miny);
        ctx.lineTo(posx,posy);

    }
    ctx.stroke();


}



function CreateRepere(canvas, param){
    w = canvas.width;
    h = canvas.height;
    if (param.orthonorme)
    {
        var lx = (param.maxx - param.minx);
        var ly = (param.maxy - param.miny);
        if (lx > ly){
            h = Math.round(h * ly/lx);
            off_h = Math.round((canvas.height - h) / 2);
        }
        else if (lx < ly){
            w = Math.round(w * lx/ly);
            off_w = Math.round((canvas.width - w) / 2);
        }
    }
    pasx = (w - 40) / ((param.maxx - param.minx) / param.pasx);
    pasy = (h - 40) / ((param.maxy - param.miny) / param.pasy);
    var ctx = canvas.getContext("2d");
    
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
                for(k = 0; k < param.subx_nbr; k++) 
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
function rotate (M, O, angle) {
    var xM, yM, x, y;
    angle *= Math.PI / 180;
    xM = M.x - O.x;
    yM = M.y - O.y;
    x = xM * Math.cos (angle) + yM * Math.sin (angle) + O.x;
    y = - xM * Math.sin (angle) + yM * Math.cos (angle) + O.y;
    return ([Math.round (x), Math.round (y)]);
}


function find_rational( value, maxdenom ) {
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




function horner(array, x_scale, y_scale) {
    function recur(x, i, array) {
       if (i == 0) {
          return array[0];
       } else {
          return array[i] + x*recur(x, --i, array);
       }
    }
    return function(x) {
       return recur(x*x_scale, array.length-1, array)*y_scale;
    };
 }
 
 // initialize array
 function zeros(n) {
    var array = new Array(n);
    for (var i=n; i--;) {
      array[i] = 0;
    }
    return array;
 }
 
 function denominator(i, points) {
    var result = 1;
    var x_i = points[i].x;
    for (var j=points.length; j--;) {
       if (i != j) {
         result *= x_i - points[j].x;
       }
    }
    return result;
 }
 
 // calculate coefficients for Li polynomial
 function interpolation_polynomial(i, points) {
    var coefficients = zeros(points.length);
    coefficients[0] = 1/denominator(i,points);
    var new_coefficients;
 
    for (var k = 0; k<points.length; k++) {
       if (k == i) {
         continue;
       }
       new_coefficients = zeros(points.length);
        for (var j= (k < i) ? k+1 : k; j--;) {
          new_coefficients[j+1] += coefficients[j];
          new_coefficients[j] -= points[k].x*coefficients[j];
       }   
       coefficients = new_coefficients;
    }
    return coefficients;
 }
 
 // calculate coefficients of polynomial
 function Lagrange(points) {
    var polynomial = zeros(points.length);
    var coefficients;
    for (var i=0; i<points.length; ++i) {
      coefficients = interpolation_polynomial(i, points);
      for (var k=0; k<points.length; ++k) {
         polynomial[k] += points[i].y*coefficients[k];
      }
    }
    return polynomial;
 }