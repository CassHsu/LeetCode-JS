var trimBST = function(root, low, high) {
    const trim = (node) => {
        if (!node) return null;
        else if (node.val > high) {
            return trim(node.left);
        } else if (node.val < low) {
            return trim(node.right);
        } else {
            node.left = trim(node.left);
            node.right = trim(node.right);
            return node;
        }
    }
    
    return trim(root);
};
