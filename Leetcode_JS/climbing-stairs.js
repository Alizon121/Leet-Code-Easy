var climbStairs = function(n) {
    // We need to reach the input by adding one or two
    // dp[1] = 1: There is 1 way to climb 1 step (a single step).
    // dp[2] = 2: There are 2 ways to climb 2 steps (either two single steps or one double step).

let dp = [0, 1, 2]
let currentStep = 3
// The while condition will give a falsy statement if n = 2
while (currentStep <= n) {

/*The number of ways to reach the current step is the sum of the number of ways to reach the previous step (currentStep-1) and the number of ways to reach the step before the previous step (currentStep-2).*/

dp[currentStep] = dp[currentStep-1] + dp[currentStep - 2]
currentStep++
}

//    dp[n] contains the number of ways to climb n steps. The function returns this value.
return dp[n]
};

console.log(climbStairs(2))