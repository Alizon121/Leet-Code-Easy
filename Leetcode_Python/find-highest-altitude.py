class Solution(object):
    def largestAltitude(self, gain):
        """
        :type gain: List[int]
        :rtype: int
        """

        sum = 0
        max_altitude = 0

        for i in range(len(gain)):
            sum += gain[i]
            max_altitude = max(max_altitude, sum)

        return max_altitude