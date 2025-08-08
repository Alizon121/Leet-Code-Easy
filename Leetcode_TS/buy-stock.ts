function maxProfit(prices: number[]): number {
    
    // Goal: buy on the cheapest (lowest value) day and sell on the greatest day after the cheapest day
let min: number = Infinity
let maxProfit: number = -Infinity

for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - min)
}

return maxProfit
}