var subsets = function(nums) {
    const res = []
    
    let backtrack = (curr, start) => {
        if (start === nums.length) {
            res.push(curr)
            return
        }
        
        backtrack(curr, start+1)
        backtrack([...curr, nums[start]], start+1)
    }
    
    backtrack([], 0);
    return res;
};
