let currentPlayer = 'X'; 
let gameStatus = ['','','','','','','','','']; 
let gameActive = true; /

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
];

function handleClick(cellIndex) {
    if (!gameActive || gameStatus[cellIndex - 1] !== '') return;
    gameStatus[cellIndex - 1] = currentPlayer; 
    document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer; 

    if (checkWin()) {
        document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        document.getElementById('status').textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameStatus[a] !== '' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            return true; 
        }
    }
    return false;
}

function checkDraw() {
    return !gameStatus.includes(''); 
}

function resetGame() {
    currentPlayer = 'X';
    gameStatus = ['','','','','','','','',''];
    gameActive = true;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
}
