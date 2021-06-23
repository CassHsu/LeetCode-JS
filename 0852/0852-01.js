var peakIndexInMountainArray = function(arr) {
    let pi = 0;
    let pv = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pv) {
            pi = i;
            pv = arr[i];
        }
    }
    
    return pi;
};
