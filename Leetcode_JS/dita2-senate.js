/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    // Two senator parties -> R & D
    // Two actions -> ban or announce victory
    // Keep track of the length of the senate string -> if length = 0, then announce the winner

    let rad = []
    let dire = []
    
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") rad.push(i)
        else dire.push(i)
    }
     
    while (rad.length && dire.length) {
            const r = rad.shift()
            const d = dire.shift()
            if (r < d) rad.push(r + senate.length)
            else dire.push(d + senate.length)
        }
        
    return rad.length > 0 ? "Radiant" : "Dire"
};