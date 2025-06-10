class Solution(object):
    def predictPartyVictory(self, senate):
        """
        :type senate: str
        :rtype: str
        """
        
        radiant = []
        dire = []

        for i in range(len(senate)):
            if senate[i] == "R":
                radiant.append(i)
            else:
                 dire.append(i)

        while len(radiant) > 0 and len(dire) > 0:
            rad = radiant.pop(0)
            d = dire.pop(0)

            if rad < d:
                radiant.append(rad + len(senate))
            else:
                dire.append(d + len(senate))

        if len(radiant) > 0:
            return "Radiant" 
        else:
            return "Dire"