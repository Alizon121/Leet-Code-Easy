function predictPartyVictoryy(senate: string): string {
    

    let radiant:number[] = []
    let dire: number[] = []

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") radiant.push(i)
        if (senate[i] === "D") dire.push(i)
    }

    while (radiant.length && dire.length) {
        let r = radiant.shift()
        let d = dire.shift()

        if (r < d) radiant.push(r+senate.length)
        else dire.push(d+senate.length)
    }

   return radiant.length ? "Radiant": "Dire"
};