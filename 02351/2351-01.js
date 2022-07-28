var repeatedCharacter = function(s) {
    const m = {};
    let r = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (m[s[i]]) {
            r = i;
            break;
        }
        m[s[i]] = 1;
    }
    
    return s[r];
};
