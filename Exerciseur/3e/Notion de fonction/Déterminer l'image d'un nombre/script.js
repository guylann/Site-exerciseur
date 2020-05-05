var Titre = "Déterminer l'image d'un nombre.";
var Consigne =  "Donner l'image de la valeur indiquée en vous aidant des informations founies (graphique, expression littérale ou tableau de valeurs)."

var document = HtmlManipulator.Gdocument;

var values;
var typefigure = 0;



        function Valider() {
            document.getElementById("TextReponse").innerHTML = "";
            var test = document.getElementById("reponseUser").value;
            var flo = parseFloat(test);
            if (flo == values.y)
            {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était : ";
                document.getElementById("TextReponse").innerHTML = values.y;
            }

        }

        function Recommencer(){
            var param = {minx: -5 ,maxx: 5 ,pasx: 1 ,miny: -5 ,maxy: 5, pasy: 1 ,
                         subx: true ,subx_nbr: 5 ,suby: true ,suby_nbr: 5 ,
                         orthonorme: true}
            
            var canvas = document.getElementById("myCanvas");
            InitFigure(canvas)  
            Troisième_NotionFonction.CreateRepere(canvas, param);

            Troisième_NotionFonction.RandomiseFunction(param, Constante.Randint(0,3), 1);

            var a = 1;
            var b = 1;
            var c = 1;
            while (a == 1 && b == 1 && c == 1)
            {
                a = Constante.Randint(0,1);
                b = Constante.Randint(0,1);
                c = Constante.Randint(0,1);
            }

            if (a == 0)
                Troisième_NotionFonction.CreateFunction(canvas, param);
            if (b == 0)
                CreateFormule();
            if (c == 0)
                CreateTableau();

            values = Troisième_NotionFonction.GetsValues();
            

            document.getElementById("valeurx").innerHTML = values.x;
        }

        function Annuler(){
        }

        function InitFigure(c){
            var ctx = c.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.translate(0.5, 0.5);
            ctx.clearRect(0, 0, c.width, c.height);

            
            document.getElementById("formule").innerHTML = "";
            document.getElementById("Tableau").innerHTML = "";
            document.getElementById("formulestart").style.display = "none";
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("TextReponse").innerHTML = "";
        }

        function CreateFormule(){
            document.getElementById("formulestart").style.display = "inline-block";
            var parent = document.getElementById("formule");
            parent.innerHTML = '';
            var before = false;
            var coefs = Troisième_NotionFonction.coefs;
            for(var i = 0; i<coefs.length; ++i) {
                var coef = coefs[coefs.length - 1 - i];
                var puissance = coefs.length - 1 - i;

                if (coef == -1){
                    var a = document.createElement("label");
                    a.innerHTML = " - ";
                    parent.appendChild(a);
                    before = true;
                }
                else if (coef == 0)
                {
                    continue;
                }
                else if (coef != 1)
                {
                    var s = document.createElement("label");
                    if (coef > 0 && before)
                        s.innerHTML = " + ";
                    else
                        s.innerHTML = " - ";
                    parent.appendChild(s);

                    const rational = Constante.find_rational( coef, 10000 );
                    if (rational.denominator != 1)
                    {
                        var a = document.createElement("div");
                        a.setAttribute("class", "frac");
                        var b = document.createElement("span");
                        b.innerHTML = Math.abs(rational.numerator);
                        a.appendChild(b);
                        var c = document.createElement("span");
                        c.setAttribute("class", "symbol");
                        c.innerHTML = "/";
                        a.appendChild(c);
                        var d = document.createElement("span");
                        d.setAttribute("class", "bottom");
                        d.innerHTML = rational.denominator;
                        a.appendChild(d);
                        parent.appendChild(a);
                    }
                    else{
                        var a = document.createElement("label");
                        a.innerHTML = Math.abs(rational.numerator);
                        parent.appendChild(a);
                    }
                    before = true;
                }

                if (puissance > 1)
                {
                    var x = document.createElement("label");
                    x.innerHTML = "x<sup>" + puissance + "</sup>";
                    parent.appendChild(x);
                    before = true;
                }
                else if (puissance == 1)
                {
                    var x = document.createElement("label");
                    x.innerHTML = "x";
                    parent.appendChild(x);
                    before = true;
                }
                else if (coef == 1)
                {
                    var x = document.createElement("label");
                    x.innerHTML = " + 1";
                    parent.appendChild(x);
                    before = true;
                }
                else if (coef == -1)
                {
                    var x = document.createElement("label");
                    x.innerHTML = "1";
                    parent.appendChild(x);
                    before = true;
                }


            }
        }

        function CreateTableau(){
            var parent = document.getElementById("Tableau");
            parent.innerHTML = '';
            
            var ligne1 = document.createElement("tr");
            var ligne2 = document.createElement("tr");

            var a = document.createElement("td");
            var l = document.createElement("label");
            l.innerHTML = "x";
            a.appendChild(l);
            ligne1.appendChild(a);

            a = document.createElement("td");
            l = document.createElement("label");
            l.innerHTML = "f(x)";
            a.appendChild(l);
            ligne2.appendChild(a);

            for(var k = 0; k < Troisième_NotionFonction.points.length; k++){
                a = document.createElement("td");
                l = document.createElement("label");
                l.innerHTML = Troisième_NotionFonction.points[k].x;
                a.appendChild(l);
                ligne1.appendChild(a);
                
                a = document.createElement("td");
                l = document.createElement("label");
                l.innerHTML = Troisième_NotionFonction.points[k].y;
                a.appendChild(l);
                ligne2.appendChild(a);
            }


            parent.appendChild(ligne1);
            parent.appendChild(ligne2);
        }

        function Resume(){
            var reponse = ["Question","Reponse", "Ne confonds pas l'image avec l'antécédent.","Correction"];
        
            reponse[0] = "Trouver l'image de " + values.x;
            reponse[1] = document.getElementById("reponseUser").value;
            reponse[3] = values.y;
        
            return reponse
        }