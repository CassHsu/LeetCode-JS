var hIndex = function(citations) {
    for (let h = citations.length; h > 0; h--) {
        let i = citations.length - h;
        if (citations[i] >= h) {
            return h;
        }
    }
    return 0;
};
