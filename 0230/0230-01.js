var kthSmallest = function(root, k) {
    let leftSize = getSize(root.left);
    if (k <= leftSize) return kthSmallest(root.left, k);
    if (k === leftSize + 1) return root.val;
    return kthSmallest(root.right, k - (leftSize + 1));
};

function getSize(root) {
    if (root === null || root === undefined) return 0;
    return getSize(root.left) + 1 + getSize(root.right);
}