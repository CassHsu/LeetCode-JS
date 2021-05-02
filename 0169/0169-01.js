var majorityElement = function(nums) {
    const size = nums.length / 2;
    const m = new Map();
    let major = nums[0];
    
    for (const n of nums) {
        const v = m.get(n);
        if (v) {
            m.set(n, v+1);
        } else {
            m.set(n, 1);
        }
    }
    
    for (const [k, v] of m) {
        if (v > size) {
            major = k;
            break;
        }
    }
    
    return major;
};
