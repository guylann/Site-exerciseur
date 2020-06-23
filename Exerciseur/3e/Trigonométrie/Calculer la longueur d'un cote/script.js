var Titre = "Calculer la longueur d'un côté.";
var Consigne =  "Calculer la longueur du côté manquant arrondi au dixième."

var document = HtmlManipulator.Gdocument;



var values;
        var param;

        function Valider() {
            var e = document.getElementById("Trigonometrie_long").value;
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").style.display = "none";
            var erreur = true;
            if (param.find == 0 && values[6].toString() == e){
                erreur = false;
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else if (param.find == 1 && values[4].toString() == e){
                erreur = false;
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            else if (param.find == 2 && values[5].toString() == e){
                erreur = false;
                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
            }
            if (erreur) {
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
                document.getElementById("Correction").style.display = "block";
                
                if (param.find == 0){
                    document.getElementById("CorTrigonometrie_long").innerHTML = values[6];
                }
                else if (param.find == 1){
                    document.getElementById("CorTrigonometrie_long").innerHTML = values[4];
                }
                else if (param.find == 2){
                    document.getElementById("CorTrigonometrie_long").innerHTML = values[5];
                }

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
            param = {longueurmin: 2, longueurmax: 8, arrondi: 10, hide: show,find: cherche, angledroit: true, angle: true, anglepos: Constante.Randint(0,1)};
            values = Troisième_Trigonométrie.CreateTrigonometrie(param, c);
            if (param.find == 0)
                document.getElementById("Trigonometrie_manque").innerHTML = values[0].sommet + values[1].sommet;
            else if(param.find == 1)
                document.getElementById("Trigonometrie_manque").innerHTML = values[0].sommet + values[2].sommet;
            else if(param.find == 2)
                document.getElementById("Trigonometrie_manque").innerHTML = values[2].sommet + values[1].sommet;
            document.getElementById("CorTrigonometrie_manque").innerHTML = document.getElementById("Trigonometrie_manque").innerHTML;
        }

        function Resume(){
            var reponse = ["Question","Reponse", "","Correction"];
        
            reponse[0] = "Calculer la longueur d'un côté.";
            reponse[1] = document.getElementById("Trigonometrie_manque").value +" = ";
            reponse[1] += document.getElementById("Trigonometrie_long").value +" cm";

            reponse[3] = document.getElementById("CorTrigonometrie_manque").value +" = ";
            reponse[3] += document.getElementById("CorTrigonometrie_long").value +" cm";
        
            return reponse
        }