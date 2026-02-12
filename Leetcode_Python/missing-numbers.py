def missingNumbers(arr, brr):
    
    # 203 204 205 206 207 208 203 204 205 206
    # 203 204 205 206 207 205 208 203 206 205 206 204
    #  0.  1.  2.  3.  4.  5.  6.  7.  8.   9. 10  11  12
    #          |
    #          |. 

    freq = {}

    for num in brr:
        freq[num] = freq.get(num, 0) + 1

    for num in arr:
        freq[num] -= 1

    return sorted([num for num in freq if freq[num] > 0])