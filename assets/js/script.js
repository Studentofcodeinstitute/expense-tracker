let usernames = parseInt(document.getElementById("name").value);

function buildTable() {
    let html = `
     <table>
      <thead>
         <tr>
           <th>Name</th>
           <th>Date</th>
           <th>Type</th>
           <th>Amount</th>
        </tr>
      </thead>
      </tbody>
`;

    for (let username of usernames) {
        let rowHtml = `
       <tr>
          <td>${username.name}</td>
       </tr>
`;
        html += rowHtml;
    }
    html += `
       </tbody>
       </table>
       `;
    return html;
}

let table = buildTable();
document.getElementById('expense-table').innerHTML = table;
