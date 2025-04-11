class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        
        num_strings = [
            (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
            (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
            (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
        ]

        result = ""

        for i,j in num_strings:
            count = num / i
            result += j*count
            num -= i * count
        return result