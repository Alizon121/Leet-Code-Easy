function equalPairs(grid: number[][]): number {
    
    let count:number = 0
    let rows = new Map<string , number>()
    let n: number = grid.length

    for (let r = 0; r < n; r++) {
        const row = JSON.stringify(grid[r])
        rows.set(row, 1 + (rows.get(row) || 0))
    }

    console.log(rows)

    for (let c = 0; c < n; c++) {
        const col = JSON.stringify(grid.map(row => row[c]))
        count += (rows.get(col) || 0)
    }
    return count 
};