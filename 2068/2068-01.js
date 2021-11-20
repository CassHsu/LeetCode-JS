var checkAlmostEquivalent = function(word1, word2) {
    const counts = new Array(26).fill(0);
    
    for (let i = 0; i < word1.length; i++) {
        counts[word1.charCodeAt(i) - 97]++;
    }
    
    for (let i = 0; i < word2.length; i++) {
        counts[word2.charCodeAt(i) - 97]--; 
    }
    
    for (const c of counts) {
        if (Math.abs(c) > 3) return false;
    }
    
    return true;
};
