var Titre = "Utiliser la réciproque du théorème de Thalès.";
var Consigne =  "Les points A;B;C et E;D;C sont alignés. Les droites (AE) et (BD) sont-elles-parallèles ?"

var document = HtmlManipulator.Gdocument;

var values;
        var typefigure = 0;

        function Valider() {
            if ((values[1] == 0 && document.getElementById("reponse1").checked) ||
                (values[1] == 1 && document.getElementById("reponse2").checked)) {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois...";
            }
        }

        function Recommencer(){
            values = Troisième_Thalès.CreateReciproque();
            typefigure = Constante.Randint(0,1);
            DessinerFigure(typefigure);
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("reponse1").value = "";
            document.getElementById("reponse2").value = "";
            document.getElementById("reponse1").checked = false;
            document.getElementById("reponse2").checked = false;

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
                if (values[0] != 0)
                {
                    t = Constante.Round(values[2][0] - values[2][1]);
                    ctx.fillText(t.toString() + " cm", margin+50, 20);
                    t = values[2][1];
                    ctx.fillText(t.toString() + " cm", margin+230, 20);
                }
                ctx.rotate(-18 * Math.PI / 180);
                ctx.rotate(-11 * Math.PI / 180);
                if (values[0] != 1)
                {
                    t = values[2][2];
                    ctx.fillText(t.toString() + " cm", margin+170, 240);
                    t = Constante.Round(values[2][3] - values[2][2]);
                    ctx.fillText(t.toString() + " cm", margin-5, 240);
                }
                ctx.rotate(11 * Math.PI / 180);
                ctx.rotate(-90 * Math.PI / 180);
                if (values[0] != 2)
                {
                    t = values[2][4];
                    ctx.fillText(t.toString() + " cm", -h/2 - 20, 45);
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
                if (values[0] != 0)
                {
                    t = values[2][0];
                    ctx.fillText(t.toString() + " cm", margin+75, 20);
                    t = values[2][1];
                    ctx.fillText(t.toString() + " cm", margin+270, 20);
                }
                ctx.rotate(-23 * Math.PI / 180);
                ctx.rotate(-12 * Math.PI / 180);
                if (values[0] != 1)
                {
                    t = values[2][2];
                    ctx.fillText(t.toString() + " cm", margin+220, 165);
                    t = values[2][3];
                    ctx.fillText(t.toString() + " cm", margin+30, 165);
                }
                ctx.rotate(12 * Math.PI / 180);
                ctx.rotate(-90 * Math.PI / 180);
                if (values[0] != 2)
                {
                    t = values[2][4];
                    ctx.fillText(t.toString() + " cm", -h/2 - 10, 45);
                    t = values[2][5];
                    ctx.fillText(t.toString() + " cm", -h/2 - 40, w-margin + 5 - 10);
                }
            }
            
        }

        function Resume(){
            var reponse = ["Question","Reponse", "Tu as pris les bonnes fractions ? Tes longueurs sont bien des côtés de triangles ?","Correction"];
        
            reponse[0] = "(AE) et (BD) sont-elles-parallèles ?";
            if (document.getElementById("reponse1").checked)
                reponse[1] = "Non";
            else if (document.getElementById("reponse2").checked)
                reponse[1] = "Oui";
            if (values[1] == 0)
                reponse[3] = "Non";
            else if (values[1] == 1)
                reponse[3] = "Oui";
        
            return reponse
        }