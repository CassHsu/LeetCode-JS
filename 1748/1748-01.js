var sumOfUnique = function(nums) {
    let ans = 0;
    const m = new Map();
    
    nums.forEach(n => {
        const v = m.get(n);
        if (v) {
            m.set(n, v + 1);
        } else {
            m.set(n, 1);
        }
    });
    
    m.forEach((v, k) => {
        if (v === 1) {
            ans += k;
        }
    })
    
    return ans;
};
