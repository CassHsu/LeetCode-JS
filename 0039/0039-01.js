var combinationSum = function(candidates, target) {
    const ret = [];
    const backtracking = function(remain, idx, curr) {
        if (remain < 0) return;
        
        if (remain === 0) {
            ret.push(curr.slice());
        }
        
        for (let i = idx; i < candidates.length; i++) {
            curr.push(candidates[i]);
            backtracking(remain - candidates[i], i, curr);
            curr.pop();
        }
    };
    
    backtracking(target, 0, []);
    return ret;
};
