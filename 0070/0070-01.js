var climbStairs = function(n) {
    const cache = [];
    for (let i = 0; i < n+1; i++) {
        cache.push(0);
    }
    return climb1or2(0, n, cache);
};

function climb1or2(i, n, cache) {
    if (i > n) return 0;
    if (i == n) return 1;
    if (cache[i] > 0) return cache[i];
    
    cache[i] = climb1or2(i+1, n, cache) + climb1or2(i+2, n, cache);
    return cache[i];
}
