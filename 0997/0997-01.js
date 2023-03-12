var findJudge = function(n, trust) {
    const trusts = [];
    const trusted = [];
    for (let i = 0; i < n + 1; i++) {
        trusts[i] = false;
        trusted[i] = 0;
    }
    
    for (let i = 0; i < trust.length; i++) {
        trusts[trust[i][0]] = true;
        trusted[trust[i][1]]++;
    }
    
    let judge = -1;
    for (let i = 1; i < trusts.length; i++) {
        if (trusts[i] === false) {
            judge = i;
            break;
        }
    }
    if (judge === -1) return -1;
    
    if (trusted[judge] === n - 1) {
        return judge;
    } else {
        return -1;
    }
};
