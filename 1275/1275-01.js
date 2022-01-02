var tictactoe = function(moves) {
    const board = init();
    if (moves.length < 5) return "Pending";
    
    const a = "A";
    const b = "B";
    let turn = a;
    for (const move of moves) {
        board[move[0]][move[1]] = turn;
        
        if (isWin(board, turn)) return turn;
        
        turn = (turn === a) ? b : a; 
    }
    
    if (isDraw(board)) return "Draw";
    return "Pending";
};

var init = function() {
    const board = [];
    
    for (let i = 0; i < 3; i++) {
        board.push(["", "", ""]);
    }
    
    return board;
}

var isDraw = function(rows) {
    for (const row of rows) {
        for (const r of row) {
            if (r === "") return false;
        }
    }
    
    return true;
}

var isWin = function(rows, t) {
    if (rows[1][1] === t) {
        if (rows[0][0] === t && rows[2][2] === t) return true;
        if (rows[0][2] === t && rows[2][0] === t) return true;
    }
    
    for (let i = 0; i < 3; i++) {
        if (rows[i][0] === t && rows[i][1] === t && rows[i][2] === t) return true;
        if (rows[0][i] === t && rows[1][i] === t && rows[2][i] === t) return true;
    }
    
    return false;
}
