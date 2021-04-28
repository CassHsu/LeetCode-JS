var getSumAbsoluteDifferences = function(nums) {
    const size = nums.length;
    const total = nums.reduce((acc, n) => acc + n, 0);
    let curr = 0;
    const result = []
    
    nums.forEach((n, i) => {
        curr += n;
        result.push((i+1)*n - curr + (total - curr) - (size-i-1)*n);
    });
    
    return result;
};
