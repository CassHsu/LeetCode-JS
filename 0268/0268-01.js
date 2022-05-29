var missingNumber = function(nums) {
    let ans = 0;
    const size = nums.length;
    nums.sort((a, b) => a - b);
    
    if (nums[0] !== 0) return ans;
    else if (nums[size - 1] !== size) return size;
    else {
        for (let i = 1; i < size; i++) {
            if (nums[i] !== i) {
                ans = i;
                break;
            }
        }
    }
    
    return ans;
};
