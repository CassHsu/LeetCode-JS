var lengthOfLIS = function(nums) {
    const size = nums.length;
    if (size <= 0) return 0;
    
    const cache = new Array(size).fill(1);
    
    for (let i = 1; i < size; i++) {
        const sp = [];
        for (let k = 0; k < i; k++) {
            if (nums[k] < nums[i]) {
                cache[i] = Math.max(cache[i], cache[k] + 1);
            }
        }
    }
    
    return Math.max(...cache);
};
