var findMaxK = function(nums) {
    const m = new Map();
    let res = -1;
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1);
        else m.set(n, 1);
        
        if (m.has(-n)) {
            res = Math.max(res, Math.abs(n));
        }
    });
    
    return res
};
