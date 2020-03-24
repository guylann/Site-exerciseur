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

function GenererIdentifier(){
    var type = Randint(0,3);
    var result = [type, [0,0,0,-1]];
    while (result[1][3] < 0){
        if (type == 1)
            result[1] = GénérerRotation();
        if (type == 3)
            result[1] = GénérerSymétrieCentrale();
        if (type == 2)
            result[1] = GénérerSymétrieAxiale();
        if (type == 0)
            result[1] = GénérerTranslation();
    }
    return result;
}

function GenererSymétrie(){
    var type = Randint(0,1);
    var result = [type, [0,0,0,-1]];
    while (result[1][3] < 0){
        if (type == 1)
            result[1] = GénérerSymétrieCentrale();
        if (type == 0)
            result[1] = GénérerSymétrieAxiale();
    }
    return result;
}

function GénérerRotation(){
    var piece = Randint(0,95);
    var centre = 0;
    var angle = 90 + 180 * Randint(0,1);
    var result = -1;
    var count = -1;
    while(result < 0 && count < 5000)
    {
        centre = Randint(0,24);
        var result = ApplyRotation(piece, centre, angle);
        count += 1;
    }
    return [piece, angle, centre, result];
}

function GénérerRotationFull(){
    var piece = Randint(0,95);
    var centre = 0;
    var angle = 90 + 90 * Randint(0,2);
    var result = -1;
    var count = -1;
    while(result < 0 && count < 5000)
    {
        centre = Randint(0,24);
        var result = ApplyRotation(piece, centre, angle);
        count += 1;
    }
    return [piece, angle, centre, result];
}

function ApplyRotation(piece, centre, angle){
    if (centre == -1)
        return -1;
    var positionpiece = {x:Math.round (positionfigure[piece][0]),y:Math.round (positionfigure[piece][1])};
    image = rotate(positionpiece,
        {x:Math.round (positionpoint[centre][0]),y:Math.round (positionpoint[centre][1])},
        angle);
    return FindNearest(image);
}

function GénérerSymétrieCentrale(){
    var piece = Randint(0,95);
    var centre = 0;
    var result = -1;
    var count = -1;
    while(result < 0 && count < 5000)
    {
        centre = Randint(0,24);
        var result = ApplySymetrieCentrale(piece, centre);
        count += 1;
    }
    return [piece, 180, centre, result];
}
function ApplySymetrieCentrale(piece, centre){
    return ApplyRotation(piece, centre, 180)
}

function GénérerSymétrieAxiale(){
    var pointa = Randint(0,24);
    var pointb = Randint(0,24);
    while(!aligner(pointa, pointb))
        pointb = Randint(0,24);
    var piece = 0;
    var result = -1;
    var count = -1;
    while(result < 0 && count < 5000)
    {
        piece = Randint(0,95);
        var result = ApplySymetrieAxiale(piece, pointa, pointb);
        count += 1;
    }
    return [piece, pointa, pointb, result];
}
function ApplySymetrieAxiale(piece, pointa, pointb){
    if (pointa == -1 || pointb == -1)
        return -1;
    var pos1 = positionpoint[Math.min(pointa, pointb)];
    var pos2 = positionpoint[Math.max(pointb, pointa)];
    var positionpiece = positionfigure[piece];
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
    return FindNearest(image);
}


function GénérerTranslation(){
    var piece = Randint(0,95);
    var pointa = Randint(0,24);
    var pointb = 0;
    var result = -1;
    var count = -1;
    while(result < 0 && count < 5000)
    {
        pointb = Randint(0,24);
        while (pointb == pointa)
            pointb = Randint(0,24);
        var result = ApplyTranslation(piece, pointa, pointb);
        count += 1;
    }
    return [piece, pointa, pointb, result];
}
function ApplyTranslation(piece, pointa, pointb){
    if (pointa == -1 || pointb == -1)
        return -1;
    var positionpiece = {x:Math.round (positionfigure[piece][0]),y:Math.round (positionfigure[piece][1])};
    var image = [positionpiece.x + positionpoint[pointb][0] - positionpoint[pointa][0],
                 positionpiece.y + positionpoint[pointb][1] - positionpoint[pointa][1]];
    return FindNearest(image);
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
    return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
}

function FindNearest(point){
    mindistance = 9999;
    selectedpiece = -1;
    for(i = 0; i < positionfigure.length; i++) {
        var distanceab = distance(point,positionfigure[i]);
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

function GénérerHomothétie(){
    var result = CreateTriangleAndCentre();
    
    result.push(Randint(11,20) / 10);
    result.push(Randint(1,9) / 10);
    result.push(Randint(-1,-20) / 10);

    return result;
}

function CreateTriangleAndCentre(){
    var d = Math.PI/180;
    var offset = Randint(0,360);
    var angle = Randint(0,60);
    var distance = Randint(25,50);
    var a = {x: distance * Math.cos(d*(angle + offset)), y: distance * Math.sin(d*(angle + offset))};
    angle = Randint(0,60);
    distance = Randint(25,50);
    var b = {x: distance * Math.cos(d*(angle + offset + 120)), y: distance * Math.sin(d*(angle + offset + 120))};
    angle = Randint(0,60);
    distance = Randint(25,50);
    var c = {x: distance * Math.cos(d*(angle + offset + 240)), y: distance * Math.sin(d*(angle + offset + 240))};

    var center = {x: (b.x+c.x)/2 * 1.5, y: (b.y+c.y)/2 * 1.5};
    return [a,b,c,center];
}


function DrawHomothétie(param, c){
    var ctx = c.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    var w = c.width - 40;
    var h = c.height - 40;
    var points = GetSize(param);
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
    for(i = 0; i < 13; i++) {

        var txt = alphabet[i]
        var color = colors[Math.floor(i/3)];
        if (i == 12){
            txt = "O";
            color = 'white';
        }
        drawPointColor(offw + points[i].x * coef, offh + points[i].y * coef, txt, color, c);
    }

}

function GetSize(param){
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


function DessinerFigure(c){
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
    for(i = 0; i < (nbr*2-1); i++) {
        for(j = 0; j < nbr - ((i+1)%2); j++) {
            x = margin + move * 4 * j;
            y = margin + move * 2 * i;
            if (i % 2 == 1){
                drawPoint(x + move * 1.5,y - move/2, alphabet[id2 - 3], c);
                id2 += 1;
                if (i == (nbr-1)*2 -1){
                    drawPoint(x + move * 1.5,y + figuresize + move/2, alphabet[id2 +3], c);
                }
            }
            else{
                x += 2*move;
                if (i != (nbr-1)*2){
                    drawPoint(x + move * 1.5,y + figuresize + move/2, alphabet[id2 + 4], c);
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
            positionfigure.push([x + move * 1.5, y + move]);
            id += 1;
            ctx.fillText(id.toString(), x + move * 0.8, y + move*1.7);
            positionfigure.push([ x + move * 0.8, y + move*1.7])
            id += 1;
            ctx.fillText(id.toString(), x + move * 2.2, y + move*1.7);
            positionfigure.push([x + move * 2.2, y + move*1.7])
            id += 1;
            ctx.fillText(id.toString(), x + move * 1.5, y + move*2.4);
            positionfigure.push([x + move * 1.5, y + move*2.4])
            id += 1;
        }
    }
}

function drawPoint(x,y, name, c)
{
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
            ctx.fillText(name, x - 1, y - 7);

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


