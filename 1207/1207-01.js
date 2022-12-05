var uniqueOccurrences = function(arr) {
    const m = new Map();
    const s = new Set();
    
    for (let a of arr) {
        if (m.get(a) ) {
            m.set(a, m.get(a) + 1);
        } else {
            m.set(a, 1);
        }
    }
    
    for (let v of m.values()) {
        if (s.has(v)) {
            return false;
        }
        s.add(v);
    }
    
    return true;
};
