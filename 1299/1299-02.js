var replaceElements = function(arr) {
    const size = arr.length;
    let max = arr[size-1];
    arr[size-1] = -1;
    
    for (let i=size-2; i >= 0; i--) {
        let tmp = max;
        max = (arr[i] > max) ? arr[i]: max;
        arr[i] = tmp;
    }
    return arr;
};
