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
    
    for (let v of m) {
        if (s.has(v[1])) {
            return false
        }
        s.add(v[1]);
    }
    
    return true;
};
