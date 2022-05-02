var backspaceCompare = function(s, t) {
    const buildit = (st) => {
        const r = [];
        for (const c of st) {
            if (c === "#") {
                if (r.length > 0) {
                    r.pop();
                }
                
            } else {
                r.push(c);
            }
        }
        
        return r.join("");
    }
    
    return buildit(s) == buildit(t);
};
