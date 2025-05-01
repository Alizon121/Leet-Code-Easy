var canPlaceFlowers = function(flowerbed, n) {
    // Info
    /*
        - We need to plant flowers
        - flowerbeds that have 0s can receive flowers
        - flowers should not be adjacent to other flowers
        - We need to strategically place the flowers to attempt to ensure non-adjacency
     */
    //  Plan
    /*
        - Iterate over array, and find flowerbed[i] == 0
        - while n !== 0, then flowerbed[i] == 1
        - Iterate over the array again and check if there are 1s next to another 1
            - If yes, then return false
            - If no, then return true
     */

    for (let i = 0; i < flowerbed.length; i++) {
        let left = i === 0 || flowerbed[i-1] === 0
        let right = i === flowerbed.length-1 || flowerbed[i+1] === 0

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i]=1
            n--
        }
    }
return n <= 0
};