var findPoisonedDuration = function(timeSeries, duration) {
    let n = timeSeries.length;
    if (n == 0) return 0;
    
    let count = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        count += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    
    return count + duration;
};
