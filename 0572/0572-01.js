var isSubtree = function(root, subRoot) {
    if (!root || !subRoot) return false;
    
    const isSame = (n1, n2) => {
        if (!n1 && !n2) return true;
        else if (n1 && n2) {
            return (n1.val === n2.val) && isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
            
        } else return false;
    }
    
    return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
