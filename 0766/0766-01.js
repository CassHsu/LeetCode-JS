var isToeplitzMatrix = function(matrix) {
    const m = new Map();
    
    for (const [r, row] of matrix.entries()) {
        for (const [c, v] of row.entries()) {
            const val = m.get(r - c);
            if (val != null) {
                if (val !== v) {
                    return false;
                }
                
            } else {
                m.set(r - c, v);
            }
        }
    }
    
    return true;
};
