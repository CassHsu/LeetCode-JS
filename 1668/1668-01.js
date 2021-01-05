var maxRepeating = function(sequence, word) {
    const keep = word;
    let count = 0;
    
    while (sequence.includes(word)) {
        count++;
        word += keep;
    }
    return count;
};