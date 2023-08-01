//let button = document.getElementById("clicked");
let row = 1;
function tableDetails() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let type = document.getElementById('type').value;
    let amount = document.getElementById('amount').value;
    let html = `<button onclick="onClick(this)">Delete</button>`;

    if (!name || !date || !type || !amount) {
        alert(`Unknown game type`);
        // return;
    }

    let tableElement = document.getElementById('expense-table');

    let rows = tableElement.insertRow(row);

    let cell1 = rows.insertCell(0);
    let cell2 = rows.insertCell(1);
    let cell3 = rows.insertCell(2);
    let cell4 = rows.insertCell(3);
    let cell5 = rows.insertCell(4);

    cell1.textContent = name;
    cell2.textContent = date;
    cell3.textContent = type;
    cell4.textContent = amount;
    cell5.innerHTML = html;

    row++;

}

function onClick(td) {
    if (confirm('Are You Sure')) {
        row = td.parentElement.parentElement;
        document.getElementById("expense-table").deleteRow(row.rowIndex);
        resetForm();
    }
}
//button.addEventListener("click", tableDetails);
