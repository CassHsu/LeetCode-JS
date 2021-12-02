var getLonelyNodes = function(root) {
    const lonely = [];
    
    const dfs = (node) => {
        if (!node) return;
        if (node.right && !node.left) lonely.push(node.right.val);
        if (!node.right && node.left) lonely.push(node.left.val);
        
        dfs(node.right);
        dfs(node.left);
    }
    
    dfs(root);
    return lonely;
};
