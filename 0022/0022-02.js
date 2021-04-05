var generateParenthesis = function(n) {
    const res = [];
    const backtrack = (s, left ,right) => {
        if (s.length === 2*n){
            res.push(s);
            return;
        }
        
        if (left > right) {
            backtrack(s+')', left, right+1);
        }
        if (left < n) {
            backtrack(s+'(', left+1, right);
        }
    }
    backtrack("", 0, 0);
    return res;
};
