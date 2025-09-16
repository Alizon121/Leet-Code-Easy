/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set()); // First validator (i index)
    let cols = Array.from({ length: 9 }, () => new Set()); // Second validator (j index)
    let boxes = Array.from({ length: 9 }, () => new Set()); // third validator (make index below)

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") continue

            let boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)
            console.log("LALAL", boxIndex)

            if (rows[i].has(board[i][j]) || cols[j].has(board[i][j]) || boxes[boxIndex].has(board[i][j])) {
                return false
            }
            else {
                rows[i].add(board[i][j])
                cols[j].add(board[i][j])
                boxes[boxIndex].add(board[i][j])
            }
        } 
    }
    return true
};