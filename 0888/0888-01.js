var fairCandySwap = function(aliceSizes, bobSizes) {
    const sum_a = aliceSizes.reduce((acc, cur) => acc + cur);
    const sum_b = bobSizes.reduce((acc, cur) => acc + cur);
    
    const diff = Math.floor((sum_a - sum_b) / 2);
    const set_a = new Set(aliceSizes);
    const set_b = new Set(bobSizes);
    
    for (const c of set_b) {
        if (set_a.has(c + diff)) {
            return [c + diff, c];
        }
    }
    return [];
};
