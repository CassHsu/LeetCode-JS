var mostFrequent = function(nums, key) {
    const m = new Map();
    const targets = [];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === key) {
            targets.push(nums[i]);
        }
    }
    
    if (targets.length === 1) return targets[0];
    
    for (const t of targets) {
        if (m.has(t)) {
            m.set(t, m.get(t) + 1);
        } else {
            m.set(t, 1);
        }
    }
    
    let max = 0;
    let ans = nums[0];
    m.forEach((v, k) => {
        if (v > max) {
            max = v;
            ans = k;
        }
    });
    
    return ans;
};
