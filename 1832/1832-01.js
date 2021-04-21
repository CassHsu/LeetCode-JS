var checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;
    const m = new Map();
    for (let n of "abcdefghijklmnopqrstuvwxyz") {
        m.set(n, 0);
    }
    
    for (let s of sentence) {
        m.set(s, m.get(s) + 1);
    }
    
    for (let v of m.values()) {
        if (v === 0) return false;
    }
    
    return true;
};
