var countPoints = function(rings) {
    let count = 0;
    const m = new Map();
    
    for (let c = 0, r = 1; r < rings.length; c += 2, r += 2) {
        if (!m.has(rings[r])) {
            m.set(rings[r], "");
        }
        m.set(rings[r], m.get(rings[r]) + rings[c]);
    }
    
    for (let v of m.values()) {
        let r = false;
        let g = false;
        let b = false;
        
        for (let c of v) {
            if (c === "R") r = true;
            if (c === "G") g = true;
            if (c === "B") b = true;
            
            if (r && g && b) {
                count++;
                break;
            }
        }
    }
    
    return count;
};
