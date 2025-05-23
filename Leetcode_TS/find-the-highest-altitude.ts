function largestAltitude(gain: number[]): number {

    let max:number = 0
    let sum:number = 0

    for (let i = 0; i < gain.length; i++) {
       sum += gain[i]
        if (sum > max) max = sum
    }
    return max
};