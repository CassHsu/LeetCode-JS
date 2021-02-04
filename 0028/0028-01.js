var strStr = function(haystack, needle) {
    if (needle === "" || haystack === needle) return 0;
    
    let p = 0;
    const nSize = needle.length;
    const diff = haystack.length - nSize;
    while (p <= diff) {
        if (haystack.substring(p, p + nSize) === needle) {
            return p;
        } else {
            p++;
        }
    }
    
    return -1;
};