class Chessboard {
    constructor(id, fen) {
        this.fen = fen;
        this.id = id;
        this.render();
    }

    render() {
        const chessboard = document.querySelector(`#${this.id}`);
        chessboard.innerHTML = '';

        const piecePositions = {
            'K': '0px 0px', 'Q': '-64px 0px', 'B': '-128px 0px', 'N': '-192px 0px', 'R': '-256px 0px', 'P': '-320px 0px',
            'k': '0px -64px', 'q': '-64px -64px', 'b': '-128px -64px', 'n': '-192px -64px', 'r': '-256px -64px', 'p': '-320px -64px'
        };

        const rows = this.fen.split(' ')[0].split('/');
        rows.forEach((row) => {
            let colIndex = 0;
            for (let char of row) {
                if (isNaN(char)) {
                    const square = document.createElement('div');
                    square.className = 'square';
                    const piece = document.createElement('div');
                    piece.className = 'piece';
                    piece.style.backgroundPosition = piecePositions[char];
                    square.appendChild(piece);
                    chessboard.appendChild(square);
                    colIndex++;
                } else {
                    const emptySquares = parseInt(char);
                    for (let i = 0; i < emptySquares; i++) {
                        const square = document.createElement('div');
                        square.className = 'square';
                        chessboard.appendChild(square);
                        colIndex++;
                    }
                }
            }
        });
    }
}