function findMinArrowShots(points: number[][]): number {
    
    points.sort((a,b) => a[1] - b[1])
    let thrownArrows: number = 1
    // [[10,16],[2,8],[1,6],[7,12]]
        // 0.    1.    2.    3          
    // We need to determine what points[i] intersect
    // Count +1 for every intersection that there is

    let end: number = points[0][1]


    for (let i = 1; i < points.length; i++) {
        const [start, currentEnd]: number[] = points[i];

        if (start > end) {
            thrownArrows++
            end = currentEnd
        }
    }

    return thrownArrows
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))