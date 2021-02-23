var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        
        while (true) {
            const mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid) && !isBadVersion(mid-1)) {
                return mid;
            }
            if (isBadVersion(mid) === false) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return 0;
    };
};
