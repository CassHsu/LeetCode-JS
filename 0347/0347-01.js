var topKFrequent = function(nums, k) {
    const m = new Map();
    for (let n of nums) {
        m.set(n, m.get(n) + 1 || 1);
    }
    
    const ans = [];
    for (const [k, v] of m) {
        ans.push([k, v]);
    }
    
    ans.sort((a, b) => b[1] - a[1]);
    return ans.slice(0, k).map((x => x[0]));
};
