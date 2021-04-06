var findDuplicates = function(nums) {
    const m = new Map();
    const ret = [];
    for (let n of nums) {
        if (!m.has(n)) {
            m.set(n, 1);
        } else {
            if (m.get(n) === 1) {
                ret.push(n);
            }
            ret[m.get(n) + 1];
        }
    }
    return ret;
};
