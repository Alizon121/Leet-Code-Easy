/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {

    let sum = 0
    if(mat.length % 2 !== 0) {
        // Do not add center coord to sum
        const center = Math.floor(mat.length/2)
        sum -= mat[center][center]
    }
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat.length; col++) {
            if (row === col) {
                sum += mat[row][col]
                sum += mat[row][mat.length - 1 - row]
            }
        }
    }
    return sum
};