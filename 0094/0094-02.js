var inorderTraversal = function(root) {
    const res = [];
    helper(root, res);
    return res;
};

function helper(node, res)  {
    if (node == null) return;
    
    helper(node.left, res);
    res.push(node.val);
    helper(node.right, res);
}
