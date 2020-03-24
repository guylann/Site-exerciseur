var Premier = [2, 3, 5, 7, 11, 13, 17, 19];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var positionfigure = [];
var positionpoint = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0]];



function Randint(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


function aligner(a, b){
    if (a == b)
        return false;
    var pos1 = positionpoint[a];
    var pos2 = positionpoint[b];
    if (Math.abs(pos1[0]-pos2[0]) < 5 && Math.abs(pos1[0]-positionpoint[0][0]) > 30 && Math.abs(pos1[0]-positionpoint[3][0]) > 30){
        return true;
    }
    else if (Math.abs(pos1[1]-pos2[1]) < 5 && Math.abs(pos1[1]-positionpoint[0][1]) > 30 && Math.abs(pos1[1]-positionpoint[21][1]) > 30){
        return true;
    }
    else if (Math.abs(Math.abs(pos1[0]-pos2[0]) - Math.abs(pos1[1]-pos2[1])) < 5){
        return true;
    }
    else
        return false;
}

function alignerThree(a, b, c){
    if (a == b)
        return true;
    if (a == c)
        return true;
    if (c == b)
        return true;
    var pos1 = positionpoint[a];
    var pos2 = positionpoint[b];
    var pos3 = positionpoint[c];
    var seg1 = distance(pos1, pos2);
    var seg2 = distance(pos1, pos3);
    var seg3 = distance(pos3, pos2);
    if (Math.abs(seg1 - (seg2+seg3)) < 2)
        return true;
    if (Math.abs(seg2 - (seg1+seg3)) < 2)
        return true;
    if (Math.abs(seg3 - (seg2+seg1)) < 2)
        return true;
    return false;
}

function distance(a,b)
{
    return Math.sqrt((a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y));
}



function CreateTriangle(){
    var size = 240
    var d = Math.PI/180;
    var angle = 10 + Randint(10,70);
    var sommets = ["A","B","C"]
    var i = Randint(0,2);
    var a = {x: 0, y: size / 2,sommet: sommets[i]};
    var b = {x: size, y: size / 2,sommet: sommets[(i+1) % 3]};
    var c = {x: size * Math.cos(d * angle) * Math.cos(d * angle) , y: size / 2 - size * Math.cos(d * angle) * Math.sin(d * angle),sommet: sommets[(i+2) % 3]};
    return [a,b,c, angle];
}


function CreatePythagore(param, c){
    var d = Math.PI/180;
    var triangle = CreateTriangle();

    var angle = triangle[3];
    var cotemin = Randint(param.longueurmin * param.arrondi, param.longueurmax * param.arrondi) / param.arrondi;
    var cotemin2 = Math.round(Math.tan(d * angle) * cotemin * param.arrondi) / param.arrondi;
    var cotemax = Math.round(cotemin / Math.cos(d * angle) * param.arrondi) / param.arrondi;

    triangle.push(cotemin);
    triangle.push(cotemin2);
    triangle.push(cotemax);
    triangle.push(true);

    Drawtriangle(param, triangle, c);

    return triangle;
}

function CreateFauxPythagore(param, c){
    var d = Math.PI/180;
    var triangle = CreateTriangle();

    var angle = triangle[3];
    var change = Randint(0,2);
    var cotemin = Randint(param.longueurmin * param.arrondi, param.longueurmax * param.arrondi) / param.arrondi;
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

    Drawtriangle(param, triangle, c);

    return triangle;
}

function Drawtriangle(param, triangle, c){
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

    var vector1 = {x: (triangle[0].x - triangle[2].x)/distance(triangle[0],triangle[2]) * 10,
                   y: (triangle[0].y - triangle[2].y)/distance(triangle[0],triangle[2]) * 10};
    var vector2 = {x: (triangle[1].x - triangle[2].x)/distance(triangle[1],triangle[2]) * 10,
                   y: (triangle[1].y - triangle[2].y)/distance(triangle[1],triangle[2]) * 10};


    if (param.angledroit)
    {
        ctx.beginPath();
        ctx.moveTo(offw + triangle[2].x + vector1.x, offh + triangle[2].y + vector1.y);
        ctx.lineTo(offw + triangle[2].x + vector1.x + vector2.x, offh + triangle[2].y + vector1.y + vector2.y);
        ctx.lineTo(offw + triangle[2].x + vector2.x, offh + triangle[2].y + vector2.y);
        ctx.stroke();
    }

    //ctx.beginPath();
    //ctx.arc(offw + triangle[0].x, offw + triangle[0].y, 20, 0, -Math.PI/180 * triangle[3], true);
    //ctx.stroke();


    drawPoint(offw + triangle[0].x, offh + triangle[0].y, triangle[0].sommet, c,7, 90);
    drawPoint(offw + triangle[1].x, offh + triangle[1].y, triangle[1].sommet, c,7, 270);
    drawPoint(offw + triangle[2].x, offh + triangle[2].y, triangle[2].sommet, c,7, 0);

    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.textAlign="center";
    if (param.hide != 0)
        ctx.fillText(triangle[6] + "cm", 150, 155);
    ctx.rotate(-triangle[3] * Math.PI / 180);
    var vectormiddle = {x: (triangle[2].x + triangle[0].x)/2 + 15, y: (triangle[2].y + triangle[0].y)/2 + 15};
    var newvector = rotate(vectormiddle,{x: 0, y: 0}, -triangle[3]);
    if (param.hide != 1)
        ctx.fillText(triangle[4] + "cm", newvector.x, newvector.y);
    
    var angle1 = (90-triangle[3])
    vectormiddle = {x: (triangle[1].x + triangle[2].x)/2 + 20, y: (triangle[1].y + triangle[2].y)/2 + 10};
    newvector = rotate(vectormiddle,{x: 0, y: 0}, angle1);
    ctx.rotate(+triangle[3] * Math.PI / 180);
    ctx.rotate(angle1 * Math.PI / 180);
    if (param.hide != 2)
        ctx.fillText(triangle[5] + "cm", newvector.x, newvector.y);

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
    return {x: Math.round (x),y: Math.round (y)};
}

function drawPoint(x,y, name, c,distance = 7, angle = 0)
{
    var d = -Math.PI/180;

    var ctx = c.getContext("2d");
    positionpoint[alphabet.indexOf(name)] = [x,y];

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

function drawPointColor(x,y, name, color, c)
{
    var ctx = c.getContext("2d");
    positionpoint[alphabet.indexOf(name)] = [x,y];

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


