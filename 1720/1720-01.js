/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const ans = [];
    ans.push(first);
    for (let e of encoded) {
        ans.push(ans[ans.length-1] ^ e);
    }
    return ans;
};