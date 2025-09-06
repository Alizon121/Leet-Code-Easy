/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    let dp = new Array(n+1).fill(0)
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            dp[i] = dp[i >> 1]
        } else {
            dp[i] = 1 + dp[i-1]
        }
    }
    return dp
};