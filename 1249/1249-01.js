var minRemoveToMakeValid = function(s) {
    const stack = [];
    const invalids = [];
    const arrs = s.split("");
    
    for (const [i, c] of arrs.entries()) {
        if (c === "(") stack.push(i)
        else if (c === ")") {
            if (stack.length === 0) invalids.push(i);
            else stack.pop();
        }
    }
    
    let res = s;
    let count = 0;
    const tagrets = [...invalids, ...stack];
    
    for (const idx of tagrets) {
        const tid = idx - count;
        const t1 = res.slice(0, tid);
        const t2 = res.slice(tid + 1);
        res = t1 + t2;
        count++;
    }
    
    return res;
}
