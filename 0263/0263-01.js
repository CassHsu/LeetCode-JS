var isUgly = function(n) {
    if (n === 0) return false;
    
    const arr = [2, 3, 5];
    for (let a of arr) {
        while (n % a === 0) {
            n /= a
        }   
    }
    return n === 1;
};
