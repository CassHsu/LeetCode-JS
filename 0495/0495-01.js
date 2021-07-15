var findPoisonedDuration = function(timeSeries, duration) {
    let count = 0;
    
    for (let [i, t] of timeSeries.entries()) {
        count += duration;
        
        if (i > 0) {
            const diff = t - timeSeries[i - 1];
            if (diff < duration) {
                count -= (duration - diff);
            }
        }
    }
    
    return count;
};
