var searchInsert = function(nums, target) {
    let right = 0;
    let left = nums.length;
    
    while (right != left) {
        let mid = Math.floor((right + left) / 2);
        
        if (target === nums[mid]) return mid;
        if (target > nums[mid]) {
            right = mid + 1;
        } else {
            left = mid;
        }
    }
    return left;
};