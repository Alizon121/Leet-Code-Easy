function icecreamParlor(m: number, arr: number[]): number[] {
    // Write your code here
    let result: number[] = []
    for (let cost = 0; cost < arr.length; cost++ ) {
        let pointer: number = arr.length-1
        while (pointer > cost) {
            if (arr[pointer] + arr[cost] === m) {
                return [cost + 1, pointer + 1]
            } else {
                pointer--
            }
        }
    }
    return result
}