var numTrees = function(n) {
    const cache = [1];
    for (let i = 0; i < n; i++) {
        cache.push(0);
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            cache[i] += cache[j-1] * cache[i-j];
        }
    }
    return cache[n];
};
