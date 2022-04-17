var convertBST = function(root) {
    const dfs = (node, total) => {
        if (!node) return total;
        
        node.val += dfs(node.right, total);
        return dfs(node.left, node.val);
    };
    
    dfs(root, 0);
    return root;
};
