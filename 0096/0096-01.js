var cache = new Map();
var numTrees = function(n) {
    if (n == 0) return 1;
    if (cache.has(n)) return cache.get(n);
    
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += numTrees(i - 1) * numTrees(n - i);  
    }
    cache.set(n, ans);
    return ans;
};
