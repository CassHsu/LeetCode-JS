var restoreString = function(s, indices) {
    const ans = s.split("");
    
    for (let i = 0; i < indices.length; i++) {
        ans[indices[i]] = s[i];
    }
    
    return ans.join("")
};
