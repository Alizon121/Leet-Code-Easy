def icecreamParlor(m, arr):
    # We need to iterate over the array
    # Determine which of the costs == m
    # Return the indices of the two ice creams where costs ==m
    
    for cost in range(len(arr)):
        pointer = len(arr)-1
        while pointer > cost:
            if arr[pointer] + arr[cost] == m:
                return [cost + 1, pointer + 1]
            else:
                pointer-=1