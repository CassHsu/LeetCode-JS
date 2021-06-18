var averageOfLevels = function(root) {
    const sums = [];
    const counts = [];
    
    dfs(root, 0, sums, counts);
    for (let i = 0; i < sums.length; i++) {
        sums[i] = sums[i] / counts[i];
    }
    return sums;
};

const dfs = function(n, i, sums, counts) {
    if (n == null) return;
    
    if (i < sums.length) {
        sums[i] += n.val;
        counts[i]++;
        
    } else {
        sums.push(n.val);
        counts.push(1);
    }
    
    dfs(n.left, i+1, sums, counts);
    dfs(n.right, i+1, sums, counts);
}
