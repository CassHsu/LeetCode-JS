var subsets = function(nums) {
    const result = [[]];
    
    function backtrack(first, curr) {
        for (let i = first; i < nums.length; i++) {
            curr.push(nums[i]);
            result.push([...curr]);
            backtrack(i + 1, curr);
            curr.pop();
        }
    }
    
    backtrack(0, []);
    return result;
};
