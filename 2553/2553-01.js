var separateDigits = function(nums) {
    const ans = [];

    for (const num of nums) {
        const arr = num.toString().split("");
        for (const c of arr) {
            ans.push(parseInt(c));
        }
    }

    return ans;
};
