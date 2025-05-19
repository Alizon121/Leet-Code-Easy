function maxVowel(s: string, k: number): number {
    
    const findVowel = (letter:string) => {
        const vowels = "aeiou"
        return vowels.includes(letter)
    }

    let vowels:number = 0
    let maxVowel:number = 0
    let left:number = 0

    for (let right = 0; right < s.length; right++) {
        if (findVowel(s[right])){
            vowels++
        }

        // The condition is always end - start + 1
        if (right - left + 1 === k) {
            maxVowel = Math.max(maxVowel, vowels)

            if (findVowel(s[left])) {
                vowels-- // remove the index from the window, and therefore the value
            }
            left++
        }
    }
    return maxVowel
};