var removePalindromeSub = function(s) {
    if (s.length === 0) return 0;
    if (s === [...s].reverse().join("")) return 1;
    
    return 2;
};
