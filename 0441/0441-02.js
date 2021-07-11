var arrangeCoins = function(n) {
    let k = 1;
    
    while (n >= k) {
        n -= k;
        k++;
    }
    
    return k - 1;
};
