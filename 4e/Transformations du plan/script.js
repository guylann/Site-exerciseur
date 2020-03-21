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
    console.log("###################");
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





