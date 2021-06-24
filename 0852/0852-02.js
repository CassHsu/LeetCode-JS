var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let h = arr.length - 1;
    
    while (l < h) {
        let m = Math.floor((l + h) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            h = m;
        }
    }
    
    return l;
};
