def luckBalance(k, contests):
    # What is the best way to optimize Lena's luck?
    # Lena should win only when the number is smallest
    # Lena can lose k important prelim contest with highest num
    
    luck_count = 0
    contests = sorted(contests, reverse=True)
    
    for i in range(len(contests)):
        [l,t] = contests[i]

        if t == 1 and k >0:
            luck_count+=l
            k-=1
        
        elif t == 1 and k == 0:
            luck_count-=l
        
        elif t == 0:
            luck_count+=l
        
            
    return luck_count