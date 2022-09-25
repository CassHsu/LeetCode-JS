var pathSum = function(root, targetSum) {
    if (!root) return [];
    let res = [];
    
    const dfs = (node, arr, sum) => {
        arr.push(node.val);
        sum += node.val;
        if (sum == targetSum && !node.left && !node.right) {
            res.push(arr.slice(0));
            return;
        }
        
        if (node.left) dfs(node.left, [...arr], sum);
        if (node.right) dfs(node.right, [...arr], sum);
    }
    
    dfs(root, [], 0);
    return res;
};
