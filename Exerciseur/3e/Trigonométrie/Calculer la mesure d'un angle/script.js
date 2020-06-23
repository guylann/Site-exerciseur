var Titre = "Calculer la mesure de l'angle.";
var Consigne =  "Calculer la mesure de l'angle manquant arrondi au dixième prés."

var document = HtmlManipulator.Gdocument;



var values;
        var param;

        function Valider() {
            var e = document.getElementById("Trigonometrie_long").value;
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").style.display = "none";
            if (e == values[3]){
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else 
            {
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
                document.getElementById("Correction").style.display = "block";
                document.getElementById("CorTrigonometrie_long").innerHTML = values[3];
            }
        }

        function Annuler() {
            document.getElementById("Trigonometrie_long").value = "";
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").style.display = "none";
        }


        function Recommencer() {
            Annuler();
            var c = document.getElementById("myCanvas");
            let show = Constante.Randint(0,2);
            let cherche = show;
            while(cherche == show)
                cherche = Constante.Randint(0,2)
            param = {longueurmin: 2, longueurmax: 8, arrondi: 10, hide: show,find: cherche, angledroit: true, angle: false, anglepos: Constante.Randint(0,1)};
            values = Troisième_Trigonométrie.CreateTrigonometrie(param, c);
            if (param.anglepos == 0)
                document.getElementById("Trigonometrie_manque").innerHTML = values[2].sommet + values[0].sommet + values[1].sommet;
            else if(param.anglepos == 1)
                document.getElementById("Trigonometrie_manque").innerHTML = values[0].sommet + values[1].sommet + values[2].sommet;
            document.getElementById("CorTrigonometrie_manque").innerHTML = document.getElementById("Trigonometrie_manque").innerHTML;
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = "Calculer la longueur d'un côté.";
            reponse[1] = document.getElementById("Trigonometrie_manque").value +" = ";
            reponse[1] += document.getElementById("Trigonometrie_long").value +" °";

            reponse[3] = document.getElementById("CorTrigonometrie_manque").value +" = ";
            reponse[3] += document.getElementById("CorTrigonometrie_long").value +" °";
        
            return reponse
        }