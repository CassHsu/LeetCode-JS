
var twoSum = function(nums, target) {
    const m = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const find = target - nums[i];
        if (m.has(find)) {
            return [m.get(find), i];
        }
        
        m.set(nums[i], i);
    }
    
    return [-1, -1];
};
