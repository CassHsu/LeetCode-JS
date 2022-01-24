var countWords = function(words1, words2) {
    let count = 0;
    const m = new Map();
    
    for (let w of words1) {
        if (m.has(w)) {
            const r = m.get(w);
            r[0]++;
            m.set(w, r);
        } else {
            m.set(w, [1, 0]);
        }
    }
    
    for (let w of words2) {
        if (m.has(w)) {
            const r = m.get(w);
            r[1]++;
            m.set(w, r);
        } else {
            m.set(w, [0, 1]);
        }
    }
    
    for (let v of m.values()) {
        if (v[0] == 1 && v[1] == 1) count++;
    }
    
    return count;
};
