var findAnagrams = function(s, p) {
    const pn = p.length;
    const sn = s.length;
    
    if (sn < pn) return [];
    
    const pa = [];
    const sa = [];
    for (let i = 0; i < 26; i++) {
        pa.push(0);
        sa.push(0);
    }
    
    const a = 'a'.charCodeAt(0);
    const ans = [];
    for (const i in p) {
        pa[p.charCodeAt(i) - a] += 1;
    }
    
    for (const i in s) {
        sa[s.charCodeAt(i) - a] += 1;
        
        if (i >= pn) {
            sa[s.charCodeAt(i - pn) - a] -= 1;
        }
        
        if (isEqual(pa, sa)) {
            ans.push(i - pn + 1);
        }
    }
    
    return ans;
};
    
function isEqual(pa, sa) {
    for (let i = 0; i < 26; i++) {
        if (sa[i] != pa[i]) {
            return false;
        }
    }
    return true;
}
