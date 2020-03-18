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

function GénérerRotation(){
    var piece = Randint(0,95);
    var centre = 0;
    var angle = 90 + 180 * Randint(0,1);
    var result = -1;
    var positionpiece = {x:Math.round (positionfigure[piece][0]),y:Math.round (positionfigure[piece][1])};
    while(result < 0)
    {
        centre = Randint(0,24);
        var image = rotate(positionpiece,
                           {x:Math.round (positionpoint[centre][0]),y:Math.round (positionpoint[centre][1])},
                           angle);
        var result = FindNearest(image);
        console.log(result);
    }
    return [piece, angle, centre, result];
}

function GénérerSymétrieCentrale(){
    var piece = Randint(0,95);
    var centre = 0;
    var result = -1;
    var positionpiece = {x:Math.round (positionfigure[piece][0]),y:Math.round (positionfigure[piece][1])};
    while(result < 0)
    {
        centre = Randint(0,24);
        var image = rotate(positionpiece,
                           {x:Math.round (positionpoint[centre][0]),y:Math.round (positionpoint[centre][1])},
                           180);
        var result = FindNearest(image);
        console.log(result);
    }
    return [piece, 180, centre, result];
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
    var positionpiece = 0;
    var pos1 = positionpoint[Math.min(pointa, pointb)];
    var pos2 = positionpoint[Math.max(pointb, pointa)];

    while(result < 0 && count < 5000)
    {
        piece = Randint(0,95);
        positionpiece = positionfigure[piece];
        var image = [];
        if (Math.abs(pos1[0]-pos2[0]) < 5)
            image = [2 * pos1[0] - positionpiece[0], positionpiece[1]];
        if (Math.abs(pos1[1]-pos2[1]) < 5)
            image = [positionpiece[0], 2 * pos1[1] - positionpiece[1]];
        else{
            if (pos1[0] > pos2[0])
                image = [pos1[0] + pos1[1] - positionpiece[1], pos1[1] + pos1[0] - positionpiece[0]];
            else
                image = [pos1[0] - pos1[1] + positionpiece[1], pos1[1] - pos1[0] + positionpiece[0]];
        }
        //console.log(image);
        var result = FindNearest(image);
        count += 1;
    }
    return [piece, pointa, pointb, result];
}

function aligner(a, b){
    if (a == b)
        return false;
    var pos1 = positionpoint[a];
    var pos2 = positionpoint[b];
    if (Math.abs(pos1[0]-pos2[0]) < 5 && Math.abs(pos1[0]-positionpoint[0][0]) > 30 && Math.abs(pos1[0]-positionpoint[3][0]) > 30){
        console.log(pos1);
        return true;
    }
    else if (Math.abs(pos1[1]-pos2[1]) < 5 && Math.abs(pos1[1]-positionpoint[0][1]) > 30 && Math.abs(pos1[1]-positionpoint[21][1]) > 30){
        console.log(pos1);
        return true;
    }
    else if (Math.abs(Math.abs(pos1[0]-pos2[0]) - Math.abs(pos1[1]-pos2[1])) < 5){
        console.log(pos1);
        console.log(pos2);
        return true;
    }
    else
        return false;
}



function GénérerTranslation(){
    var piece = Randint(0,95);
    var pointa = Randint(0,24);
    var pointb = 0;
    var result = -1;
    var positionpiece = {x:Math.round (positionfigure[piece][0]),y:Math.round (positionfigure[piece][1])};
    while(result < 0)
    {
        pointb = Randint(0,24);
        while (pointb == pointa)
            pointb = Randint(0,24);
        var image = [positionpiece.x + positionpoint[pointb][0] - positionpoint[pointa][0],
                     positionpiece.y + positionpoint[pointb][1] - positionpoint[pointa][1]];
        var result = FindNearest(image);
        console.log(result);
    }
    return [piece, pointa, pointb, result];
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





