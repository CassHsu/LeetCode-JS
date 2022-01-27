var countElements = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    
    for (let i = 1; i < nums.length; i++) {
        if (min < nums[i] && nums[i] < max) count++;
    }
    
    return count;
};
