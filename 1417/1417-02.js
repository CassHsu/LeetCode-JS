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
    
    let i = 0;
    let j = 0;
    while (a.length > i && d.length > j) {
        if (isAD) {
            ans += a[i];
            ans += d[j];
        } else {
            ans += d[j];
            ans += a[i];
        }
        i++;
        j++;
    }
    
    if (a.length > i) ans += a[i];
    if (d.length > j) ans += d[j];
    
    return ans
};
