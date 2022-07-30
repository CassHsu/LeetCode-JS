var findAndReplacePattern = function(words, pattern) {
    const res = [];
    const p = findPattern(pattern);
    
    for (let w of words) {
        if (p === findPattern(w)) {
            res.push(w);
        }
    }
    return res;
};

function findPattern(pattern) {
    const pm = new Map();
    let i = 0;
    let code = "";
    
    for (let p of pattern) {
        if (pm[p] == undefined) {
            pm[p] = i;
            i++;
        }
        code += pm[p]
    }
    return code;
}
