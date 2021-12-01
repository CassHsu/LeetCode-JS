var anagramMappings = function(nums1, nums2) {
    const ans = [];
    const m = new Map();
    
    nums2.forEach((n, i) => {
       m[n] = i;
    });
    
    nums1.forEach(n => {
       ans.push(m[n]); 
    });
    
    return ans;
};
