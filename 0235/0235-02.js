var lowestCommonAncestor = function(root, p, q) {
    let n = root;
    
    while (n) {
        if (p.val > n.val && q.val > n.val) {
            n = n.right;
        } else if (p.val < n.val && q.val < n.val) {
            n = n.left;
        } else {
            return n;
        }
    }
    
    return null;
};
