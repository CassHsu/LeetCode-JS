var maxlv;
var sum;

var deepestLeavesSum = function(root) {
    sum = 0;
    maxlv = 0;
    
    dfs(root, 0);
    return sum;
};

function dfs(root, lv) {
    if (!root) return
    if (lv > maxlv) {
        maxlv = lv;
        sum = root.val;
    } else if (lv === maxlv) {
        sum += root.val;
    }
    
    dfs(root.left, lv + 1);
    dfs(root.right, lv + 1);
}
