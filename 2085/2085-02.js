var countWords = function(words1, words2) {
    let count = 0;
    const m1 = new Map();
    const m2 = new Map();
    
    for (let w of words1) {
        if (m1.has(w)) {
            m1.set(w, m1.get(w) + 1);
        } else {
            m1.set(w, 1);
        }
    }
    
    for (let w of words2) {
        if (m2.has(w)) {
            m2.set(w, m2.get(w) + 1);
        } else {
            m2.set(w, 1);
        }
    }
    
    m1.forEach((v, k) => {
        if (v == 1 && m2.get(k) == 1) count++;
    });
    
    return count;
};
