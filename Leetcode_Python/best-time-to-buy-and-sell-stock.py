class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max = 0
        min = float('inf')

        for i in range(0, len(prices)):
            # When we obtain the min, then the iteration will commence from here
            if min > prices[i]:
                min = prices[i]
            # Check to see what is the max value
            if prices[i]-min > max:
                max = prices[i]-min
        return max
    
# # Example usage
# if __name__ == "__main__":
#     # Create an instance of the Solution class
#     solution = Solution()
    
#     # Example input for the prices
#     prices = [7, 1, 5, 3, 6, 4]
    
#     # Call the maxProfit method and store the result
#     result = solution.maxProfit(prices)
    
#     # Print the result
#     print(f"The maximum profit is: {result}")

if __name__ == "__main__":
    solution = Solution()
    prices=[7, 1, 5, 10]
    result = solution.maxProfit(prices)
    print(result)
