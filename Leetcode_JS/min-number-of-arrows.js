/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShot = function(points) {
    
    arrows = 1
    sortedPoints = points.sort((a,b) => a[1]-b[1])
    let currEnd = sortedPoints[0][1]

    for (let i = 1; i < points.length; i++) {
        let start = (points[i][0])

        if (start > currEnd) {
            arrows++
            currEnd = points[i][1]
        }
    }
    return arrows
};