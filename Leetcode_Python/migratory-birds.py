def migratoryBirds(arr):
    # We need to map out the instances
    # iterate over the map and determine which occurs the most
    # If there is a tie, then return the smaller of the two keys
    
    new_map = dict()
    current_max = float("-inf")
    count = float("-inf")
    
    for bird in arr:
        new_map[bird] = new_map.get(bird, 0) + 1
        
    for bird,freq in new_map.items():
        if freq > count:
            count = freq
            current_max = bird
        elif freq == count:
            current_max = min(current_max, bird)
            
    return current_max
    