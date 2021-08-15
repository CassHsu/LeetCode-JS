var combinationSum3 = function(k, n) {
    const ans = [];
    const backtrack = (curr, start, remain) => {
        if (curr.length === k) {
            if (remain === 0) {
                ans.push([...curr]);
            }
            return;
        }
        
        for (let i = start; i <= 9; i++) {
            curr.push(i);
            backtrack(curr, i + 1, remain - i);
            curr.pop();
        }
    }
    
    backtrack([], 1, n);
    return ans;
};
