function lengthOfLongestSubstrin(s: string): number {
    
    let pointer1: number = 0
    let maxLen: number = 0
    let newSet = new Set<string>()
    for (let pointer2 = 0; pointer2 < s.length; pointer2++) {
        while (newSet.has(s[pointer2])) {
            newSet.delete(s[pointer1])
            pointer1++
        }

        newSet.add(s[pointer2])
        maxLen = Math.max(maxLen, pointer2 - pointer1 + 1)
    }
    return maxLen
};