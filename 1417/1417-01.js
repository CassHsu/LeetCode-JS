var reformat = function(s) {
    const a = [];
    const d = [];
    
    for (let c of s) {
        if (isNaN(c)) {
            a.push(c);
        } else {
            d.push(c);
        }
    }
    
    if (Math.abs(a.length - d.length) > 1) return "";
    
    const isAD = (a.length > d.length) ? true: false;
    let ans = "";
    
    while (a.length > 0 && d.length > 0) {
        if (isAD) {
            ans += a.pop();
            ans += d.pop();
        } else {
            ans += d.pop();
            ans += a.pop();
        }
    }
    
    if (a.length > 0) ans += a[0];
    if (d.length > 0) ans += d[0];
    
    return ans
};
