var numOfStrings = function(patterns, word) {
    let count = 0;
    patterns.forEach(p => { if (word.includes(p)) count++ });
    return count;
};
