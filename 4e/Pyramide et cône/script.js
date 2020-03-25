var Premier = [2, 3, 5, 7, 11, 13, 17, 19];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var positionfigure = [];
var positionpoint = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                     [0,0],[0,0],[0,0],[0,0],[0,0]];

var maxheight = 0;

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
    return {x:Math.round (x),y: Math.round (y)};
}

function CreatePolygoneRegulier(nbrpoint, w, h){
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

function CreateRectangle(w,h){
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
function CreateCarre(w){
    return CreateRectangle(w,w);
}

function CreateTriangle(c,h){
    var points = [];
    var point = {x: 0,y: 0};
    points.push(point);
    point = {x: 0,y: c};
    points.push(point);
    point = {x: -h,y: Randint(Math.floor(-c/4),Math.floor(c*1.25))};
    points.push(point);
    return points;
}

function CreateTriangleRectangle(c,h){
    var points = [];
    var point = {x: 0,y: 0};
    points.push(point);
    point = {x: 0,y: c};
    points.push(point);
    point = {x: -h,y: c};
    points.push(point);
    return points;
}

function CreateFigure(longmin, longmax, arrondie)
{
    var volume = 0;
    var hauteur = Randint(longmin * 2 * arrondie, longmax * 2 / 3 * arrondie) / arrondie;
    var sommet = {x: Randint(longmin * arrondie, longmax * arrondie) / arrondie * 100,
                  y: Randint(longmin * arrondie, longmax * arrondie) / arrondie * 100,
                  z: hauteur * 100};
    var basePoints = [];
    var longueurs = [];
    var figure = Randint(0,4);
    if (figure == 0){
        let w = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        let h = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        sommet.x = Randint(-25, w * 125)
        sommet.y = Randint(-25, h * 125)
        volume = Math.round(w*h*hauteur/3 * 10)/10;
        longueurs = [w,h,w,h];
        basePoints = CreateRectangle(w * 100,h * 100);
    }
    else if (figure == 1){
        let w = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        sommet.x = Randint(-25, w * 125)
        sommet.y = Randint(-25, w * 125)
        volume = Math.round(w*w*hauteur/3 * 10)/10;
        longueurs = [w,w,w,w];
        basePoints = CreateCarre(w * 100);
    }
    else if (figure == 2){
        let w = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        let h = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        sommet.x = Randint(-25, w * 125)
        sommet.y = Randint(-25, h * 125)
        volume = Math.round(w*h*hauteur/6 * 10)/10;
        basePoints = CreateTriangle(w * 100, h * 100);
        let w1 = Math.round(distance(basePoints[1], basePoints[2])/100 * arrondie) / arrondie;
        let w2 = Math.round(distance(basePoints[0], basePoints[2])/100 * arrondie) / arrondie;
        longueurs = [w,w1,w2,h];
    }
    else if (figure == 3){
        let w = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        let h = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        sommet.x = Randint(-25, w * 125)
        sommet.y = Randint(-25, h * 125)
        volume = Math.round(w*h*hauteur/6 * 10)/10;
        basePoints = CreateTriangleRectangle(w * 100, h * 100);
        let w2 = Math.round(distance(basePoints[0], basePoints[2])/100 * arrondie) / arrondie;
        longueurs = [w,h,w2];
    }
    else if (figure == 4){
        hauteur = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        let w = Randint(longmin * arrondie, longmax * arrondie) / arrondie;
        volume = Math.round(Math.PI*w*w*hauteur/3 * 10)/10;
        sommet = {x: w * 100, y: w * 100, z: hauteur * 100};
        basePoints = CreatePolygoneRegulier(100,w * 200, w * 200);
        console.log(hauteur);
        console.log(w);
        longueurs = [w];
    }
    return {sommet: sommet, basePoints: basePoints, longueurs: longueurs,hauteur: hauteur,type: figure, volume: volume};
}



function DrawPyramide(param, c)
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
    var values = AdaptForme(points, w, param.coefbase, angle);
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

    var barycentre = GetBarycentre(points);
    
    drawPoint(offx + Sommet.x, offy + Sommet.y, "S", c, 10, 270, 0);

    var baseColor = "#FFFF55"

    ctx.strokeStyle = '#FF5555';
    ctx.beginPath();
    ctx.setLineDash([5,5]);
    ctx.moveTo(offx + Sommet.x,offy + Sommet.y);
    ctx.lineTo(offx + Sommet.x,offy + oldy);
    ctx.stroke();

    drawPointColor(offx + Sommet.x,offy + oldy, "H",'#FF5555', c, 10, -45, 5);
    let middle = {x: offx + Sommet.x, y: offy + (Sommet.y + oldy)/2}
    drawTxt(middle,param.hauteur + "cm",c, 90,15, "#FF5555");

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
        if (GetAngle(Temp, Sommet) > GetAngle(Start, Sommet) || param.coefbase == 1 || Start.y < Sommet.y || Temp.y < Sommet.y)
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
                    let ang = GetAngle(barycentre, Start) * 180 / Math.PI;
                    drawPoint(offx + Start.x, offy + Start.y, alphabet[i % points.length], c, 10, ang, 0)
                    drawtext.push(Start);
                }
                if (!drawtext.includes(Temp)){
                    let ang = GetAngle(barycentre, Temp) * 180 / Math.PI;
                    drawPoint(offx + Temp.x, offy + Temp.y, alphabet[(i+1) % points.length], c, 10, ang, 0)
                    drawtext.push(Temp);
                }
                let middle = {x: offx + (Start.x + Temp.x)/2, y: offy + (Start.y + Temp.y)/2}
                drawTxt(middle,longueurs[(i) % points.length] + "cm",c,GetAngle(Temp, Start) * 180 / Math.PI,15);
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
        drawTxt(middle,longueurs[0] + "cm",c,GetAngle({x: Sommet.x, y: oldy}, points[0]) * 180 / Math.PI,15, baseColor);
    }

}

