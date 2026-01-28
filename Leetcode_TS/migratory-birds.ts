function migratoryBirds(arr: number[]): number {
    // Write your code here
    
    let newMap = new Map<number, number>()
    let birdFreq: number = 0
    let currentMax = 0
    
    for (let bird in arr) {
        if (newMap.has(arr[bird])){
            let updatedCount: number= newMap.get(arr[bird])!+1
            newMap.set(arr[bird], updatedCount)
        } else{
            newMap.set(arr[bird], 1)
        }
    }
    
   
    for (let pair of newMap.entries()) {
        let [val, freq] = pair
        if (freq > birdFreq) {
            birdFreq = freq
            currentMax = val
        } else if (freq === birdFreq) {
            currentMax = Math.min(currentMax, val)
        }
    }
    
    return currentMax
}