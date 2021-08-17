var maxDepth = function(root) {
    const dfs = (node, count) => {
        if (!node) return count;
        
        const l = dfs(node.left, count + 1);
        const r = dfs(node.right, count + 1);
        
        return Math.max(l, r);
    }
    
    return dfs(root, 0)
};
