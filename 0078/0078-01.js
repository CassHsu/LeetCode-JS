var subsets = function(nums) {
    const ret = [[]];
    
    for (let n of nums) {
        ret.forEach(s => {
            ret.push([...s, n]);
        });
    }
    return ret;
};
