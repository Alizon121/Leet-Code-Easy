var maxProfit = function(prices) {
    // We are given an array of integers.
    // We need to determine if the pruchase of one stock and the selling of that stock on another day is positive
    // We can sell/buy multiple times if a stock is purchased on a different day

    // Plan
    // Iterate over array
    // Determine if (Sell price - purchase price) is positive
    // Add the positive values to a saved value
    // Use pointers to move the index of the array to a different place

    let sum = 0

    let init = 0
    let sell = 1
    while (init < prices.length) {
        if((prices[sell] - prices[init]) > 0) {
            sum += prices[sell] - prices[init]
            init++
            sell++
        }

        else {
            sell++
            init++
        }
    }
    return sum
};