var targetIndices = function(nums, target) {
    const ans = [];
    nums.sort((a, b) => a - b);
    
    for (const [i, n] of nums.entries()) {
        if (n === target) ans.push(i);
    }
    
    return ans;
};
