class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        
        sum = 0
        buy = 0
        sell = 1

        while sell < len(prices):
            if (prices[sell] - prices[buy]) > 0:
                sum += prices[sell] - prices[buy]
                buy = buy + 1
                sell = sell + 1
            else:
                buy = buy + 1
                sell = sell + 1
        
        return sum