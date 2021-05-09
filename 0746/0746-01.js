var minCostClimbingStairs = function(cost) {
    const size = cost.length + 1;
    const minCost = [0, 0];
    
    for (let i = 2; i < size; i++) {
        const step1 = minCost[i-1] + cost[i-1];
        const step2 = minCost[i-2] + cost[i-2];
        minCost.push(Math.min(step1, step2));
    }
    return minCost[size - 1];
};
