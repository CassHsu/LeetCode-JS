var mostWordsFound = function(sentences) {
    let mx = 0;
    
    sentences.forEach(s => {
        const count = s.split(" ").length;
        if (count > mx) mx = count;
    });
    
    return mx;
};
