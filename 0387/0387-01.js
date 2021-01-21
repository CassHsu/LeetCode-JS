var firstUniqChar = function(s) {
    const m = new Map();
    
    for (let c of s) {
        if (m.has(c)) {
            m.set(c, m.get(c) + 1);
        } else {
            m.set(c, 1);
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (m.get(c) === 1) return i;
    }
    return -1;
};