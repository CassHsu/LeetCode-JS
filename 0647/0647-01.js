var countSubstrings = function(s) {
    let count = 0;
    const size = s.length;
    const twopointer = (l, r) => {
        while (l >= 0 && r < size && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }
    }
    
    for (let i = 0; i < size; i++) {
        twopointer(i, i);
        twopointer(i, i+1);
    }
    
    return count;
};
