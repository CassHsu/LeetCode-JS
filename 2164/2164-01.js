var sortEvenOdd = function(nums) {
    const n = nums.length;
    const odds = [];
    const evens = [];
    const ans = [];
    
    nums.forEach((n, i) => {
        if (i % 2 === 0) evens.push(n);
        else odds.push(n);
    });
    
    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);
    
    let i = 0;
    let j = 0;
    const oddSize = odds.length;
    const evenSize = evens.length;
    while (i < evenSize || j < oddSize) {
        if (i < evenSize) {
            ans.push(evens[i]);
            i++;
        }
        if (j < oddSize) {
            ans.push(odds[j]);
            j++;
        }
    }
    
    return ans;
};
