/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // Info
    /*
    Start on an empty tank
    Cost to travel to the next gas stations is cost[i+1]
    gas[i] is the units of gas required to proceed and amount of gas pumped
     */

    // Plan
    // Equation = gas[i] - cost[i+1] + gas[i]
    // Check to see if we can make a full circuit with result >= gas[start]
    // return the gas stations' index if we can travel around the circuit ONCE clockwise

    if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) {
        return -1;
    }

    let tank = 0;
    let start = 0;


    for (let i = 0; i < gas.length; i++){
        tank += gas[i] - cost[i]
        
        if (tank < 0) {
            tank = 0
            start = i +1
        }
    }
        return start
};