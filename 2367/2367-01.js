var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    const s = new Set();

    for (const n of nums) {
        if (s.has(n - diff) && s.has(n - diff - diff)) {
            count++;
        }
        s.add(n);
    }

    return count;    
};
