//let button = document.getElementById("clicked");
let row = 1;
resetForm();



function tableDetails(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let type = document.getElementById('type').value;
    let amount = document.getElementById('amount').value;
    let html = `<button onclick="onClick(this);">Delete</button>`;

    if (!name || !date || !type || !amount) {
        alert(`Unknown game type`);
        return;
    }

    let tableElement = document.getElementById('expense-table');

    let rows = tableElement.insertRow(-1);

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

/**
 
 
    * localStorage.setItem("name", JSON.stringify(cell1));
    * localStorage.setItem("date", JSON.stringify(cell2));
    * localStorage.setItem("type", JSON.stringify(cell3));
    * localStorage.setItem("amount", JSON.stringify(cell4));
    * localStorage.setItem("html", JSON.stringify(cell5));
*/
}

function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('date').value = "";
    document.getElementById('type').value = "";
    document.getElementById('amount').value = "";
}

function onClick(td) {

    if (confirm('Are You Sure')) {
        row = td.parentElement.parentElement;
        document.getElementById('expense-table').deleteRow(row.rowIndex);
        resetForm();


    }

    return;
}

//button.addEventListener("click", tableDetails);
