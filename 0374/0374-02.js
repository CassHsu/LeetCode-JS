var guessNumber = function(n) {
    let mid = Math.floor(n / 2);
    
    while (true) {
        let res = guess(mid);
        
        if (res === 0) {
            return mid;
        } else if (res > 0) {
            mid = Math.floor((mid + 1 + n) / 2);
            
        } else {
            n = mid - 1;
            mid = Math.floor(n / 2);
        }
    }
    
    return -1;
};
