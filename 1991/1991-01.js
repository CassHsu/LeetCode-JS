var findMiddleIndex = function(nums) {
    const len = nums.length;
    const sum = (start, end) => {
        let ans = 0;
        for (let i = start; i < end; i++) {
            ans += nums[i];
        }
        return ans;
    }
    
    for (let i = 0; i < len; i++) {
        if (sum(0, i) == sum(i + 1, len)) return i;
    }
    
    return -1;
};
