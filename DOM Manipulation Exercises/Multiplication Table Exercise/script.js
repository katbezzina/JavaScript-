function addTable(a,b) {
    var myTableDiv = document.getElementById("multiplicationTable");

    var table = document.createElement('table');
    table.border = '1';

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (var i = 0; i < a; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < b; j++) {
            var td = document.createElement('TD');
            tr.appendChild(td);
        }
    }
  myTableDiv.appendChild(table);
}
addTable(15, 14);