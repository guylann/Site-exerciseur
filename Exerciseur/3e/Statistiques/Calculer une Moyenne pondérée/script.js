var Titre = "Calculer une moyenne pondérée.";
var Consigne =  "Calculer la moyenne des valeurs ci-dessous en pondérant correctement et en arrondissant au dixième près.<br>ATTENTION : La virgule doit être un point."

var document = HtmlManipulator.Gdocument;
var values;
        var coeffi;

        function Recommencer() {
            var number = Constante.Randint(2,5);
            values = Troisième_Statistiques.CreateListEntier(number, 0,50);
            coeffi = Troisième_Statistiques.CreateListEntier(number, 0,50);
            CreateTableau();
            
            document.getElementById("Resultat").innerHTML = "";
            document.getElementById("TextReponse").innerHTML = "";
            document.getElementById("fname").value = "";
        }

        function Valider() {
            var txt = document.getElementById("fname").value;
            document.getElementById("TextReponse").innerHTML = "";
            if (Troisième_Statistiques.CalculateMoyennePondérée(values, coeffi).toString() == txt) {
                document.getElementById("Resultat").innerHTML = "Bravo c'est la bonne réponse";
            }
            else {
                document.getElementById("Resultat").innerHTML = "C'est loupé pour cette fois, la bonne réponse était :";
                document.getElementById("TextReponse").innerHTML = Troisième_Statistiques.CalculateMoyennePondérée(values, coeffi).toString();
            }
        }

        function Annuler() {}

        function CreateTableau(){
            var parent = document.getElementById("TableValeur");
            parent.innerHTML = '';
            
            var ligne1 = document.createElement("tr");
            var ligne2 = document.createElement("tr");

            var a = document.createElement("td");
            var l = document.createElement("label");
            l.innerHTML = "Valeurs";
            a.appendChild(l);
            ligne1.appendChild(a);

            a = document.createElement("td");
            l = document.createElement("label");
            l.innerHTML = "Effectifs";
            a.appendChild(l);
            ligne2.appendChild(a);

            for(k = 0; k < values.length; k++){
                a = document.createElement("td");
                l = document.createElement("label");
                l.innerHTML = values[k];
                a.appendChild(l);
                ligne1.appendChild(a);
                
                a = document.createElement("td");
                l = document.createElement("label");
                l.innerHTML = coeffi[k];
                a.appendChild(l);
                ligne2.appendChild(a);
            }

            a = document.createElement("td");
            a.setAttribute("class", "tdrouge");
            l = document.createElement("label");
            l.setAttribute("class", "labelrouge");
            l.innerHTML = "Total :";
            a.appendChild(l);
            ligne1.appendChild(a);
                
            a = document.createElement("td");
            a.setAttribute("class", "tdrouge2");
            l = document.createElement("label");
            l.setAttribute("class", "labelrouge");
            l.innerHTML = Troisième_Statistiques.Somme(coeffi);
            a.appendChild(l);
            ligne2.appendChild(a);


            parent.appendChild(ligne1);
            parent.appendChild(ligne2);
        }