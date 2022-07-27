var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root === p || root === q) return root;
    
    const l = lowestCommonAncestor(root.left, p, q);
    const r = lowestCommonAncestor(root.right, p, q);
    
    if (l && r) return root;
    if (!l && !r) return null;
    
    return l == null ? r: l;
};
