var maxFrequencyElements = function(nums) {
    const m = new Map();
    nums.forEach(n => {
        m.set(n, m.get(n) + 1 || 1);
    });

    let max = Math.max(...m.values());
    let count = 0;
    for (const k of m) {
        if (k[1] === max) {
            count += k[1];
        }
    }

    return count;
};
