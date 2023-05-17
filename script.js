let fields = [null, null, null, null, null, null, null, null, null];

function init() {
  render();
}

function render() {
  let contentDiv = document.getElementById("content");
  let table = document.createElement("table");

  let index = 0;
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td");
      let fieldValue = fields[index];

      if (fieldValue === "o") {
        cell.textContent = "O";
      } else if (fieldValue === "x") {
        cell.textContent = "X";
      }

      row.appendChild(cell);
      index++;
    }

    table.appendChild(row);
  }

  contentDiv.innerHTML = "";
  contentDiv.appendChild(table);
}

// Beispielaufruf der render() Funktion
fields = ["o", null, "x", null, "o", "x", null, null, "o"];
