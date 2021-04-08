var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    while (true) {
        fast = nums[fast];
        fast = nums[fast];
        
        slow = nums[slow];
        
        if (slow === fast) {
            slow = 0;
            break;
        }
    }
    
    while (true) {
        fast = nums[fast];
        slow = nums[slow];
        
        if (slow === fast) return slow
    }
    return -1;
};
