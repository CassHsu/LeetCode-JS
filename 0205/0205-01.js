function isIsomorphic(s: string, t: string): boolean {
    const ms = new Map();
    const mt = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (ms.has(s[i]) === false) ms.set(s[i], i);
        if (mt.has(t[i]) === false) mt.set(t[i], i);
        
        if (ms.get(s[i]) !== mt.get(t[i])) return false;
    }
    return true;
};
