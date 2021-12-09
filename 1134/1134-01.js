var isArmstrong = function(n) {
    const sn = n.toString().split("");
    const size = sn.length;
    
    let total = 0;
    for (let c of sn) {
        total += Math.pow(parseInt(c), size);
    }
    
    return total === n ? true: false;
};
