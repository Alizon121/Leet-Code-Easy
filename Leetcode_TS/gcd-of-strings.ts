function gcdOfStrings(str1: string, str2: string): string {
    // We need to determine the longest string from str2 that can divide str1 into str1

    if (str2 + str1 !== str1 + str2) {
        return ""
    }

        const gcd = (len1, len2) => {
            while (len2 !== 0) {
                [len1, len2] = [len2, len1 % len2]
            }
            return len1
        }
    return str1.slice(0, gcd(str2.length, str1.length))
};