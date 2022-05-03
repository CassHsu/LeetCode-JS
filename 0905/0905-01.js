var sortArrayByParity = function(nums) {
    return nums.sort((n, _) => n % 2 ? 1: -1)
};
