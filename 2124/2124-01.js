var checkString = function(s) {
    let lastA = 0;
    let firstB = s.length;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") lastA = i;
        else {
            if (firstB === s.length) {
                firstB = i;
            }
        }
    }
    
    return lastA <= firstB;
};
