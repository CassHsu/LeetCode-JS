var combine = function(n, k) {
    const ans = [];
    const backtrack = (curr, idx) => {
        if (curr.length === k) {
            ans.push([...curr]);
            return;
        }
        
        for (let i = idx; i <= n; i++) {
            curr.push(i);
            backtrack(curr, i + 1);
            curr.pop();
        }
    }
    
    backtrack([], 1);
    return ans;
};
