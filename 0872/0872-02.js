var leafSimilar = function(root1, root2) {
    const dfs = (node) => {
        if (!node.left && !node.right) return node.val.toString();
        
        let ret = [];
        if (node.left) {
            ret.push(dfs(node.left));
        }
        
        if (node.right) {
            ret.push(dfs(node.right));
        }
        
        return ret.join("-");
    };
    
    return dfs(root1) === dfs(root2);
};
