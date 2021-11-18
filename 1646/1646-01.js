var getMaximumGenerated = function(n) {
    if (n == 0) return 0;
    
    const dp = new Array(n+1).fill(0);
    dp[1] = 1;
    
    const m = Math.floor((n + 1) / 2);
    for (let i = 1; i < m; i++) {
        dp[i * 2] = dp[i];
        dp[(i * 2) + 1] = dp[i] + dp[i + 1];
    }
    
    return Math.max(...dp);
};
