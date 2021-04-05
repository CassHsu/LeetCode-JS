var generateParenthesis = function(n) {
    const ret = [];
    backtrack(ret, [], 0, 0, n);
    return ret;
};

function backtrack(ret, s, left, right, n) { 
    if (s.length === 2 * n) {
        ret.push(s.join(""));
				return;
    }
    
    if (left > right) {
        s.push(")");
        backtrack(ret, s, left, right + 1, n);
        s.pop();
    }
    
    if (left < n) {
        s.push("(");
        backtrack(ret, s, left + 1, right, n);
        s.pop();
    }
};
