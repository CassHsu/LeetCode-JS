var inorderTraversal = function(root) {
    const res = [];
    
    const inorder = (node) => {
        if (!node) return;
        
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);
    return res;
};
