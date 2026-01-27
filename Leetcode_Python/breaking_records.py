def breakingRecords(scores):
    # We need to keep track of the min and max scores
    # If the score is new max, then max_record += 1
    # if the score is new min, the min_record += 1
    
    
    max_record = 0
    min_record = 0
    
    max_points = scores[0]
    min_points = scores[0]
    
    for i in range(1, len(scores)):
        if scores[i] < min_points:
            min_points = scores[i]
            min_record+=1
            
        if scores[i] > max_points:
            max_points = scores[i]
            max_record+=1
        
    return [max_record, min_record]