function generateChessTable(moves, targetElement, ccaption) {
    // Split moves into an array of all moves (both white and black) by removing move numbers
    const movePairs = moves.match(/\d+\.\s*([^\s]+)\s*([^\s]+)?/g);

    // Create table elements
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = ccaption;

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["", "White", "Black"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    const tbody = document.createElement("tbody");

    // Loop through move pairs to generate rows
    movePairs.forEach((pair, index) => {
        const movesForTurn = pair.match(/\d+\.\s*([^\s]+)\s*([^\s]+)?/); // Extract moves without the move number
        const whiteMove = movesForTurn[1];
        const blackMove = movesForTurn[2]; // May be undefined

        const row = document.createElement("tr");

        // Move number column
        const moveNumberCell = document.createElement("td");
        moveNumberCell.textContent = index + 1;

        // White's move column
        const whiteMoveCell = document.createElement("td");
        whiteMoveCell.innerHTML = `<strong>${whiteMove}</strong>`;

        // Black's move column (empty if Black's move is missing)
        const blackMoveCell = document.createElement("td");
        blackMoveCell.innerHTML = blackMove ? `<strong>${blackMove}</strong>` : '';

        row.appendChild(moveNumberCell);
        row.appendChild(whiteMoveCell);
        row.appendChild(blackMoveCell);

        tbody.appendChild(row);
    });

    // Append caption, header, and body to the table
    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);

    // Insert the table in the specified target element
    targetElement.appendChild(table);
}
