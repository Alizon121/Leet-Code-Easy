var maxProfit = function(prices) {
    // length corresponds to purchase date
    // We need to find the max difference between the minimum value and the ith values in front of the min value

    let min = 0
    let max = 0;
    for (let i =1; i < prices.length; i++) {
        console.log(prices[i])
        if (prices[i] < prices[min]) { //we either determine min is the largest value or i contains a min val
            min = i
        } else if (prices[i] - prices[min] > max) {
            // console.log(prices[min])
            max = prices[i] - prices[min]
        }
    }
    return max
};