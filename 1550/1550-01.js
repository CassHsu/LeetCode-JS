var threeConsecutiveOdds = function(arr) {
    let count = 0;
    
    for (let a of arr) {
        if (a % 2 !== 0) {
            count++;
            
            if (count === 3) return true;
            
        } else {
            count = 0;
        }
    }
    
    return false;
};
