var Titre = "Utiliser le théorème de Pythagore.";
var Consigne =  "Compléter la rédaction du théorème de Pythagore ci-dessous en arrondissant les résultats au dixième si nécessaire. ATTENTION : Les points doivent être en majuscules."

var document = HtmlManipulator.Gdocument;

var values;
        var param;

        function Valider() {
            var a = document.getElementById("Pythagore_point").value;
            var b = document.getElementById("Pythagore_hyp").value;
            var b2 = document.getElementById("Pythagore_hyp2").value;
            var c = document.getElementById("Pythagore_cot1").value;
            var d = document.getElementById("Pythagore_cot2").value;
            var e = document.getElementById("Pythagore_long").value;
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").style.display = "none";
            var erreur = true;
            if (values[2].sommet == a)
            {
                if (values[0].sommet + values[1].sommet == b || values[1].sommet + values[0].sommet == b )
                {
                    if (values[0].sommet + values[1].sommet == b2 || values[1].sommet + values[0].sommet == b2 )
                    {
                        var posibilities = [];
                        posibilities.push(values[0].sommet + values[2].sommet + "+" + values[2].sommet + values[1].sommet);
                        posibilities.push(values[2].sommet + values[0].sommet + "+" + values[2].sommet + values[1].sommet);
                        posibilities.push(values[0].sommet + values[2].sommet + "+" + values[1].sommet + values[2].sommet);
                        posibilities.push(values[2].sommet + values[0].sommet + "+" + values[1].sommet + values[2].sommet);
                        if (posibilities.includes(c + "+" + d))
                        {
                            if (param.hide == 0 && values[6].toString() == e){
                                erreur = false;
                                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
                            }
                            else if (param.hide == 1 && values[4].toString() == e){
                                erreur = false;
                                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
                            }
                            else if (param.hide == 2 && values[5].toString() == e){
                                erreur = false;
                                document.getElementById("correctionGlobal").innerHTML = "Bravo c'est correct";
                            }
                        }
                    }
                }
            }
            if (erreur) {
                document.getElementById("correctionGlobal").innerHTML = "Oups, ce n'est pas la réponse attendue ...";
                document.getElementById("Correction").style.display = "block";
                document.getElementById("CorPythagore_point").innerHTML = values[2].sommet;
                document.getElementById("CorPythagore_hyp").innerHTML = values[0].sommet + values[1].sommet;
                document.getElementById("CorPythagore_hyp2").innerHTML = values[0].sommet + values[1].sommet;
                document.getElementById("CorPythagore_cot1").innerHTML = values[0].sommet + values[2].sommet;
                document.getElementById("CorPythagore_cot2").innerHTML = values[2].sommet + values[1].sommet;
                
                if (param.hide == 0){
                    document.getElementById("CorPythagore_long").innerHTML = values[6];
                }
                else if (param.hide == 1){
                    document.getElementById("CorPythagore_long").innerHTML = values[4];
                }
                else if (param.hide == 2){
                    document.getElementById("CorPythagore_long").innerHTML = values[5];
                }

            }
        }

        function Annuler() {
            document.getElementById("Pythagore_point").value = "";
            document.getElementById("Pythagore_hyp").value = "";
            document.getElementById("Pythagore_hyp2").value = "";
            document.getElementById("Pythagore_cot1").value = "";
            document.getElementById("Pythagore_cot2").value = "";
            document.getElementById("Pythagore_long").value = "";
            document.getElementById("correctionGlobal").innerHTML = "";
            document.getElementById("Correction").style.display = "none";
        }


        function Recommencer() {
            Annuler();
            var c = document.getElementById("myCanvas");
            param = {longueurmin: 2, longueurmax: 8, arrondi: 10, hide: Constante.Randint(0,2), angledroit: true};
            values = Quatrième_Pythagore.CreatePythagore(param, c);
            if (param.hide == 0)
                document.getElementById("Pythagore_manque").innerHTML = values[0].sommet + values[1].sommet;
            else if(param.hide == 1)
                document.getElementById("Pythagore_manque").innerHTML = values[0].sommet + values[2].sommet;
            else if(param.hide == 2)
                document.getElementById("Pythagore_manque").innerHTML = values[2].sommet + values[1].sommet;
            document.getElementById("CorPythagore_manque").innerHTML = document.getElementById("Pythagore_manque").innerHTML;
        }