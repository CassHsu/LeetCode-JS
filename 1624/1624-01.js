var maxLengthBetweenEqualCharacters = function(s) {
    let ans = -1;
    const m = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i]) == false) {
            m.set(s[i], i);
        } else {
            ans = Math.max(ans, i - m.get(s[i]) - 1);
        }
    }
    
    return ans;
};