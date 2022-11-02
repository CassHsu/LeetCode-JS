var findMaxK = function(nums) {
    const m = new Map();
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1);
        else m.set(n, 1);
    });
    
    let max = -1;
    nums.forEach(n => {
        if (n > 0 && m.has(-n)) {
            if (n > max) max = n;
        }
    });
    
    return max
};
