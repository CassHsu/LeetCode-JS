var removeDuplicates = function(nums) {
    const size = nums.length;
    if (size <= 1) return size;
    
    let p = 0;
    for (let i = 1; i < size; i++) {
        if (nums[i] != nums[p]) {
            p += 1;
            nums[p] = nums[i];
        }
    }
    return p + 1;
};