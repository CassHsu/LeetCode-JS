var findTheDifference = function(s, t) {
    let r = t.charCodeAt(t.length-1);
    for (let i = 0; i < s.length; i++) {
        r ^= s.charCodeAt(i) ^ t.charCodeAt(i);
    }
    return String.fromCharCode(r);
};
