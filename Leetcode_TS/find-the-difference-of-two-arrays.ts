function findDifference(nums1: number[], nums2: number[]): number[][] {
    
    let newSet1= new Set<number>(nums1)
    let newSet2 = new Set<number>(nums2)
    let result: number[][] = [[], []]

    for (let num of newSet2){
        if (!newSet1.has(num)) {
            result[1].push(num)
        }
    }

     for (let num of newSet1){
        if (!newSet2.has(num)) {
            result[0].push(num)
        }
    }

    return result
};