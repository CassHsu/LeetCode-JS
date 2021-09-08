var invertTree = function(root) {
    if (!root) return null;
    
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    
    invertTree(root.right);
    invertTree(root.left);
    
    return root;
};
