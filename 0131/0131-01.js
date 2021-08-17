var partition = function(s) {
    const ans = [];
    const backtrack = (curr, start) => {
        if (start >= s.length) {
            ans.push([...curr]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            const tmp = s.substring(start, end + 1);
            
            if (tmp === tmp.split('').reverse().join('')) {
                curr.push(tmp);
                backtrack(curr, end + 1);
                curr.pop();
            }
        }
    }
    
    backtrack([], 0);
    return ans;
};
