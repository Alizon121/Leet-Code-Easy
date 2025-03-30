class Solution(object):
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """ 

        # citations.sort()

        # print("CITATIONS", citations)

        # for i in range(len(citations)):
        #     if citations[i] >= len(citations) - i:
        #         return len(citations)-i
        # return 0

        table = [0] * 1001

        for cite in citations:
            table[cite] += 1
        print("TATBTBABT", table)

        h = len(table)
        count = 0

        while count < h:
            h-=1
            count += table[h]

        return h