var countAndSay = function(n) {
    if (n === 1) return "1";
    
    const cs = countAndSay(n - 1);
    let init = cs[0];
    let count = 0;
    let res = "";
    
    for (let c of cs) {
        if (c === init) {
            count += 1;
        } else {
            res += count.toString() + init;
            count = 1;
            init = c;
        }
    }
    res += count.toString() + init;
    
    return res;
};