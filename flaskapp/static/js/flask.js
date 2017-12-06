'use strict'; //we need type safety, since it is JS after all.

function chgAction(param, rows, columns, styling, EL="mytable") {
    if (param == 1) { //for repopulation of plate on selection of different cell types
                var arr = new Array();
                for (var k = 0; k < rows; k++) { //constructs 2D array with random numbers.
                    arr[k] = new Array();
                    for (var l = 0; l < columns; l++) {
                        arr[k][l] = Math.floor(Math.random() * 22000) + 1; //This is place holder for actual data processing / results.
                    }
                }
                for (var i = 0; i < arr.length; i++) { //populates the HTML element with newly constructed values
                    for (var j = 0; j < arr[i].length; j++) {
                        var id = 'value' + '_row' + i + '_column' + j;
                        document.getElementById(id).innerHTML = arr[i][j];
                    }
                }
    } else { // initial draw option
        $(document).ready(function () { //perform only after the stuff is dl'ed
            if (param === 0) { //initial table draw
                var arr = new Array();
                for (var k = 0; k < rows; k++) {
                    arr[k] = new Array();
                    for (l = 0; l < columns; l++) {
                        arr[k][l] = Math.floor(Math.random() * 22000) + 1;
                    }
                    var T, R, C;
                    var i, j;
                    $("#mytable").empty(); //necessary for initial draw

                    T = document.getElementById(EL);
                    for (var i = 0; i < arr.length; i++) {
                        R = T.insertRow(T.rows.length);
                        for (j = 0; j < arr[i].length; j++) {
                            C = R.insertCell(j);
                            switch (true) { //i for rows, j for columns. Really annoying CSS styling with cases. Need to work on it
                                case i === 0: //first row custom
                                    if (j === 11 ) {C.className = "nodrug" + "_" + styling}
                                        else if (j > 3 && j < 9 ) {C.className = "empty" + "_" + styling} //assuming that unseen fields are empty
                                        else if (j === 0 ) {C.className = "positive" + "_" + styling}
                                        else if (j === 2 || j === 3 || j === 9 || j === 10 ) {C.className = "combo2" + "_" + styling}
                                            else {C.className = "single" + "_" + styling}
                                    break;
                                case i === 1 && (j === 0 || j > 7): //second row custom
                                    if (j === 0 ) {C.className = "positive" + "_" + styling}
                                        else {C.className = "combo2" + "_" + styling}
                                    break;
                                case i === 2 && (j === 0 || j > 7): //third row custom
                                    if (j === 9 || j === 10) {C.className = "combo3" + "_" + styling}
                                        else {C.className = "combo2" + "_" + styling}
                                    break;
                                case i === 3: // 4th row custom
                                    C.className = "negative" + "_" + styling;
                                    break;
                                case i === 4 && (j === 0 || j > 7): //5th row custom
                                    if (j === 8) {C.className = "combo3" + "_" + styling}
                                        else {C.className = "combo2" + "_" + styling}
                                    break;
                                case i === 5: //6th row custom
                                    if (j === 0 || j === 10) {C.className = "combo2" + "_" + styling}
                                        else if (j === 8 || j === 9 || j === 11) {C.className = "combo3" + "_" + styling}
                                            else {C.className = "single" + "_" + styling}
                                    break;
                                case i === 6 && (j === 0 || j > 7): //7th row custom
                                    C.className = "combo2" + "_" + styling;
                                    break;
                                default:
                                    C.className = "single"+"_"+styling
                            }
                            C.id = 'value' + '_row' + i + '_column' + j;
                            C.innerHTML = arr[i][j];
                        }
                    }
                }
            } else if (param === 2) { //initial legend draw
                var labels = ["NegControl", "PosControl", "No Drug", "Single", "Combo2", "Combo3", "Empty"]
                var arr = new Array();
                for (k = 0; k < rows; k++) {
                    arr[k] = new Array();
                    for (l = 0; l < columns; l++) {
                        if (k == 0) {//assigns labels for the first row of legend
                            arr[k][l] = labels[l]
                        }
                        else { //draw little pretty circles for legend. No values needed. Using :before tag in styles.
                            arr[k][l] = ""
                        }
                    }
                    var T, R, C;
                    var i, j;
                    $("#legend").empty(); //necessary for initial draw
                    T = document.getElementById(EL);
                    for (i = 0; i < arr.length; i++) {
                        R = T.insertRow(T.rows.length);
                        for (j = 0; j < arr[i].length; j++) {
                            C = R.insertCell(j);
                            if (i === 0) {
                            } // custom class for labels. placeholder. in case
                            else {
                                C.className = styling;
                                C.id = "legend" + '_row' + i + '_column' + j;
                            }
                            C.innerHTML = arr[i][j];
                        }
                    }
                }
            }
        })
    }
}
function downloadCSV(csv, filename) { //enable download
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function exportTableToCSV(filename) {
    var counts = $("#raw_counts :selected").text(); //gets current option from first dropdown
    var value = $("#recipient :selected").text(); //gets current function from the second dropdown. Appends them to the first cells of csv
    var csv = [];
    var rows = document.querySelectorAll("#mytable tbody tr"); //selects all elements of id "mytable" of tbody and tr type
    var col = rows[0].querySelectorAll("td, th").length; //get the number of columns
    var array1 = Array.apply(null, Array(col-2)).map(function(){return ","}); // get number of rows-2, since we are using two values from dropdowns.
    csv.push(counts);
    csv.push(value);
    csv.push(array1.join(",")); //prepend empty row on top of table
    for (var i = 0; i < rows.length; i++) {
        var row = [];
        var cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < col; j++) {
            if (j === 0) { //prepend empty column to the left of the table
                row.push(","+cols[j].innerText)
            } else {
                row.push(cols[j].innerText)
            }
        }
        csv.push(row.join(","));
    }
    downloadCSV(csv.join("\n"), filename); //saves csv with filename members.csv
}
