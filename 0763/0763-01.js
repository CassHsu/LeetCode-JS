var partitionLabels = function(S) {
    const last = new Map();
    const ans = [];
    let anchor = 0;
    let j = 0;
    
    for (let i = 0; i < S.length; i++) {
        last[S[i]] = i;
    }
    
    for (let i = 0; i < S.length; i++) {
        j = Math.max(j, last[S[i]]);
        if (i == j) {
            ans.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return ans;
};
