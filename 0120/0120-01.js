var minimumTotal = function(triangle) {
    const dp = [];
    const size = triangle.length;
    for (let i = 0; i < size + 1; i++) {
        dp.push(0);
    }
    
    for (let i = size - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
        
    return dp[0];
};
