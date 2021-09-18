var intersect = function(nums1, nums2) {
    const ans = [];
    const m = new Map();
    for (const n of nums1) {
        const v = m.get(n);
        if (v) m.set(n, v + 1);
        else m.set(n, 1);
    }
    
    for (const n of nums2) {
        const v = m.get(n);
        if (v && v > 0) {
            m.set(n, v - 1);
            ans.push(n);
        }
    }
    
    return ans;
};
