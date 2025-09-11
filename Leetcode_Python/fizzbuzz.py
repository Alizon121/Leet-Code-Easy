class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []

        for i in range(1,n+1):
            if i % 3 == 0 and not i % 5 == 0:
                result.append("Fizz")

            if i % 5 == 0 and not i % 3 == 0:
                result.append("Buzz")

            if i % 3 == 0 and i % 5 == 0:
                result.append("FizzBuzz")

            if not i % 5 == 0 and not i % 3 == 0:
                result.append(str(i))

        return result