function uniqueOccurrencess(arr: number[]): boolean {
    let newSet = new Set<number>()
    let count:number = 1
    arr = arr.sort((a,b) => a-b)

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) count++
        else{
            if (newSet.has(count)) return false
            newSet.add(count)
            count = 1
        }
    }
        return !newSet.has(count)
};