var sumOfMultiples = function(n) {
    const multiples = [];

    for (let i = 0; i <= n; i++) {
        if (i % 3 ==0 || i % 5 == 0 || i % 7 == 0) {
            multiples.push(i);
        }
    }

    let ans = 0;
    multiples.forEach(m => ans += m);
    return ans;
};
