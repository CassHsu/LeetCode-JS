var largestAltitude = function(gain) {
    let last = 0;
    let max = 0;
    gain.forEach(g => {
       last = last + g;
        if (last > max) max = last;
    });
    return max;
};
