function countingValleys(steps: number, path: string): number {
    // Write your code here
    
    let levels: number = 0
    let valleys: number = 0
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "D") {
            levels-=1
        } else if (path[i] === "U") {
            levels++
            if (levels === 0) {
                valleys++
            }
        }
    }
    return valleys
}