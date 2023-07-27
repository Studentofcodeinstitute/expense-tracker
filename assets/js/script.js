let button = document.getElementById("clicked");

function tableDetails() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let type = document.getElementById('type').value;
    let amount = document.getElementById('amount').value;

    if (!name || !date || !type || !amount) {
        alert(`Unknown game type`);
        return;
    }
    for
}
button.addEventListener("click", tableDetails);
