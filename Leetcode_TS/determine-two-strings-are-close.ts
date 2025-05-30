function closeStringss(word1: string, word2: string): boolean {
    // Info
    // We need to check if the two strings are close using the operations

    // Plan
    // check if the strings are the same length -> return false if not same
    // Get word2 from word1 using algorithm

    if (word1.length !== word2.length) return false

    function getFrequencyMap(word: string) {
        let map = new Map<string, number>();
        for (let i of word) {
            map.set(i, (map.get(i) || 0) + 1)
        }
        return map
    }

    let newMap1 = getFrequencyMap(word1)
    let newMap2 = getFrequencyMap(word2)

    if ([...newMap1.keys()].sort().join("") !== [...newMap2.keys()].sort().join("")) return false
    
    return [...newMap1.values()].sort().join("") === [...newMap2.values()].sort().join("")
};