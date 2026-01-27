function breakingRecords(scores: number[]): number[] {
    let maxRecord: number = 0
    let minRecord: number = 0
    
    let maxPoints:number = scores[0]
    let minPoints: number = scores[0]
    
    for (let num = 1; num < scores.length; num++) {
        if (scores[num] > maxPoints) {
            maxPoints = scores[num]
            maxRecord++
        }
        
        if (scores[num] < minPoints) {
            minPoints = scores[num]
            minRecord++
        }
        
    }
    return [maxRecord, minRecord]
}