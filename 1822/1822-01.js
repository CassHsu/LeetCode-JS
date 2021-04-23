var arraySign = function(nums) {
    let p = 1;
    for (let n of nums) {
        p *= n;
    }
    return signFunc(p);
};

function signFunc(p) {
    if (p > 0) return 1;
    else if (p < 0) return -1;
    else return 0;
}
