var isPowerOfFour = function(n) {
    while (n > 3) {
        if (n % 4 !== 0) return false;
        
        n = Math.floor(n / 4);
    }
    
    return n === 1;
};
