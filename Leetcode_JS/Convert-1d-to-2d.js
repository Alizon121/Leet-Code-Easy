/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    // Info
    /*
        - Transform original array to 2d array
        - m is number of rows and n is number of columns
        - first row is 0 to n-1
        - second row is n to (2*n-1)
        - Return [] if not possible
     */

    //  Plan
    /*
        - Declare var result = []
        - Create the rows by iterating through original up to m
            - Add rows to the array using m
        - Check to see if values 0 to n-1 exist
            - push the values if exist
        - Iterate over 2d from original up to n
        - Check to see if n to 2n-1 exist
            - push the values if exist
     */

    if (m*n !== original.length) {
        return []
    }

     let result = Array.from({length: m}, () => Array(n).fill(0))


     for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = original[i * n + j]
        }
     }
    return result
};