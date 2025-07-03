function twoSumm(nums: number[], target: number) {
    let map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        let complement : number = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
};