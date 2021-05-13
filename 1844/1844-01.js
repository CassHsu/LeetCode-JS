var replaceDigits = function(s) {
    const shift = (c, x) => {
        return String.fromCharCode(c.charCodeAt(0) + parseInt(x));
    };
    
    let ret = s.split("");
    for (let i = 1; i < s.length; i += 2) {
        ret[i] = shift(s[i-1], s[i]);
    }
    return ret.join("");
};
