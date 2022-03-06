var minimumSum = function(num) {
    const nums = [];
    while (nums.length < 4) {
        nums.push((num % 10).toString());
        num = Math.floor(num / 10);
    }
    
    nums.sort((a, b) => a - b);
    
    return parseInt((nums[0] + nums[2]), 10) + parseInt((nums[1] + nums[3]), 10);
};
