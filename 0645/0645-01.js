var findErrorNums = function(nums) {
    const m = new Map();
    const ans = [-1, -1];
    
    nums.forEach(n => m.set(n, m.get(n) ? m.get(n) + 1: 1));
    for (let i = 1; i <= nums.length; i++) {
        if (m.has(i)) {
            if (m.get(i) == 2) ans[0] = i;
        } else {
            ans[1] = i;
        }
    }
        
    return ans;
};
