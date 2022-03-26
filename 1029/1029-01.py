var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => diff(a) - diff(b));
    
    let countA = 0;
    let total = 0;
    const half = Math.floor(costs.length / 2);
    for (let c of costs) {
        if (countA < half) {
            total += c[0];
            countA++;
        } else {
            total += c[1];
        }
    }
    return total;
};

function diff(cost) {
    return cost[0] - cost[1];
}
