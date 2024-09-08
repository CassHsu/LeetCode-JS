var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        let n = nums.indexOf(Math.min(...nums));
        nums[n] *= multiplier;
    }

    return nums;
};
