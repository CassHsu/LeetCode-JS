var divideArray = function(nums) {
    const pairs = Math.floor(nums.length / 2);
    const m = new Map();
    let count = 0;
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1);
        else m.set(n, 1);
    });
    
    for (const v of m.values()) {
        if (v % 2 === 0) count += (v / 2);
    }
    
    return count === pairs;
};
