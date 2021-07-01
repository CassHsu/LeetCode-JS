var preorderTraversal = function(root) {
    const ret = [];
    const preorder = (node) => {
        if (node == null) return;
        
        ret.push(node.val);
        preorder(node.left);
        preorder(node.right);
    };
    
    preorder(root);
    
    return ret;
};
