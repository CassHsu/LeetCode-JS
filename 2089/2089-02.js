var targetIndices = function(nums, target) {
    return nums.sort((a, b) => a - b).reduce((acc, n, i) => n == target ? [...acc, i]: acc, []);
};
