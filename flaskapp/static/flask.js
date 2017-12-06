function chgAction(param, kMax, lMax, styling, EL="mytable") {
    if (param == 1) {
        // $("#form1").click(function () {
                var arr = new Array();
                for (k = 0; k < kMax; k++) {
                    arr[k] = new Array();
                    for (l = 0; l < lMax; l++) {
                        arr[k][l] = Math.floor(Math.random() * 22000) + 1;
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    // R = T.insertRow(T.rows.length);
                    for (var j = 0; j < arr[i].length; j++) {
                        // C = R.insertCell(j);
                        // C.className = styling;
                        var id = 'value' + '_i' + i + '_j' + j;
                        document.getElementById(id).innerHTML = arr[i][j];
                    }
                }


        //     }
        // )
    } else {
        $(document).ready(function () {
            if (param == 0) {
                // var kMax = 7;
                // var lMax = 12;
                var arr = new Array();
                for (k = 0; k < kMax; k++) {
                    arr[k] = new Array();
                    for (l = 0; l < lMax; l++) {
                        arr[k][l] = Math.floor(Math.random() * 22000) + 1;
                    }
                    var T, R, C;
                    var i, j;
                    $("#mytable").empty(); //modify here to reuse the function without the second if condition. Make it possible to use fun paramter in jquery call

                    T = document.getElementById(EL);
                    for (i = 0; i < arr.length; i++) {
                        R = T.insertRow(T.rows.length);
                        for (j = 0; j < arr[i].length; j++) {
                            C = R.insertCell(j);
                            C.className = styling;
                            C.id = 'value' + '_i' + i + '_j' + j;
                            C.innerHTML = arr[i][j];
                        }
                    }
                }
            } else if (param == 2) {
                var labels = ["Neg", "Pos", "No Drug", "Single", "Combo2", "Combo3", "Empty"]
                var arr = new Array();
                for (k = 0; k < kMax; k++) {
                    arr[k] = new Array();
                    for (l = 0; l < lMax; l++) {
                        if (k == 0) {
                            arr[k][l] = labels[l]
                        } //assigns labels for the first row
                        else {
                            arr[k][l] = ""
                        }
                        //arr[k][l] = Math.floor(Math.random()*10) + 1;
                    }
                    var T, R, C;
                    var i, j;
                    $("#legend").empty(); //modify here to reuse the function without the second if condition. Make it possible to use fun paramter in jquery call

                    T = document.getElementById(EL);
                    for (i = 0; i < arr.length; i++) {
                        R = T.insertRow(T.rows.length);
                        for (j = 0; j < arr[i].length; j++) {
                            C = R.insertCell(j);
                            if (i == 0) {
                            } // custom class for labels
                            else {
                                C.className = styling;
                                C.id = "legend" + '_i' + i + '_j' + j;
                            }
                            //C.className = styling;
                            C.innerHTML = arr[i][j];
                        }
                    }
                }
            }
        })
    }
}


// {#    $('#form1').attr({'action':$('option:selected')});#}
// {#    $('#form1').submit();#}

