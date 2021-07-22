var maxProductDifference = function(nums) {
    let [a, b, c, d] = [Infinity, Infinity, 0, 0];
    for (let n of nums) {
        if (n <= a) { b = a; a = n; } else if (n <= b) b = n;
        if (d <= n) { c = d, d = n; } else if (c <= n) c = n;
    }
    return c * d - a * b;
};
