var Titre = "Utiliser le théorème de Thalès.";
var Consigne =  "Calculer toutes les longueurs manquantes,<u><b>ATTENTION</b></u> la virgule est un point !"

var document = HtmlManipulator.Gdocument;

var values;
        var typefigure = 0;

        function Valider() {
            var txt1 = document.getElementById("reponse1").value;
            var txt2 = document.getElementById("reponse2").value;
            document.getElementById("TextReponse").innerHTML = "";
            var txt;
            var ar = [];
            if (typefigure == 0){
                txt = ["BC = ","DC = ","BD = ","AB = ","ED = ","AE = "];
                ar = [values[2][1],values[2][2],values[2][5],
                Constante.Round(values[2][0] - values[2][1]),
                Constante.Round(values[2][3] - values[2][2]),values[2][4]];
            }
            else
            {
                txt = ["BC = ","DC = ","BD = ","AC = ","EC = ","AE = "];
                ar = [values[2][1],values[2][2],values[2][5],
                      values[2][0],values[2][3],values[2][4]];
            }
            if (ar[values[0]].toString() == txt1 && ar[3 + values[1]].toString() == txt2) {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
                document.getElementById("TextReponse").innerHTML = txt[values[0]] + ar[values[0]] +" ; " + txt[3 + values[1]] + ar[3 + values[1]];
            }
        }

        function Recommencer(){
            typefigure = Constante.Randint(0,1);
            values = Troisième_Thalès.CreateThales(typefigure);
            DessinerFigure(typefigure);
            var tx;
            if (typefigure == 0)
                txt = ["BC = ","DC = ","BD = ","AB = ","ED = ","AE = "];
            else
                txt = ["BC = ","DC = ","BD = ","AC = ","EC = ","AE = "];
            document.getElementById("mesure1").innerHTML = txt[values[0]];
            document.getElementById("mesure2").innerHTML = txt[3 + values[1]];
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("TextReponse").innerHTML = "";
            document.getElementById("reponse1").value = "";
            document.getElementById("reponse2").value = "";

        }

        function Annuler() {}


        function DessinerFigure(forme){
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, c.width, c.height);
            var margin = 50;
            var w = c.width;
            var h = c.height;
            if (forme === 0){
                ctx.beginPath();
                ctx.moveTo(margin, margin);
                ctx.lineTo(w-margin, h * 5/8);
                ctx.lineTo(margin, h-margin);
                ctx.lineTo(margin, margin);
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.lineJoin = "round";
                ctx.closePath();
                ctx.moveTo(margin + (w - 2 * margin)*1/3, margin+(h * 5 / 8-margin)*1/3);
                ctx.lineTo(margin + (w - 2 * margin)*1/3, h * 5 / 8+(h * 3 / 8-margin)*2/3);
                ctx.stroke();

                ctx.fillStyle = "white";
                ctx.font = "20px Arial";
                ctx.fillText("A", 45, 40)
                ctx.fillText("B", margin + (w - 2 * margin)*1/3 - 5, margin+(h * 5 / 8-margin)*1/3 - 10)
                ctx.fillText("C", w-margin + 5, h * 5/8 + 7)
                ctx.fillText("D", margin + (w - 2 * margin)*1/3 - 5, h * 5 / 8+(h * 3 / 8-margin)*2/3 + 22)
                ctx.fillText("E", 45, h-margin + 22)
                ctx.rotate(18 * Math.PI / 180);
                ctx.font = "20px Arial";
                var t;
                if (values[1] == 0)//AB
                    ctx.fillText("? cm", margin+50, 20);
                else{
                    t = values[2][0];
                    ctx.fillText("AC = " + t.toString() + " cm", margin+50, -10);
                }
                if (values[0] == 0)//BC
                    ctx.fillText("? cm", margin+230, 20);
                else{
                    t = values[2][1];
                    ctx.fillText(t.toString() + " cm", margin+230, 20);
                }
                ctx.rotate(-18 * Math.PI / 180);
                ctx.rotate(-11 * Math.PI / 180);
                if (values[0] == 1)//CD
                    ctx.fillText("? cm", margin+170, 240);
                else{
                    t = values[2][2];
                    ctx.fillText(t.toString() + " cm", margin+170, 240);
                }
                if (values[1] == 1)//DE
                    ctx.fillText("? cm", margin-5, 240);
                else{
                    t = values[2][3];
                    ctx.fillText("EC = " + t.toString() + " cm", margin-5, 260);
                }
                ctx.rotate(11 * Math.PI / 180);
                ctx.rotate(-90 * Math.PI / 180);
                if (values[1] == 2)//AE
                    ctx.fillText("? cm", -h/2 - 20, 45);
                else{
                    t = values[2][4];
                    ctx.fillText(t.toString() + " cm", -h/2 - 20, 45);
                }
                if (values[0] == 2)//AE
                    ctx.fillText("? cm", -h/2 - 30, margin + (w - 2 * margin)*1/3 - 5);
                else{
                    t = values[2][5];
                    ctx.fillText(t.toString() + " cm", -h/2 - 30, margin + (w - 2 * margin)*1/3 - 5);
                }
            }
            else{
                ctx.beginPath();
                ctx.moveTo(margin, margin);
                ctx.lineTo(w-margin, h-margin);
                ctx.lineTo(w-margin, margin + (h- 2 *margin) * 2 / 8);
                ctx.lineTo(margin, margin + (h-2 * margin) * 6 / 8);
                ctx.lineTo(margin, margin);
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.lineJoin = "round";
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = "white";
                ctx.font = "20px Arial";
                ctx.fillText("A", 45, 40);
                ctx.fillText("B", w-margin + 5, h-margin + 22);
                ctx.fillText("C", w / 2 - 5, h * 5/8 );
                ctx.fillText("D", w-margin + 5, margin + (h- 2 *margin) * 2 / 8);
                ctx.fillText("E", 45, margin + (h-2 * margin) * 6 / 8 + 22);

                ctx.rotate(23 * Math.PI / 180);
                var t;
                if (values[1] == 0)//AB
                    ctx.fillText("? cm", margin+75, 20);
                else{
                    t = values[2][0];
                    ctx.fillText(t.toString() + " cm", margin+75, 20);
                }
                if (values[0] == 0)//BC
                    ctx.fillText("? cm", margin+270, 20);
                else{
                    t = values[2][1];
                    ctx.fillText(t.toString() + " cm", margin+270, 20);
                }
                ctx.rotate(-23 * Math.PI / 180);
                ctx.rotate(-12 * Math.PI / 180);
                if (values[0] == 1)//CD
                    ctx.fillText("? cm", margin+220, 165);
                else{
                    t = values[2][2];
                    ctx.fillText(t.toString() + " cm", margin+220, 165);
                }
                if (values[1] == 1)//DE
                    ctx.fillText("? cm", margin+30, 165);
                else{
                    t = values[2][3];
                    ctx.fillText(t.toString() + " cm", margin+30, 165);
                }
                ctx.rotate(12 * Math.PI / 180);
                ctx.rotate(-90 * Math.PI / 180);
                if (values[1] == 2)//AE
                    ctx.fillText("? cm", -h/2 - 10, 45);
                else{
                    t = values[2][4];
                    ctx.fillText(t.toString() + " cm", -h/2 - 10, 45);
                }
                if (values[0] == 2)//BD
                    ctx.fillText("? cm", -h/2 - 40, w-margin + 5 - 10);
                else{
                    t = values[2][5];
                    ctx.fillText(t.toString() + " cm", -h/2 - 40, w-margin + 5 - 10);
                }
            }
            
        }


        function Resume(){
            var reponse = ["Question","Reponse", "Tu as pris les bonnes fractions ? Tes longueurs sont bien des côtés de triangles ?","Correction"];
        
            
            if (typefigure == 0){
                txt = ["BC = ","DC = ","BD = ","AB = ","ED = ","AE = "];
                ar = [values[2][1],values[2][2],values[2][5],
                Constante.Round(values[2][0] - values[2][1]),
                Constante.Round(values[2][3] - values[2][2]),values[2][4]];
            }
            else
            {
                txt = ["BC = ","DC = ","BD = ","AC = ","EC = ","AE = "];
                ar = [values[2][1],values[2][2],values[2][5],
                      values[2][0],values[2][3],values[2][4]];
            }

            var txt1 = document.getElementById("reponse1").value;
            var txt2 = document.getElementById("reponse2").value;
            reponse[0] = txt[values[0]] + "? et " + txt[3 + values[1]] +"?";
            reponse[1] = txt[values[0]] + txt1 + " et " + txt[3 + values[1]] + txt2;
            reponse[3] = txt[values[0]] + ar[values[0]] +" ; " + txt[3 + values[1]] + ar[3 + values[1]];
        
            return reponse
        }