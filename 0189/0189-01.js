var rotate = function(nums, k) {
    const size = nums.length;
    if (size < 2) {
        return
    }
    
    const reverse = (l, r) => {
        while (l < r) {
            let tmp = nums[l];
            nums[l] = nums[r];
            nums[r] = tmp;
            
            l++;
            r--;
        }
    }
    
    k = k % size;
    reverse(0, size - 1);
    reverse(0, k - 1);
    reverse(k, size - 1);
};
