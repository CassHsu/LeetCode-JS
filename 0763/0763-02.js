var partitionLabels = function(S) {
    const last = new Array(26).fill(-1);
    const ans = [];
    let anchor = 0;
    let j = 0;
    
    const a = 'a'.charCodeAt(0);
    for (let i = 0; i < S.length; i++) {
        last[S.charCodeAt(i) - a] = i;
    }
    
    for (let i = 0; i < S.length; i++) {
        j = Math.max(j, last[S.charCodeAt(i) - a]);
        if (i === j) {
            ans.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return ans;
};