function AdaptForme(points, w, coefh, angle){
    var newpoints = []
    for(var i = 0; i < points.length; i++){
        newpoints.push(rotate(points[i], {x: 0, y: 0}, angle));
    }
    var barycentre = GetBarycentre(newpoints);
    var distancemax = -9999999;
    for(var i = 0; i < newpoints.length; i++){
        if (distance(newpoints[i], barycentre) > distancemax){ distancemax = distance(newpoints[i], barycentre);}
    }
    var offsetx = distancemax - barycentre.x;
    var offsety = distancemax - barycentre.y;
    var coefw = w / (distancemax*2);
    for(var i = 0; i < newpoints.length; i++){
        newpoints[i].x = (offsetx + newpoints[i].x) * coefw;
        newpoints[i].y = (offsety + newpoints[i].y) * coefw * coefh;
    }
    return [newpoints, (distancemax * 2) * coefw * coefh, coefw];
}

function GetBarycentre(ArrayPoint){
    var somx = 0;
    var somy = 0;
    for(var i = 0; i < ArrayPoint.length; i++){
        somx += ArrayPoint[i].x;
        somy += ArrayPoint[i].y;
    }
    return {x: somx / ArrayPoint.length,y: somy / ArrayPoint.length};
}


function GetAngle(from, to)
{
    var x0, x1, y0, y1;
    x0 = from.x;
    y0 = from.y;
    x1 = to.x;
    y1 = to.y;
    return (Math.atan2(y1 - y0, x1 - x0) + Math.PI * 2.0) % (Math.PI * 2.0);
}


function drawTxt(point, txt, c, angle = 0, offy = 0, color = "white"){
    var d = Math.PI/180;
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = "14px Arial";
    ctx.textAlign="center";
    ctx.rotate(angle * d);
    var newposition = rotate(point, {x: 0, y: 0}, angle);
    ctx.fillText(txt.toString().replace(".",","), newposition.x, newposition.y + offy);
    ctx.rotate(-angle * d);
}

function drawPoint(x,y, name, c,distance = 7, angle = 0, pointsize = 4)
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

function drawPointColor(x,y, name, color, c, distance = 7, angle = 0, pointsize = 4)
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


