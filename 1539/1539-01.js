var findKthPositive = function(arr, k) {
    let count = 0;
    let i = 1;
    let target = 0;

    while (count < k) {
        if (arr.includes(i) == false) {
            target = i;
            count++;
        }

        i++;
    }

    return target;
};
