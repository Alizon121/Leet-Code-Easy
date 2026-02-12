function missingNumbers(arr: number[], brr: number[]): number[] {
    // Write your code here

    let freq: { [key: number]: number } = {}
    let missingNums: number[] = []
    
    for (let i = 0; i < brr.length; i++) {
        if (freq[brr[i]]) freq[brr[i]]++
        else freq[brr[i]]=1
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) freq[arr[i]]-=1
    }
    
    for (let num in freq) {
        if (freq[num] >= 1) {
            missingNums.push(Number(num))
        }
        
    }
    return missingNums.sort((a,b) => a-b)
}