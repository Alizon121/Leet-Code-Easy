def closestNumbers(arr):
    arr.sort()
    result = []

    min_diff = float("inf")

    for i in range(len(arr)-1):
        diff = (arr[i+1] - arr[i])
        
        if min_diff> diff:
            min_diff = diff
            result = [arr[i], arr[i+1]]
            
        elif min_diff == diff:
            result.append(arr[i])
            result.append(arr[i+1])
            
    return result